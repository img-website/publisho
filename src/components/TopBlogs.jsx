import React, { useEffect, useState } from "react";
import { Aeroicon, BackIcon } from "../component/Icons";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../context/Firebase";
import SkeletonLoader from "./skeleton/Skeleton";
import { toast } from "sonner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function TopBlogs() {
  const [blogsData, setBlogsData] = useState([]);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setSkeletonLoading(true);
      try {
        const blogContent = await getDocs(collection(db, "blogs"));
        const blogsList = blogContent.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogsData(blogsList);
        console.log(blogsList, "ajoidjasodijiodjio");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSkeletonLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // const blogData = [
  //     {
  //       id: 1,
  //       imageSrc: "https://images.unsplash.com/photo-1609703048009-d3576872b32c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lcmNlZGVzfGVufDB8fDB8fHww",
  //       title: "Stylish Kitchen And Dining Room With Functional Ideas",
  //       description: "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
  //       author: {
  //         name: "Adrio Devid",
  //         imageSrc: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //       },
  //       date: "Sep 10, 2025",
  //       category: "Travel"
  //     },
  //     {
  //       id: 2,
  //       imageSrc: "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       title: "Stylish Kitchen And Dining Room With Functional Ideas",
  //       description: "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
  //       author: {
  //         name: "Adrio Devid",
  //         imageSrc: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //       },
  //       date: "Sep 10, 2025",
  //       category: "Travel"
  //     },
  //     {
  //       id: 3,
  //       imageSrc: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbGl0aWNzfGVufDB8fDB8fHww",
  //       title: "Stylish Kitchen And Dining Room With Functional Ideas",
  //       description: "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
  //       author: {
  //         name: "Adrio Devid",
  //         imageSrc: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //       },
  //       date: "Sep 10, 2025",
  //       category: "Travel"
  //     }
  //   ];
  return (
    <div>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-8 mb-6 max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto border-b py-5">
          <h2 className="font-medium text-heading-5  [font-family:'Painting_With_Chocolate'] text-3xl md:text-5xl text-dark">
            Top Blogs
          </h2>
          <Link to="/category" className="group text-dark leading-none">
            <span className="flex items-center gap-2 bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
              All Blogs
              <Aeroicon />
            </span>
          </Link>
        </div>
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
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {skeletonLoading ? (
                <>
                  <SwiperSlide>
                    <SkeletonLoader />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SkeletonLoader />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SkeletonLoader />
                  </SwiperSlide>
                </>
              ) : (
                blogsData.map((blog) => (
                  <SwiperSlide key={blog.id}>
                    <div className="rounded-2xl group/blog relative">
                      <Link to={`/blog/${blog?.slug}`}>
                        <div className="flex flex-col items-start justify-between w-full bg-white rounded-2xl rounded-br-none shadow-xl shadow-gray-300">
                          <img
                            className="w-full aspect-[385/221] object-cover rounded-2xl rounded-br-none"
                            width="385"
                            height="217"
                            src={blog.bannerImgUrl}
                            alt={blog.title}
                          />
                          <div className="w-full p-6">
                            <div className="flex items-center gap-x-4 text-xs">
                              <time className="text-gray-500">
                                {new Date(
                                  blog.createdAt.seconds * 1000
                                ).toLocaleDateString()}
                              </time>
                              <a
                                href="#"
                                className="relative z-20 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                              >
                                {blog.Select_category}
                              </a>
                            </div>
                            <div className="group">
                              <a
                                href="#"
                                className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2 before:absolute before:inset-0 before:z-10"
                              >
                                {blog.title}
                              </a>
                              <p className="mt-5 line-clamp-1 text-sm leading-6 text-gray-600">
                                {blog.shortDescription}
                              </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                              <img
                                src={blog.authorImgUrl}
                                className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                                alt={blog.Select_Author}
                              />
                              <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                  Written by
                                </p>
                                <p className="text-gray-600">
                                  {blog.Select_Author}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TopBlogs;
