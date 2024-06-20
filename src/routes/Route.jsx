import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Contact from "../pages/Contact";
import Category from "../pages/Category";
import About from "../pages/About";
import Signin from "../pages/Signin";
import Auther from "../pages/Auther";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import Header from "../components/Header";
import ForgetPass from "../components/auth/ForgetPass";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin";
import AddBlog from "../pages/AddBlog";
import DashboardTable from "../components/dashboardTable/Table";
import Footer from "../components/Footer";
import { Newblog } from "../pages/Newblog";


const RouteComp = () => {
  const location = useLocation();
  const noHeaderPaths = ["/signUp", "/login", "/forget-Password"];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signUp" element={<Signup />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/forget-Password" element={<ForgetPass />} /> */}
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
        
        <Route path="/detail/:slug" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/category" element={<Category />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/auther" element={<Auther/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/adminTable" element={<DashboardTable/>}/>
        <Route path="/newblog" element={<Newblog/>}/>
        
      </Routes>
          {!noHeaderPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default RouteComp;
