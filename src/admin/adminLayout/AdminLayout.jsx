import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Link, Outlet } from "react-router-dom";
import { User } from "@nextui-org/react";

const AdminLayout = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
        <div className="mx-auto md:px-6 px-2">
          <div className="relative flex h-16 justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <Link to="/" className="flex flex-shrink-0 items-center" href="#">
                <p className="font-bold text-inherit ">BLOGERA</p>
              </Link>
            </div>
            <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12  h-screen">
        <div className="md:col-span-2 bg-gray-800">
          <AdminSidebar />
        </div>
        <div className="md:col-span-10 col-span-12 mt-0 overflow-hidden overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
