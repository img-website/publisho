import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Category from "../pages/Category";
import About from "../pages/About";
import Auther from "../pages/Auther";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import Header from "../components/Header";
import ForgetPass from "../components/auth/ForgetPass";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../admin/components/Admin";
import AddBlog from "../pages/AddBlog";
import DashboardTable from "../admin/components/dashboardTable/Table";
import Footer from "../components/Footer";
import { Newblog } from "../admin/components/Newblog";
import { Newcard } from "../components/Blogcard/Newcard";
import HeaderSkeleton from "../components/skeleton/HeaderSkeleton";
import DetailPageSkeleton from "../components/skeleton/DetailPageSkeleton";

const RouteComp = () => {
  const location = useLocation();
  const noHeaderPaths = ["/signUp", "/login", "/forget-Password", "/admin"];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signUp"
          element={
            <ProtectedRoute auth>
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute auth>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forget-Password"
          element={
            <ProtectedRoute auth>
              <ForgetPass />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog/add"
          element={
            <ProtectedRoute>
              <AddBlog />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:slug" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/auther" element={<Auther />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminTable" element={<DashboardTable />} />
        <Route path="/newblog" element={<Newblog />} />
        <Route path="/newcard" element={<Newcard/>}/>
        <Route path="/detailpageskeleton" element={<DetailPageSkeleton/>}/>
      </Routes>
      {!noHeaderPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default RouteComp;
