import React from 'react'

function TopBlogs() {

  
    const blogData = [
        {
          id: 1,
          imageSrc: "https://images.unsplash.com/photo-1609703048009-d3576872b32c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lcmNlZGVzfGVufDB8fDB8fHww",
          title: "Stylish Kitchen And Dining Room With Functional Ideas",
          description: "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
          author: {
            name: "Adrio Devid",
            imageSrc: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          date: "Sep 10, 2025",
          category: "Travel"
        },
        {
          id: 2,
          imageSrc: "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Stylish Kitchen And Dining Room With Functional Ideas",
          description: "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
          author: {
            name: "Adrio Devid",
            imageSrc: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          date: "Sep 10, 2025",
          category: "Travel"
        },
        {
          id: 3,
          imageSrc: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbGl0aWNzfGVufDB8fDB8fHww",
          title: "Stylish Kitchen And Dining Room With Functional Ideas",
          description: "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
          author: {
            name: "Adrio Devid",
            imageSrc: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          date: "Sep 10, 2025",
          category: "Travel"
        }
      ];
  return (
    <div>
        <div>
      <div className="flex flex-wrap items-center justify-between gap-8 mb-6 max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto border-b py-5">
        <h2 className="font-medium text-heading-5 [font-family:'Painting_With_Chocolate'] text-3xl md:text-5xl text-dark">
          Top Blogs
        </h2>
        <a href="#" className="group text-dark leading-none">
          <span className="flex items-center gap-2 bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
            All Blogs
            <svg
              className="fill-current group-hover:rotate-45 transition-all"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_675_6418)">
                <path
                  d="M13.7734 3.59902L5.48035 3.53935C5.12237 3.53935 4.84395 3.81778 4.84395 4.17575C4.84395 4.53372 5.12237 4.81215 5.48035 4.81215L12.2222 4.87181L3.77003 13.3239C3.53138 13.5626 3.53138 13.9603 3.77003 14.199C4.00868 14.4376 4.42632 14.4575 4.66496 14.2189L13.1569 5.72696L13.2165 12.5483C13.2165 12.9063 13.495 13.1847 13.8529 13.1847C14.012 13.1847 14.1711 13.1052 14.2905 12.9859C14.4098 12.8665 14.4893 12.7074 14.4694 12.5284L14.4098 4.23541C14.4098 3.87744 14.1314 3.59902 13.7734 3.59902Z"
                  fill=""
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_675_6418">
                  <rect width="18" height="18" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
        </a>
      </div>
      <div className="mx-auto gap-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl px-6 lg:px-8 w-full mt-3">
      {blogData.map((blog) => (
        <div key={blog.id} className="group shadow-xl p-3">
          <div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
            <a href="blog-single.html">
              <img
                src={blog.imageSrc}
                alt="image"
                className="size-full object-cover"
              />
            </a>
          </div>
          <h4>
            <a
              href="blog-single.html"
              className="block text-dark font-bold text-xl mb-3.5"
            >
              <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                {blog.title}
              </span>
            </a>
          </h4>
          <p>{blog.description}</p>
          <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
            <div className="flex items-center gap-2.5">
              <a href="author.html" className="flex items-center gap-3">
                <div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
                  <img
                    src={blog.author.imageSrc}
                    alt="user"
                  />
                </div>
                <p className="text-sm">{blog.author.name}</p>
              </a>
              <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
              <p className="text-sm">{blog.date}</p>
            </div>
            <a
              href="category.html"
              className="inline-flex text-green-dark bg-green/[0.08] font-medium text-sm py-1 px-3 rounded-full"
            >
              {blog.category}
            </a>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  )
}

export default TopBlogs