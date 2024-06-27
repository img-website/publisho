import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <div className="grid grid-cols-12">
        <div className='col-span-2 bg-gray-800'>
            <AdminSidebar/>
        </div>
        <div className='col-span-10'>
            <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default AdminLayout