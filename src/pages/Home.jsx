import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TopBlogs from "../components/TopBlogs";
import TopAuthers from "../components/TopAuthers";
import {Button , Input} from "@nextui-org/react";
import { Stars } from "@react-three/drei";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import { FbIcon, Printicon, Twittericon, Linkdinicon, Subscribeicon, ChevronDownIcon, Loginicon, BackIcon } from "../component/Icons";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import LatestThreeBlogs from "../components/LatestThreeBlogs";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
function Home() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const defaultContent =
    "This blog covers [your blog's main topics, e.g., technology, travel, lifestyle, etc.]. We aim to provide informative and engaging content to help you [your blog's purpose, e.g., stay updated on the latest trends, improve your skills, etc.].";
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
          <FbIcon className="transition-transform text-white group-hover:-rotate-45 group-active:-rotate-12" />
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

      {/* blog ui start*/}
     <LatestThreeBlogs/>
      {/* blog-ui end */}

      {/* top author start*/}
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
    {/* faq */}
    <div className="max-w-7xl mx-auto lg:px-8 px-6 mt-4">
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="What is this blog about?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title=" How often do you update the blog?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="How can I subscribe to the blog?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
    </>
  );
}

export default Home;
