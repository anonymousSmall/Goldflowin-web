// rafce
import React, { useState, useEffect } from "react";
import { getListAllUsers, changeUserStatus, changeUserRole } from "../../api/admin";
import useEcomStore from "../../store/ecom-store";
import { toast } from "react-toastify";

const TableUsers = () => {
  const token = useEcomStore((state) => state.token);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleGetUsers(token);
  }, []);

  const handleGetUsers = (token) => {
    getListAllUsers(token)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const handleChangeUserStatus = (userId, userStatus) => {
    const value = { id: userId, enabled: !userStatus };
    changeUserStatus(token, value)
      .then(() => {
        handleGetUsers(token);
        toast.success("อัปเดตสถานะสำเร็จ!");
      })
      .catch((err) => console.log(err));
  };

  const handleChangeUserRole = (userId, userRole) => {
    const value = { id: userId, role: userRole };
    changeUserRole(token, value)
      .then(() => {
        handleGetUsers(token);
        toast.success("อัปเดตสิทธิ์สำเร็จ!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
            👥 จัดการผู้ใช้งาน
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ดูและจัดการสิทธิ์และสถานะของผู้ใช้ทั้งหมด
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="py-3 px-4 text-sm md:text-base">ลำดับ</th>
                <th className="py-3 px-4 text-sm md:text-base">Email</th>
                <th className="py-3 px-4 text-sm md:text-base">สิทธิ์</th>
                <th className="py-3 px-4 text-sm md:text-base">สถานะ</th>
                <th className="py-3 px-4 text-sm md:text-base text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {users?.map((el, i) => (
                <tr
                  key={el.id}
                  className="hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    {i + 1}
                  </td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300 text-sm break-words">
                    {el.email}
                  </td>
                  <td className="py-3 px-4">
                    <select
                      onChange={(e) => handleChangeUserRole(el.id, e.target.value)}
                      value={el.role}
                      className="border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm md:text-base 
                      focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-gray-100"
                    >
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                  <td className="py-3 px-4 text-sm md:text-base">
                    <span
                      className={`px-3 py-1 rounded-full font-medium ${
                        el.enabled
                          ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                          : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                      }`}
                    >
                      {el.enabled ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className={`px-3 py-1.5 rounded-md text-white text-sm md:text-base font-medium shadow-md transition-all 
                      ${
                        el.enabled
                          ? "bg-yellow-500 hover:bg-yellow-600"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      onClick={() => handleChangeUserStatus(el.id, el.enabled)}
                    >
                      {el.enabled ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 dark:text-gray-400"
                  >
                    ไม่มีข้อมูลผู้ใช้ในระบบ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableUsers;
