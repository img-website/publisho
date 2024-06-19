import React from 'react'
import { Subscribeicon } from '../component/Icons';
import { Tabs, Tab, Card, CardBody, CardHeader ,Input ,Button ,} from "@nextui-org/react";
let tabs = [
  {
    id: "Football",
    label: "Photos",
    content: <>
      <div>Hello</div>
      <h1>Testing</h1>
    </>
  },
  {
    className: "!font-semibold text-red-700",
    id: "Cricket",
    label: "Cricket",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "Basket BALL",
    label: "Basket Ball",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }]
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


export default function Auther() {
  return (
    <>
      <div className="max-w-[1170px] mt-20 mx-auto px-4 sm:px-8 xl:px-0">
        <div className="max-w-[140px] border-black mx-auto w-full h-35 rounded-full flex items-center justify-center border border-gray-3">
          <div className=" w-full p-3  h-35 *:rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" />
          </div>
        </div>
        <div className="max-w-[770px] mx-auto w-full text-center mb-15 mt-5">
          <h1 className="font-bold text-heading-6 lg:text-heading-4 text-dark mb-4">
            
            Adrio Devid
          </h1>
          <p>
            Mario, a co-founder of Acme and the content management system
            Sanity, is an accomplished Staff Engineer with a specialization in
            Frontend at Vercel. Before his current position, he served as a
            Senior Engineer at Apple.
          </p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-8 xl:px-6'>
        <div className="flex w-full items-center mt-5 flex-col">
          <Tabs aria-label="Dynamic tabs"  classNames={{
            base: "",
            tabList: "bg-white",
            tab: "bg-black",
            tabContent: " font-semibold text-white",
            cursor: "bg-white border-black border-2",
            panel: "  ",
            wrapper: "wrapper  shadow-0 ",
          }}>
              <Tab title="Sports">
                <Card className='w-full'>
                  <CardBody>
                    <div className="mx-auto gap-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1   w-full mt-3">
      {blogData.map((blog) => (
        <div key={blog.id} className="group p-3">
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
              className="inline-flex text-green-900 bg-green-100 font-medium text-sm py-1 px-3 rounded-full"
            >
              {blog.category}
            </a>
          </div>
        </div>
      ))}
    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab title="Travel">
                <Card className='w-full'>
                <CardBody>
                    <div className="mx-auto gap-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl   w-full mt-3">
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
              className="inline-flex text-green-900 bg-green-100 font-medium text-sm py-1 px-3 rounded-full"
            >
              {blog.category}
            </a>
          </div>
        </div>
      ))}
    </div>
                  </CardBody>
                </Card>
              </Tab>
          </Tabs>
        </div>
      </div>
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
  )
}
