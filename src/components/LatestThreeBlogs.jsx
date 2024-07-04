import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../context/Firebase";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const LatestThreeBlogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  const fetchBlogs = async () => {
    setSkeletonLoading(true);
    try {
      const blogsQuery = query(
        collection(db, "blogs"),
        orderBy("createdAt", "desc"),
        limit(3)
      );
      const blogContent = await getDocs(blogsQuery);
      const blogsList = blogContent.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogData(blogsList);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSkeletonLoading(false);
    }
  };

  console.log(blogData, "blogData");
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-1">
        <div className="flex flex-wrap justify-between">
          <Link
            to={`/blog/${blogData[0]?.slug}`}
            className="max-w-7xl px-6 lg:px-8 mt-10 mx-auto border-b py-5 overflow-hidden bg-white shadow-2xl p-2 rounded-xl w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 my-10"
          >
            <div className="lg:max-w-[536px] w-full">
              <div>
                <img
                  className="w-full shadow-2xl rounded-xl"
                  src={blogData[0]?.bannerImgUrl}
                  alt={blogData[0]?.title}
                />
              </div>
            </div>
            <div className="lg:max-w-[540px] w-full mt-4 lg:mt-0">
              <a
                href="category.html"
                className="inline-flex text-purple-dark bg-purple-200/60 font-medium text-sm py-1 px-3 rounded-full mb-4"
              >
                {blogData[0]?.Select_category}
              </a>
              <h1 className="font-bold text-custom-4 xl:text-heading-4 text-dark dark:text-white mb-4 ">
                <div>{blogData[0]?.title}</div>
              </h1>
              <p className="max-w-[524px]">{blogData[0]?.shortDescription}</p>
              <div className="flex items-center gap-2.5 mt-5">
                <a href="author.html" className="flex items-center gap-3">
                  <div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover">
                    <img
                      src={blogData[0]?.authorImgUrl}
                      alt={blogData[0]?.Select_Author}
                    />
                  </div>
                  <p className="text-sm">{blogData[0]?.Select_Author}</p>
                </a>
                <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                <p className="text-sm">
                  {" "}
                  {new Date(
                    blogData[0]?.createdAt.seconds * 1000
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>

          <div className="grid lg:grid-cols-2 gap-4 ">
            <Link
              to={`/blog/${blogData[1]?.slug}`}
              className=" flex bg-white rounded-xl shadow-2xl p-2 flex-col sm:flex-row sm:items-center gap-6 shadow-1">
              <div className="w-full">
                <a href="blog-single.html">
                  <img
                    className="w-full rounded-2xl"
                    src={blogData[1]?.bannerImgUrl}
                    alt={blogData[1]?.title}
                  />
                </a>
              </div>
              <div className=" w-full">
                <a
                  href="category.html"
                  className="inline-flex text-blue bg-blue-400/50 font-medium text-sm py-1 px-3 rounded-full mb-4"
                >
                  {blogData[1]?.Select_category}
                </a>
                <h2 className="font-semibold text-custom-lg text-dark mb-3">
                  <a href="blog-single.html">
                    {blogData[1]?.title}
                  </a>
                </h2>
                <div className="flex items-center gap-2.5">
                  <p className="text-sm">
                    <a href="author.html">By {blogData[1]?.Select_Author}</a>
                  </p>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                  <p className="text-sm">{new Date(
                    blogData[1]?.createdAt.seconds * 1000
                  ).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>

            <Link
              to={`/blog/${blogData[2]?.slug}`}
              className=" flex bg-white rounded-xl shadow-2xl p-2 flex-col sm:flex-row sm:items-center gap-6 shadow-1">
              <div className="w-full">
                <a href="blog-single.html">
                  <img
                    className="w-full rounded-2xl"
                    src={blogData[2]?.bannerImgUrl}
                    alt={blogData[2]?.title}
                  />
                </a>
              </div>
              <div className=" w-full">
                <a
                  href="category.html"
                  className="inline-flex text-blue bg-blue-400/50 font-medium text-sm py-1 px-3 rounded-full mb-4"
                >
                  {blogData[2]?.Select_category}
                </a>
                <h2 className="font-semibold text-custom-lg text-dark mb-3">
                  <a href="blog-single.html">
                    {blogData[2]?.title}
                  </a>
                </h2>
                <div className="flex items-center gap-2.5">
                  <p className="text-sm">
                    <a href="author.html">By {blogData[2]?.Select_Author}</a>
                  </p>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                  <p className="text-sm">{new Date(
                    blogData[2]?.createdAt.seconds * 1000
                  ).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestThreeBlogs;
