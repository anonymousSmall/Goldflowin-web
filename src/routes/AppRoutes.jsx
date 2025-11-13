//rafce
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import History from "../pages/user/History";
import Checkout from "../pages/Checkout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Dashboard from "../pages/admin/Dashboard";
import Category from "../pages/admin/Category";
import Product from "../pages/admin/Product";
import Manage from "../pages/admin/Manage";
import LayoutUser from "../layouts/LayoutUser";
import HomeUser from "../pages/user/HomeUser";
import ProtectRouteUser from "./ProtectRouteUser";
import ProtectRouteAdmin from "./ProtectRouteAdmin";
import EditProduct from "../pages/admin/EditProduct";
import About from "../pages/About";
import Shop from "../pages/Shop";
import ManageOrders from "../pages/admin/ManageOrders";
import Contact from "../pages/Contact";
import Shops from "../pages/Shops";
import ProductDetails from "../pages/ProductDetails";
import ProductUser from "../pages/ProductUser";
import EditBrand from "../pages/admin/EditBrand";
import Brand from "../pages/admin/Brand";
import Payment from "../pages/user/Payment";
import PHardness from "../pages/PHardness";
import AllProduct from "../pages/product/AllProduct";
import Article from "../pages/admin/Article";
import News1 from "../pages/article/News1";
import StateContainer from "../components/admin/StateContainer";
import DashboardAdmin from "../components/admin/DashboardAdmin";
import CatalogProduct from "../pages/CatalogProduct";
import ForgotPassword from "../pages/auth/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "shops", element: <Shops /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "contact", element: <Contact /> },
      { path: "details", element: <ProductDetails /> },
      { path: "productuser/:id", element: <ProductUser /> },
      { path: "hardness", element: <PHardness /> },
      { path: "AllProduct", element: <AllProduct /> },
      { path: "Article1", element: <News1 /> },
      { path: "Catalog", element: <CatalogProduct /> },
      { path: "ForgotPassword", element: <ForgotPassword /> },
      ,
    ],
  },
  {
    path: "/admin",
    element: <ProtectRouteAdmin element={<LayoutAdmin />} />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "category", element: <Category /> },
      { path: "product", element: <Product /> },
      { path: "product/:id", element: <EditProduct /> },
      { path: "manage", element: <Manage /> },
      { path: "orders", element: <ManageOrders /> },
      { path: "brand", element: <Brand /> },
      { path: "brand/:id", element: <EditBrand /> },
      { path: "article", element: <Article /> },
      // { path: "dashboard", element: <StateContainer /> },
      { path: "dashboard", element: <DashboardAdmin /> },
    ],
  },
  {
    path: "/user",
    // element: <LayoutUser />,
    element: <ProtectRouteUser element={<LayoutUser />} />,
    children: [
      { index: true, element: <HomeUser /> },
      { path: "history", element: <History /> },
      { path: "payment", element: <Payment /> },
    ],
  },
]);
const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;



