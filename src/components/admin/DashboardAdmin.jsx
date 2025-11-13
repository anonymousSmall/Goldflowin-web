import React, { useMemo } from "react";
import {
  Users,
  Package,
  Layers,
  ShoppingCart,
  TrendingUp,
  PieChart as PieChartIcon,
  PlusCircle,
  FolderPlus,
  UserPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEcomStore from "../../store/ecom-store";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// ✅ Error Boundary
export const DashboardErrorBoundary = ({ error }) => (
  <div className="p-10 text-center text-red-600">
    <h1 className="text-2xl font-bold mb-4">Something went wrong 😢</h1>
    <p>{error?.message || "Unknown error"}</p>
  </div>
);

const DashboardAdmin = () => {
  const navigate = useNavigate();

  // ✅ Fallback default empty arrays
  const data = useEcomStore((state) => ({
    users: state.users ?? [],
    products: state.products ?? [],
    categories: state.categories ?? [],
    orders: state.orders ?? [],
  }));

  const { users, products, categories, orders } = data;

  const stats = {
    users: users.length,
    products: products.length,
    categories: categories.length,
    orders: orders.length,
  };

  // ✅ Sales data
  const salesData = useMemo(() => {
    if (!orders || !orders.length) return [];
    const grouped = {};
    orders.forEach((o) => {
      if (!o.createdAt || !o.total) return; // skip invalid data
      const month = new Date(o.createdAt).toLocaleString("en-US", { month: "short" });
      grouped[month] = (grouped[month] || 0) + o.total;
    });
    return Object.entries(grouped).map(([month, sales]) => ({ month, sales }));
  }, [orders]);

  // ✅ Category data
  const categoryData = useMemo(() => {
    if (!products || !products.length) return [];
    const grouped = {};
    products.forEach((p) => {
      const cat = p?.category?.name || "อื่น ๆ";
      grouped[cat] = (grouped[cat] || 0) + 1;
    });
    return Object.entries(grouped).map(([name, value]) => ({ name, value }));
  }, [products]);

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

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <ClickableStatCard
          title="Users"
          value={stats.users}
          icon={<Users size={32} />}
          color="from-blue-400 to-blue-600"
          onClick={() => navigate("/admin/users")}
        />
        <ClickableStatCard
          title="Products"
          value={stats.products}
          icon={<Package size={32} />}
          color="from-purple-400 to-purple-600"
          onClick={() => navigate("/admin/products")}
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
            {salesData.length ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#818cf8" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-400 text-center mt-8">No sales data available</p>
            )}
          </div>
        </motion.div>

        {/* Pie Chart */}
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
            {categoryData.length ? (
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
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-400 text-center mt-8">No category data</p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-md border border-purple-100 p-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ActionButton
            label="เพิ่มสินค้าใหม่"
            icon={<PlusCircle size={24} />}
            color="from-indigo-400 to-indigo-600"
            onClick={() => navigate("/admin/product/create")}
          />
          <ActionButton
            label="เพิ่มหมวดหมู่"
            icon={<FolderPlus size={24} />}
            color="from-purple-400 to-purple-600"
            onClick={() => navigate("/admin/category")}
          />
          <ActionButton
            label="ดูรายชื่อสมาชิก"
            icon={<UserPlus size={24} />}
            color="from-pink-400 to-purple-500"
            onClick={() => navigate("/admin/users")}
          />
        </div>
      </motion.div>
    </div>
  );
};

// ✅ Clickable Stat Card
const ClickableStatCard = ({ title, value, icon, color, onClick }) => (
  <motion.div
    onClick={onClick}
    className={`cursor-pointer rounded-2xl shadow-md bg-gradient-to-br ${color} p-6 text-white flex items-center justify-between hover:shadow-lg hover:scale-[1.05] transition-all duration-300 active:scale-[0.98]`}
    whileHover={{ y: -3 }}
  >
    <div>
      <p className="text-sm opacity-80">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
    <div className="opacity-80">{icon}</div>
  </motion.div>
);

// ✅ Static Stat Card
const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    className={`rounded-2xl shadow-md bg-gradient-to-br ${color} p-6 text-white flex items-center justify-between hover:shadow-lg transition-all hover:scale-[1.03] duration-300`}
  >
    <div>
      <p className="text-sm opacity-80">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
    <div className="opacity-80">{icon}</div>
  </motion.div>
);

// ✅ Quick Action Button
const ActionButton = ({ label, icon, color, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-br ${color} text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300`}
    whileTap={{ scale: 0.97 }}
  >
    {icon} {label}
  </motion.button>
);

export default DashboardAdmin;
