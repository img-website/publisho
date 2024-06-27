import React from "react";
import { BackIcon } from "../../component/Icons";

export const Newcard = () => {
  return (
    <>
      {/* card start */}
      <section className="relative select-none py-6 md:py-8 lg:py-16 bg-white overflow-hidden mt-12">
        <BackIcon className="absolute inset-0 z-0 h-full w-full pointer-events-none text-gray-200" />
        <div
          className="hidden z-0 sm:absolute sm:-top-10 sm:right-1/2 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl pointer-events-none"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-fuchsia-200 to-lime-100 opacity-20"></div>
        </div>
        <div
          className="absolute z-0 -top-52 left-1/2 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu pointer-events-none"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-fuchsia-900 to-lime-700 opacity-20"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8" id="blogList">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full relative z-10 md:gap-10 gap-6 pb-8">
            <div className="rounded-2xl group/blog relative">
              <div className="flex flex-col items-start justify-between w-full bg-white rounded-2xl rounded-br-none shadow-xl shadow-gray-300">
                <img
                  className="w-full aspect-[385/221] rounded-2xl rounded-br-none"
                  width="385"
                  height="217"
                  src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="w-full p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time datetime="2023-11-27" className="text-gray-500">
                      Jun 20, 2024
                    </time>
                    <a
                      href="#"
                      className="relative z-20 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Bike
                    </a>
                  </div>
                  <div className="group">
                    <a
                      href="#"
                      className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2 before:absolute before:inset-0 before:z-10"
                    >
                      HOW TO SAFELY MOUNT A BACKPACK ON A MOTORCYCLE?{" "}
                    </a>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      When it comes to hitting the open road on a motorcycle,
                      carrying essentials is a must. Whether it's a daily
                      commute or a long-distance adventure, having a reliable
                      method to transport your belongin...
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">Written by</p>
                      <p className="text-gray-600">Deepak Gill</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
