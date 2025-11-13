// DashboardAdmin.jsx
import React, { useEffect, useState } from "react";
import { Users, Package, Layers, ShoppingCart } from "lucide-react";
import { listProduct } from "../../api/product";
import { listCategory } from "../../api/Category";
import { getListAllUsers } from "../../api/admin";
import useEcomStore from "../../store/ecom-store";

const DashboardAdmin = () => {
  const token = useEcomStore((state) => state.token);
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    categories: 0,
    orders: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [u, p, c] = await Promise.all([
          getListAllUsers(token),
          listProduct(),
          listCategory(),
        ]);
        setStats({
          users: u?.data?.length || 0,
          products: p?.data?.length || 0,
          categories: c?.data?.length || 0,
          orders: 32, // mock data
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-blue-50 via-purple-50 to-white min-h-screen">
      <h1 className="text-3xl font-semibold text-blue-900 mb-6">
        Dashboard Overview
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card title="Users" value={stats.users} icon={<Users />} color="from-blue-400 to-blue-600" />
        <Card title="Products" value={stats.products} icon={<Package />} color="from-purple-400 to-purple-600" />
        <Card title="Categories" value={stats.categories} icon={<Layers />} color="from-pink-400 to-purple-500" />
        <Card title="Orders" value={stats.orders} icon={<ShoppingCart />} color="from-indigo-400 to-blue-500" />
      </div>

      {/* Recent Activity */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-6 border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>🛒 สินค้าใหม่ “Mitutoyo Caliper” ถูกเพิ่มเมื่อ 2 ชม. ที่แล้ว</li>
          <li>👤 ผู้ใช้ใหม่ “Somchai T.” ลงทะเบียนเมื่อ 3 ชม. ที่แล้ว</li>
          <li>📦 หมวดหมู่ “เครื่องมือวัด” ถูกสร้างเมื่อวานนี้</li>
          <li>💳 มีออเดอร์ใหม่ 5 รายการในวันนี้</li>
        </ul>
      </div>
    </div>
  );
};

const Card = ({ title, value, icon, color }) => (
  <div
    className={`rounded-2xl shadow-md bg-gradient-to-br ${color} p-5 text-white flex items-center justify-between transition-transform hover:scale-[1.03] duration-300`}
  >
    <div>
      <p className="text-sm opacity-80">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
    <div className="opacity-70">{icon}</div>
  </div>
);

export default DashboardAdmin;
