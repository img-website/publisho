import React, { Component } from "react";
import {Checkbox} from "@nextui-org/react";
export class Category extends Component {
  render() {
    return (
      <>
        <div className="flex justify-between  max-w-7xl px-6 lg:px-8 w-full mx-auto py-4">
          <ol className="flex items-center whitespace-nowrap">
            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                href="#"
              >
                Home
              </a>
              <svg
                className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </li>
            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                href="#"
              >
                App Center
                <svg
                  className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </li>
            <li
              className="inline-flex items-center text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              Application
            </li>
          </ol>

          <main className="p-2 text-zinc-700 flex items-center justify-center">
            <button className="relative group transition-all duration-200 focus:overflow-visible w-40 h-max p-2 overflow-hidden flex flex-row justify-center bg-white gap-2 rounded-lg border border-zinc-200">
              <span>Sort by</span>
              <svg
                className="rotate-90 group-focus:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
                />
              </svg>
              <div className="absolute z-40 shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
                <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                  <p>New to Old</p>
                </span>
                <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                  <p>Old to New</p>
                </span>
                <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                  <p>Popular</p>
                </span>
              </div>
            </button>
          </main>
        </div>
        <div className="grid grid-cols-12 gap-4 max-w-7xl px-6 lg:px-8 w-full mx-auto">
          <div className="col-span-3 ">
            <div className="w-full">
              <div className="mx-auto max-w-lg">
                <div className="divide-y divide-gray-200">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-black">
                      Category
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                      <Checkbox color="default">Option</Checkbox>
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        23
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                      <Checkbox color="default">Option</Checkbox>
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        23
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                      <Checkbox color="default">Option</Checkbox>
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        23
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                      <Checkbox color="default">Option</Checkbox>
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        23
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                      <Checkbox color="default">Option</Checkbox>
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        23
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                      <Checkbox color="default">Option</Checkbox>
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        23
                      </span>
                    </a>
                  </details>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-black">
                      Search by: Author
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Rishab Pant
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        23
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Markes Jili
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        78
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Natsha Gill
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        4
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Manmohan Singh
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        50
                      </span>
                    </a>

                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Swift Jana
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        50
                      </span>
                    </a>

                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Adrio David
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        50
                      </span>
                    </a>
                  </details>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-black">
                      Sort: by
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Newest to Oldest
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        All
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Oldest to Newest
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        All
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Most Searched
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        86
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group/edit flex items-center justify-between group:hover/edit:bg-white gap-2 my-2"
                    >
                      <p className="ease-in duration-200 group-hover/edit:text-black">
                        Popular
                      </p>
                      <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover/edit:text-white group-hover/edit:bg-black group-hover/edit:border-dark">
                        23
                      </span>
                    </a>
                  </details>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <div className="mx-auto gap-4 grid sm:grid-cols-2 grid-cols-1  max-w-7xl px-6 lg:px-8 w-full mt-3">
              <div className="group shadow-xl p-3">
                <div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
                  <a href="blog-single.html">
                    <img
                      src="https://images.unsplash.com/photo-1609703048009-d3576872b32c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lcmNlZGVzfGVufDB8fDB8fHww"
                      alt="image"
                      className="size-full object-cover "
                    />
                  </a>
                </div>
                <h4>
                  <a
                    href="blog-single.html"
                    className="block text-dark font-bold text-xl mb-3.5"
                  >
                    <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                      Stylish Kitchen And Dining Room With Functional Ideas
                    </span>
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the print and typesetting
                  industry...
                </p>
                <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                  <div className="flex items-center gap-2.5">
                    <a href="author.html" className="flex items-center gap-3">
                      <div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
                        <img
                          src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="user"
                        />
                      </div>
                      <p className="text-sm">Adrio Devid</p>
                    </a>
                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                    <p className="text-sm">Sep 10, 2025</p>
                  </div>
                  <a
                    href="category.html"
                    className="inline-flex text-green-700 bg-green-100 font-medium text-sm py-1 px-3 rounded-full"
                  >
                    Travel
                  </a>
                </div>
              </div>
              <div className="group shadow-xl p-3">
                <div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
                  <a href="blog-single.html">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                      className="size-full object-cover "
                    />
                  </a>
                </div>
                <h4>
                  <a
                    href="blog-single.html"
                    className="block text-dark font-bold text-xl mb-3.5"
                  >
                    <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                      Stylish Kitchen And Dining Room With Functional Ideas
                    </span>
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the print and typesetting
                  industry...
                </p>
                <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                  <div className="flex items-center gap-2.5">
                    <a href="author.html" className="flex items-center gap-3">
                      <div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
                        <img
                          src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="user"
                        />
                      </div>
                      <p className="text-sm">Adrio Devid</p>
                    </a>
                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                    <p className="text-sm">Sep 10, 2025</p>
                  </div>
                  <a
                    href="category.html"
                    className="inline-flex text-green-700 bg-green-100 font-medium text-sm py-1 px-3 rounded-full"
                  >
                    Travel
                  </a>
                </div>
              </div>
              <div className="group shadow-xl p-3">
                <div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
                  <a href="blog-single.html">
                    <img
                      src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbGl0aWNzfGVufDB8fDB8fHww"
                      alt="image"
                      className="size-full object-cover "
                    />
                  </a>
                </div>
                <h4>
                  <a
                    href="blog-single.html"
                    className="block text-dark font-bold text-xl mb-3.5"
                  >
                    <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                      Stylish Kitchen And Dining Room With Functional Ideas
                    </span>
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the print and typesetting
                  industry...
                </p>
                <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                  <div className="flex items-center gap-2.5">
                    <a href="author.html" className="flex items-center gap-3">
                      <div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
                        <img
                          src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="user"
                        />
                      </div>
                      <p className="text-sm">Adrio Devid</p>
                    </a>
                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                    <p className="text-sm">Sep 10, 2025</p>
                  </div>
                  <a
                    href="category.html"
                    className="inline-flex text-green-700 bg-green-100 font-medium text-sm py-1 px-3 rounded-full"
                  >
                    Travel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Category;
