import React, { useState } from "react";
import Header from "../components/Header";
import TopBlogs from "../components/TopBlogs";
import TopAuthers from "../components/TopAuthers";
import {Button , Input} from "@nextui-org/react";
import { FbIcon, Printicon, Twittericon, Linkdinicon, Subscribeicon } from "../component/Icons";


function Home() {
 
  return (
    <>
      <div className=" pb-12 bg-black xl:py-40 py-20 sm:py-20 md:py-28 ">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1610827776753-8c668b92d732?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="relative">
          <div className="px-5 mx-auto max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
                Master the basics of baking
              </h1>
              <p className="mt-6 tracking-tighter text-white">
                <span className=" font-normal [font-family:'Painting_With_Chocolate'] text-6xl">
                  Unlock the World of{" "}
                </span>
                <br />
                <span className="font-serif italic font-normal text-7xl">
                  blogera
                </span>
              </p>
              <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                penatibus pellentesque dolor consequat ligula egestas massa
                gravida. Porttitor venenatis enim praesent.
              </p>

              <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                {/* <a
                        href="#"
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                        role="button"
                    >
                        Get started
                    </a> */}

<Button endContent={<Subscribeicon/>} className="hover:!bg-black bg-white  hover:!text-white border-2 !border-black font-semibold ">
                    Explore
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto border-b py-5">
        <div className="flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14">
          <div className="lg:max-w-[570px] w-full">
            <img
              src="https://clarity-tailwind.preview.uideck.com/images/about.png"
              alt="about"
              className="w-full"
            />
          </div>
          <div className="lg:max-w-[490px] w-full">
            <span className="inline-flex text-primary font-medium md:text-6xl text-3xl mt-3  [font-family:'Painting_With_Chocolate'] mb-1 sm:mb-3">
              Who we are
            </span>
            <h1 className="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-5">
              We provide high quality Articles &amp; blogs
            </h1>
            <p>
              Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos congue dui nec dui lobortis
              maximus.
            </p>
            <p className="mt-4.5">
              Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
              auctor orci, eu dictum diam diam nec neque. Pellentesque.
            </p>
          </div>
        </div>
      </div>
      {/* blog-card */}

      <div></div>
      {/* blog-card */}
      <div>
        <TopBlogs/>
      </div>
      {/* blog ui */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-1">
        <div className="flex flex-wrap justify-between">
          <div className="max-w-7xl px-6 lg:px-8 mt-10 mx-auto border-b py-5 overflow-hidden bg-white shadow-2xl p-2 rounded-xl w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 my-10">
            <div className="lg:max-w-[536px] w-full">
              <a href="blog-single.html">
                <img
                  className="w-full shadow-2xl rounded-xl"
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb3BlcnR5fGVufDB8fDB8fHww"
                  alt="hero"
                />
              </a>
            </div>
            <div className="lg:max-w-[540px] w-full mt-4 lg:mt-0">
              <a
                href="category.html"
                className="inline-flex text-purple-dark bg-purple-200/60 font-medium text-sm py-1 px-3 rounded-full mb-4"
              >
                Lifestyle
              </a>
              <h1 className="font-bold text-custom-4 xl:text-heading-4 text-dark dark:text-white mb-4 ">
                <a href="blog-single.html">
                  Begin here to obtain a brief summary encompassing all the
                  essential
                </a>
              </h1>
              <p className="max-w-[524px]">
                This comprehensive post serves as your cheat-sheet to swiftly
                familiarize yourself with Ghost. Packed with crucial...
              </p>
              <div className="flex items-center gap-2.5 mt-5">
                <a href="author.html" className="flex items-center gap-3">
                  <div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1682096186855-3f32647abe68?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="user"
                    />
                  </div>
                  <p className="text-sm">Adrio Devid</p>
                </a>
                <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                <p className="text-sm">Sep 10, 2025</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 ">
            <div className=" flex bg-white rounded-xl shadow-2xl p-2 flex-col sm:flex-row sm:items-center gap-6 shadow-1">
              <div className="w-full">
                <a href="blog-single.html">
                  <img
                    className="w-full rounded-2xl"
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
                    alt="hero"
                  />
                </a>
              </div>
              <div className=" w-full">
                <a
                  href="category.html"
                  className="inline-flex text-blue bg-blue-400/50 font-medium text-sm py-1 px-3 rounded-full mb-4"
                >
                  Technology
                </a>
                <h2 className="font-semibold text-custom-lg text-dark mb-3">
                  <a href="blog-single.html">
                    14 Innovative Architectural Designs to Create a Vast
                    Interior Space
                  </a>
                </h2>
                <div className="flex items-center gap-2.5">
                  <p className="text-sm">
                    <a href="author.html">By Adrio Devid</a>
                  </p>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                  <p className="text-sm">Sep 10, 2025</p>
                </div>
              </div>
            </div>

            <div className=" flex bg-white rounded-xl shadow-2xl p-2 flex-col sm:flex-row sm:items-center gap-6 shadow-1">
              <div className="w-full">
                <a href="blog-single.html">
                  <img
                    className="w-full rounded-2xl"
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
                    alt="hero"
                  />
                </a>
              </div>
              <div className=" w-full">
                <a
                  href="category.html"
                  className="inline-flex text-blue bg-blue-400/50 font-medium text-sm py-1 px-3 rounded-full mb-4"
                >
                  Technology
                </a>
                <h2 className="font-semibold text-custom-lg text-dark mb-3">
                  <a href="blog-single.html">
                    14 Innovative Architectural Designs to Create a Vast
                    Interior Space
                  </a>
                </h2>
                <div className="flex items-center gap-2.5">
                  <p className="text-sm">
                    <a href="author.html">By Adrio Devid</a>
                  </p>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                  <p className="text-sm">Sep 10, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog-ui end */}
      {/* top author */}

    <div>
      <TopAuthers/>
    </div>
      {/* top auther end */}
      {/* newsletter */}
      <div className="max-w-7xl px-6 lg:px-8 w-full mt-10 mb-3 mx-auto">
        <div className="bg-white shadow-2xl rounded-[10px] py-9 px-4 sm:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div className="max-w-[455px] w-full">
              <h3 className="font-semibold text-heading-6 text-dark mb-3">
                Subscribe to Newsletter
              </h3>
              <p>
                Provide your email to get email notification when we launch new
                products or publish new articles
              </p>
            </div>
            <div className="max-w-[494px] w-full">
              <form>
                <div className="flex items-center gap-5">
                  <div className="max-w-[350px] w-full">
                  <Input
                      isClearable
                      type="email"
                      variant="bordered"
                      placeholder="Enter your email"
                      onClear={() => console.log("input cleared")}
                      className=""
                 />
                  </div>
                  <Button endContent={<Subscribeicon/>} className="hover:!bg-black bg-white  hover:!text-white border-2 !border-black font-semibold ">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter end */}
    </>
  );
}

export default Home;
