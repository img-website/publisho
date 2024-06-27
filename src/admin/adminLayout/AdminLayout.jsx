import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Outlet } from 'react-router-dom'
import {User} from "@nextui-org/react";

const AdminLayout = () => {
  return (
    <div>
      <div class="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
    <div class="mx-auto md:px-6 px-2">
        <div class="relative flex h-16 justify-between">
            <div class="flex flex-1 items-stretch justify-start">
                <a class="flex flex-shrink-0 items-center" href="#">
                <p href="/"className="font-bold text-inherit ">BLOGERA</p>
                </a>
            </div>
            <div class="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
            <User   
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
            </div>
        </div>
    </div>
</div>
        <div className="grid grid-cols-12  h-screen">
        <div className='md:col-span-2 bg-gray-800'>
            <AdminSidebar/>
        </div>
        <div className='md:col-span-10 col-span-12 mt-0 overflow-hidden overflow-y-auto'>
            <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default AdminLayout