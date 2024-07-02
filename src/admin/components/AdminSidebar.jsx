import React from 'react'
import { Loginicon } from '../../component/Icons'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div>
        <div class="flex flex-col absolute -translate-x-[800px] md:static md:translate-x-0   col-span-2 md:col-span-3 lg:col-span-2 h-screen px-2 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 overflow-hidden">
            {/* <Link to="/">
              <img
                class="w-auto h-6 sm:h-7"
                src="https://merakiui.com/images/logo.svg"
                alt=""
              />
            </Link> */}
            <div class="relative mt-6">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                placeholder="Search"
              />
            </div>
            <div class="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <Link
                  to="/admin"
                  class="flex items-center px-2 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold ">Dashboard</span>
                </Link>
                <Link
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to="AdminSidebar"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold ">Add Category</span>
                </Link>
                <a
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold ">View Category</span>
                </a>
                <Link
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to="addtag"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold ">Add Tag</span>
                </Link>
                <a
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold  relative">
                    View Tag
                  </span>
                </a>
                <a
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold  relative">
                    Add Image Link
                  </span>
                </a>
                <a
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold  relative">
                    View Image Link
                  </span>
                </a>
                <a
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold  relative">
                    Add Image
                  </span>
                </a>
                <a
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold  relative">
                    View Image
                  </span>
                </a>

                <a
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold ">Add Author</span>
                </a>
                <a
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold ">View Auther</span>
                </a>
                <Link
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to="add_New_Blog"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold ">Add Blog</span>
                </Link>
                <a
                  class="flex items-center px-2 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <Loginicon />
                  <span class="mx-4 text-sm font-semibold ">View Blog</span>
                </a>
              </nav>
            </div>
          </div>
    </div>
  )
}

export default AdminSidebar