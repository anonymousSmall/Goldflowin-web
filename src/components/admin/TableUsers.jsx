// rafce
import React, { useState, useEffect } from "react";
import { getListAllUsers } from "../../api/admin";
import useEcomStore from "../../store/ecom-store";
import { changeUserStatus, changeUserRole } from "../../api/admin";
import { toast } from "react-toastify";
const TableUsers = () => {
  const token = useEcomStore((state) => state.token);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // code body
    handleGetUsers(token);
  }, []);

  const handleGetUsers = (token) => {
    getListAllUsers(token)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeUserStatus = (userId, userStatus) => {
    console.log(userId, userStatus);
    const value = {
      id: userId,
      enabled: !userStatus,
    };
    changeUserStatus(token, value)
      .then((res) => {
        console.log(res);
        handleGetUsers(token);
        toast.success("Update Status Success!!");
      })
      .catch((err) => console.log(err));
  };

  const handleChangeUserRole = (userId, userRole) => {
    // console.log(userId, userStatus);
    const value = {
      id: userId,
      role: userRole,
    };
    changeUserRole(token, value)
      .then((res) => {
        console.log(res);
        handleGetUsers(token);
        toast.success("Update Role Success!!");
      })
      .catch((err) => console.log(err));
  };

  console.log(users);
  return (
    <div className="container mx-auto p-4 bg-white shadow-md">
      <table className="table w-full border rounded-md">
        <thead>
          <tr className="bg-gray-200 border shadow-md">
            <th className="py-3 px-6 text-left">ลำดับ</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">สิทธิ์</th>
            <th className="py-3 px-6 text-left">สถานะ</th>
            <th className="py-3 px-6 text-left">จัดการ</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((el, i) => (
            <tr key={el.id}>
              <td className="py-3 px-6 text-left">{i + 1}</td>
              <td className="py-3 px-6 text-left">{el.email}</td>
              <td className="py-3 px-6 text-left">
                <select
                  onChange={(e) => handleChangeUserRole(el.id, e.target.value)}
                  value={el.role}
                >
                  <option>user</option>
                  <option>admin</option>
                </select>
              </td>

              <td className="py-3 px-6 text-left">{el.enabled ? "Active" : "Inactive"}</td>
              <td className="py-3 px-6 text-left">
                <button
                  className="bg-yellow-500 text-white 
                  p-1 rounded-md shadow-md"
                  onClick={() => handleChangeUserStatus(el.id, el.enabled)}
                >
                  {el.enabled ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;