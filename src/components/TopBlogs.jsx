import React, { useEffect, useState } from "react";
import { Aeroicon } from "../component/Icons";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../context/Firebase";
import SkeletonLoader from "./skeleton/Skeleton";
import { toast } from "sonner";

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
          <h2 className="font-medium text-heading-5 [font-family:'Painting_With_Chocolate'] text-3xl md:text-5xl text-dark">
            Top Blogs
          </h2>
          <Link to="/category" className="group text-dark leading-none">
            <span className="flex items-center gap-2 bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
              All Blogs
              <Aeroicon />
            </span>
          </Link>
        </div>
        <div className="mx-auto gap-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl px-6 lg:px-8 w-full mt-3">
          {skeletonLoading ? (
            <SkeletonLoader />
          ) : (
            blogsData?.map((blog) => (
              <div key={blog?.id} className="group shadow-xl p-3">
                <Link to={`/blog/${blog?.slug}`}>
                  <div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
                    <img
                      src={blog?.bannerImgUrl}
                      alt="image"
                      className="size-full object-cover"
                    />
                  </div>
                  <h4>
                    <Link
                      to={`/detail/${blog?.slug}`}
                      className="block text-dark font-bold text-xl mb-3.5"
                    >
                      <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                        {blog.title}
                      </span>
                    </Link>
                  </h4>
                  <p>{blog.shortDescription}</p>
                  <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                    <div className="flex items-center gap-2.5">
                      <Link
                        to={`/detail/${blog?.slug}`}
                        className="flex items-center gap-3"
                      >
                        <div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
                          <img src={blog.authorImgUrl} alt="user" />
                        </div>
                        <p className="text-sm">{blog.authorName}</p>
                      </Link>
                      <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                      <p className="text-sm">
                        {new Date(
                          blog.createdAt.seconds * 1000
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <a
                      href="category.html"
                      className="inline-flex text-green-900 bg-green-100 font-medium text-sm py-1 px-3 rounded-full"
                    >
                      {blog.category}
                    </a>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBlogs;
