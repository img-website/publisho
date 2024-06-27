import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TopBlogs from "../components/TopBlogs";
import TopAuthers from "../components/TopAuthers";
import {Button , Input} from "@nextui-org/react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FbIcon, Printicon, Twittericon, Linkdinicon, Subscribeicon, ChevronDownIcon, Loginicon, BackIcon } from "../component/Icons";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
function Home() {

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 30,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
 
  return (
    <>
    <div>
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
        Join Us
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        "Explore, Learn, and Grow with Us"
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
        "Words and Wisdom:
        Navigating Life Together with Stories, Tips, and Inspiration for Every Journey"
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Read Now
          <FbIcon className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
      {/* blog-card */}

      <div></div>
      {/* blog-card */}
      <div className="relative z-50">
        
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
      <div className="max-w-7xl mx-auto p-6 lg:px-8">
      <div className=" bg-white rounded-xl border shadow-lg">
  <div className="flex flex-col overflow-hidden  sm:flex-row md:h-80 w-full">
    <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
      <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">Trip of Ladakh</h2>
      <a href="" className="mt-2 text-sm  font-semibold">By Arina Jons </a>
      <p className="mt-4 mb-8 max-w-md text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam iusto, cumque dolores sit odio ex.</p>
       <Button endContent={<Loginicon/>} className="w-max hover:!bg-black hover:text-white border-2 border-black bg-white font-semibold">Read Blog</Button>
    </div>

    <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
      <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" loading="lazy" />
    </div>
  </div>
     </div>
      </div>

      {/* newsletter end */}
    </div>
    </>
  );
}

export default Home;
