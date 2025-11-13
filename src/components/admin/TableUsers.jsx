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
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-md rounded-2xl border border-blue-100">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center p-5 border-b border-blue-100 gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700">
              👥 จัดการผู้ใช้งาน
            </h2>
            <p className="text-sm text-indigo-400">
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
              className="w-full bg-white/70 border border-indigo-100 rounded-lg py-2 pl-10 pr-4 text-sm text-gray-700 
              focus:ring-2 focus:ring-indigo-300 focus:outline-none shadow-sm placeholder-indigo-300"
            />
            <Search className="absolute left-3 top-2.5 text-indigo-300 w-4 h-4" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-indigo-200 via-blue-200 to-sky-200 text-indigo-800">
              <tr className="text-sm md:text-base">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">สิทธิ์</th>
                <th className="py-3 px-4">สถานะ</th>
                <th className="py-3 px-4 text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-100">
              {currentUsers.length > 0 ? (
                currentUsers.map((el, i) => (
                  <tr
                    key={el.id}
                    className="hover:bg-indigo-50/70 transition-all duration-200"
                  >
                    <td className="py-3 px-4 text-gray-700 text-sm">
                      {indexOfFirstUser + i + 1}
                    </td>
                    <td className="py-3 px-4 text-gray-700 break-words text-sm">
                      {el.email}
                    </td>
                    <td className="py-3 px-4">
                      <select
                        onChange={(e) =>
                          handleChangeUserRole(el.id, e.target.value)
                        }
                        value={el.role}
                        className="border border-indigo-100 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-200 bg-white/80 text-gray-700"
                      >
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full font-medium ${
                          el.enabled
                            ? "bg-green-100 text-green-700"
                            : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {el.enabled ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        className={`px-3 py-1.5 rounded-md text-white text-sm font-medium transition-all shadow-sm 
                        ${
                          el.enabled
                            ? "bg-gradient-to-r from-rose-300 to-rose-400 hover:from-rose-400 hover:to-rose-500"
                            : "bg-gradient-to-r from-sky-300 to-indigo-400 hover:from-sky-400 hover:to-indigo-500"
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
                    className="text-center py-6 text-indigo-400 text-sm"
                  >
                    ไม่มีข้อมูลผู้ใช้ในระบบ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center p-5 gap-4 bg-gradient-to-r from-white via-blue-50 to-indigo-50 border-t border-indigo-100">
          <div className="flex items-center gap-2 text-indigo-500 text-sm">
            <span>แสดงต่อหน้า:</span>
            <select
              value={usersPerPage}
              onChange={(e) => {
                setUsersPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-indigo-100 rounded-md px-2 py-1 bg-white/80 text-indigo-600 focus:ring-2 focus:ring-indigo-200"
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
                className="px-3 py-1 rounded-md bg-white border border-indigo-100 text-indigo-500 hover:bg-indigo-50 disabled:opacity-40"
              >
                ⬅ ก่อนหน้า
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    currentPage === i + 1
                      ? "bg-indigo-300 text-white shadow-sm"
                      : "bg-white border border-indigo-100 text-indigo-500 hover:bg-indigo-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 rounded-md bg-white border border-indigo-100 text-indigo-500 hover:bg-indigo-50 disabled:opacity-40"
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
