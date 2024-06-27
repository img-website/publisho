import React from 'react'
import DashboardTable from './dashboardTable/Table'

const AdminDashboard = () => {
  return (
    <div>
        <div className="h-[calc(100vh-68px)] mt-[64px] col-span-12 md:col-span-9 lg:col-span-10 overflow-y-auto">
            <div className="pt-5 lg:px-16 px-6">
              <div className="grid grid-cols-12 items-stretch gap-3">
                <div className="lg:col-span-8 col-span-12 lg:mb-10 mb-4 h-full">
                  <div className="lg:grid-cols-3 md:grid-cols-2 *:h-full grid gap-5">
                    <div className="border p-4 rounded-sm shadow-xl   ">
                      <div className="*:size-6 p-2  bg-purple-50 text-purple-500 w-max rounded-full aspect-[1/1]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z"
                          ></path>
                          <circle
                            cx="256"
                            cy="256"
                            r="80"
                            fill="none"
                            stroke-miterlimit="10"
                            stroke-width="32"
                          ></circle>
                        </svg>
                      </div>
                      <div className="text-black text-2xl font-semibold mt-4">
                        3400+
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-slate-500">Total View</div>
                        <div className="text-base text-green-400 flex items-center">
                          0.54%
                          <span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border p-4 rounded-sm shadow-xl   ">
                      <div className="*:size-6 p-2  bg-purple-50 text-purple-500 w-max rounded-full aspect-[1/1]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="200px"
                          width="200px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                        </svg>
                      </div>
                      <div className="text-black text-2xl font-semibold mt-4">
                        3+
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-slate-500">Category</div>
                        <div className="text-base text-green-400 flex items-center">
                          0.54%
                          <span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border p-4 rounded-sm shadow-xl   ">
                      <div className="*:size-6 p-2  bg-purple-50 text-purple-500 w-max rounded-full aspect-[1/1]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 640 512"
                          height="200px"
                          width="200px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                        </svg>
                      </div>
                      <div className="text-black text-2xl font-semibold mt-4">
                        578+
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-slate-500">Follwers</div>
                        <div className="text-base text-red-400 flex items-center">
                          0.54%
                          <span className="rotate-180 ">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 col-span-12  items-stretch">
                  <div className="border p-3 grid grid-cols-12 bg-sky-50/30 shadow-2xl mb-20 lg:mb-0">
                    <div className="col-span-7 flex flex-col">
                      <div className="flex-1">
                        <a href="#" className="text-lg font-semibold">
                          John Doe
                        </a>
                        <p className="text-xs leading-tight font-semibold text-slate-500">
                          Author / Writter
                        </p>
                      </div>
                      <div>
                        <div className="flex mt-auto">
                          <div className="text-3xl font-bold text-slate-400">
                            32{" "}
                            <span className="text-sm text-slate-500 font-semibold">
                              Total Post
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5">
                      <div className="size-full *:size-full *:scale-[1.9]">
                        <img src="../src/assets/img/auther.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DashboardTable />
            </div>
          </div>
    </div>
  )
}

export default AdminDashboard