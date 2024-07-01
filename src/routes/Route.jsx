import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Category from "../pages/Category";
import About from "../pages/About";
import Auther from "../pages/Auther";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import ForgetPass from "../components/auth/ForgetPass";
import ProtectedRoute from "./ProtectedRoute";
import AddBlog from "../pages/AddBlog";
import DashboardTable from "../admin/components/dashboardTable/Table";
import { Newblog } from "../admin/components/Newblog";
import { Newcard } from "../components/Blogcard/Newcard";
import DetailPageSkeleton from "../components/skeleton/DetailPageSkeleton";
import QuillForm from "../components/QillForm";
import AdminSidebar from "../admin/components/AdminSidebar";
import AdminDashboard from "../admin/components/AdminDashboard";
import AdminLayout from "../admin/adminLayout/AdminLayout";
import MainLayout from "./MainLayout";
import { Addtag } from "../admin/components/Addtag";

const RouteComp = () => {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
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
        <Route path="/adminSidebar" element={<AdminDashboard />} />
        <Route path="/adminTable" element={<DashboardTable />} />
        <Route path="/newblog" element={<Newblog />} />
        <Route path="/newcard" element={<Newcard/>}/>
        <Route path="/quillForm" element={<QuillForm/>}/>
        <Route path="/detailpageskeleton" element={<DetailPageSkeleton/>}/>

        </Route>

        {/* Admin Routes  */}

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />}/>
          <Route path="AdminSidebar" element={<AdminSidebar />} />
          <Route path="add_New_Blog" element={<Newblog />} />
          <Route path="addtag" element={<Addtag/>}/>
        </Route>
      </Routes>
     
    </>
  );
};

export default RouteComp;
