// import React from 'react'

// const StateContainer = () => {
//   return (
//     <div>StateContainer</div>
//   )
// }


// export default StateContainer

// DashboardAdmin.jsx
import React, { useEffect, useMemo } from "react";
import {
  Users,
  Package,
  Layers,
  ShoppingCart,
  TrendingUp,
  PieChart as PieChartIcon,
} from "lucide-react";
import useEcomStore from "../../store/ecom-store";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const StateContainer = () => {
  const { users, products, categories, orders } = useEcomStore((state) => ({
    users: state.users || [],
    products: state.products || [],
    categories: state.categories || [],
    orders: state.orders || [],
  }));

  // ✅ คำนวณข้อมูลจาก store
  const stats = {
    users: users.length,
    products: products.length,
    categories: categories.length,
    orders: orders.length,
  };

  // ✅ mock กราฟรายเดือนจาก order จริง (หรือจำลอง)
  const salesData = useMemo(() => {
    if (!orders || orders.length === 0)
      return [
        { month: "Jan", sales: 0, users: 0 },
        { month: "Feb", sales: 0, users: 0 },
        { month: "Mar", sales: 0, users: 0 },
      ];
    const grouped = {};
    orders.forEach((o) => {
      const month = new Date(o.createdAt).toLocaleString("en-US", {
        month: "short",
      });
      grouped[month] = (grouped[month] || 0) + (o.total || 0);
    });
    return Object.entries(grouped).map(([month, sales]) => ({
      month,
      sales,
      users: Math.floor(sales / 100),
    }));
  }, [orders]);

  // ✅ กราฟหมวดหมู่ (Top Categories)
  const categoryData = useMemo(() => {
    if (!products || !categories) return [];
    const grouped = {};
    products.forEach((p) => {
      const cat = p.category?.name || "อื่น ๆ";
      grouped[cat] = (grouped[cat] || 0) + 1;
    });
    return Object.entries(grouped).map(([name, value]) => ({ name, value }));
  }, [products, categories]);

  const COLORS = ["#818cf8", "#a78bfa", "#c084fc", "#e879f9", "#93c5fd"];

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-indigo-100 via-purple-50 to-white min-h-screen">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-indigo-900 mb-8"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dashboard Overview
      </motion.h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          title="Users"
          value={stats.users}
          icon={<Users size={32} />}
          color="from-blue-400 to-blue-600"
        />
        <StatCard
          title="Products"
          value={stats.products}
          icon={<Package size={32} />}
          color="from-purple-400 to-purple-600"
        />
        <StatCard
          title="Categories"
          value={stats.categories}
          icon={<Layers size={32} />}
          color="from-pink-400 to-purple-500"
        />
        <StatCard
          title="Orders"
          value={stats.orders}
          icon={<ShoppingCart size={32} />}
          color="from-indigo-400 to-blue-500"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">
        {/* Sales Chart */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-md border border-indigo-100 p-6 xl:col-span-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg md:text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
            <TrendingUp size={20} /> Monthly Sales
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#818cf8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Pie Chart: Top Categories */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-md border border-indigo-100 p-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-lg md:text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
            <PieChartIcon size={20} /> Top Categories
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-6 border border-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
          {products.slice(0, 4).map((p, i) => (
            <li key={i}>
              🛒 เพิ่มสินค้าใหม่ <strong>{p.title}</strong>{" "}
              เมื่อ{" "}
              {new Date(p.createdAt).toLocaleDateString("th-TH", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

// ✅ Reusable Card
const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    className={`rounded-2xl shadow-md bg-gradient-to-br ${color} p-6 text-white flex items-center justify-between hover:shadow-lg transition-all hover:scale-[1.03] duration-300`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div>
      <p className="text-sm opacity-80">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
    <div className="opacity-80">{icon}</div>
  </motion.div>
);

export default StateContainer;
