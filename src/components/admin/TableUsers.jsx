// rafce
import React, { useState, useEffect } from "react";
import {
  getListAllUsers,
  changeUserStatus,
  changeUserRole,
} from "../../api/admin";
import useEcomStore from "../../store/ecom-store";
import { toast } from "react-toastify";
import { Search } from "lucide-react";

const TableUsers = () => {
  const token = useEcomStore((state) => state.token);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    handleGetUsers(token);
  }, []);

  const handleGetUsers = (token) => {
    getListAllUsers(token)
      .then((res) => {
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
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

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm, users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700 gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              👥 จัดการผู้ใช้งาน
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ตรวจสอบสิทธิ์และสถานะของผู้ใช้ทั้งหมดในระบบ
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="🔍 ค้นหาอีเมลผู้ใช้..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/80 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
              rounded-lg py-2 pl-10 pr-4 text-sm text-gray-700 dark:text-gray-200 
              focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500 w-4 h-4" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 text-white">
              <tr>
                <th className="py-3 px-4 text-sm md:text-base">#</th>
                <th className="py-3 px-4 text-sm md:text-base">Email</th>
                <th className="py-3 px-4 text-sm md:text-base">สิทธิ์</th>
                <th className="py-3 px-4 text-sm md:text-base">สถานะ</th>
                <th className="py-3 px-4 text-sm md:text-base text-center">
                  จัดการ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {currentUsers.length > 0 ? (
                currentUsers.map((el, i) => (
                  <tr
                    key={el.id}
                    className="hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-150"
                  >
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300 text-sm">
                      {indexOfFirstUser + i + 1}
                    </td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200 break-words text-sm">
                      {el.email}
                    </td>
                    <td className="py-3 px-4">
                      <select
                        onChange={(e) =>
                          handleChangeUserRole(el.id, e.target.value)
                        }
                        value={el.role}
                        className="border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm 
                        focus:ring-2 focus:ring-indigo-400 bg-white/80 dark:bg-gray-700 dark:text-gray-100"
                      >
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full font-medium ${
                          el.enabled
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100"
                            : "bg-rose-100 text-rose-700 dark:bg-rose-700 dark:text-rose-100"
                        }`}
                      >
                        {el.enabled ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        className={`px-3 py-1.5 rounded-md text-white text-sm shadow-md font-medium transition-all 
                        ${
                          el.enabled
                            ? "bg-amber-400 hover:bg-amber-500"
                            : "bg-sky-500 hover:bg-sky-600"
                        }`}
                        onClick={() =>
                          handleChangeUserStatus(el.id, el.enabled)
                        }
                      >
                        {el.enabled ? "Disable" : "Enable"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
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

        {/* Pagination + Selector */}
        <div className="flex flex-col md:flex-row justify-between items-center p-5 gap-4 bg-white/70 dark:bg-gray-900/70 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
            <span>แสดงต่อหน้า:</span>
            <select
              value={usersPerPage}
              onChange={(e) => {
                setUsersPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 bg-white/80 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>

          {filteredUsers.length > usersPerPage && (
            <div className="flex flex-wrap justify-center items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 disabled:opacity-40"
              >
                ⬅ ก่อนหน้า
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    currentPage === i + 1
                      ? "bg-indigo-500 text-white shadow-sm"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 disabled:opacity-40"
              >
                ถัดไป ➡
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableUsers;
