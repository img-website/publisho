import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { SearchIcon } from "../component/Icons";

function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "home",
    "About us",
    "Category",
    "Sign In",
    "Sign UP",
    "log Out",
    
  ];
  return (
    <>
         <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="mx-auto w-full bg-indigo-50 shadow-xl">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">BLOGERA</p>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
     
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Category
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem className="hidden sm:flex">
      <Input
        isClearable
        radius="lg"
        classNames={{
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-white/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
        
      />
      
        </NavbarItem>
        
      <NavbarContent justify="end">
  
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
        <div className="flex gap-4 items-center">
          
      <Button 
      isIconOnly color="primary"
       variant="faded" 
      aria-label="Take a photo"
      className="sm:hidden"
      >
      <SearchIcon/>
      </Button>
    </div>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="hidden sm:flex">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
        <div className="flex items-center">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown> 
    </div>
        </NavbarItem>
        <NavbarItem>
    <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden ms-4"
        />
    </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    <div className="relative pb-12 bg-black xl:py-40 py-12 sm:py-20 md:py-28 ">
    

    <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1610827776753-8c668b92d732?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>

    <div className="relative">
        <div className="px-5 mx-auto max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">
                <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">Master the basics of baking</h1>
                <p className="mt-6 tracking-tighter text-white">
                    <span className=" font-normal [font-family:'Painting_With_Chocolate'] text-6xl">Unlock the World of </span>
                    <br />
                    <span className="font-serif italic font-normal text-7xl">blogera</span>
                </p>
                <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p>

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

                    <a
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
                            bg-transparent
                            border-2
                            rounded-xl
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                        role="button"
                    >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                        </svg>
                       Get Started
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto border-b py-5">
<div className="flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14">
<div className="lg:max-w-[570px] w-full">
<img src="https://clarity-tailwind.preview.uideck.com/images/about.png" alt="about" className="w-full" />
</div>
<div className="lg:max-w-[490px] w-full">
<span className="inline-flex text-primary font-medium md:text-6xl text-3xl mt-3  [font-family:'Painting_With_Chocolate'] mb-1 sm:mb-3">Who we are</span>
<h1 className="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-5">
We provide high quality Articles &amp; blogs
</h1>
<p>
Sed ullamcorper dui at risus viverra, nec cursus leo
ullamcorper. Class aptent taciti sociosqu ad litora torquent per
conubia nostra, per inceptos himenaeos congue dui nec dui
lobortis maximus.
</p>
<p className="mt-4.5">
Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
auctor orci, eu dictum diam diam nec neque. Pellentesque.
</p>
</div>
</div>
</div>
{/* blog-card */}


<div>

</div>
{/* blog-card */}
<div className="flex flex-wrap items-center justify-between gap-8 mb-6 max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto border-b py-5">
<h2 className="font-medium text-heading-5 [font-family:'Painting_With_Chocolate'] text-3xl md:text-5xl text-dark">Top Blogs</h2>
<a href="#" className="group text-dark leading-none">
<span className="flex items-center gap-2 bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
All Blogs
<svg className="fill-current group-hover:rotate-45 transition-all" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_675_6418)">
<path d="M13.7734 3.59902L5.48035 3.53935C5.12237 3.53935 4.84395 3.81778 4.84395 4.17575C4.84395 4.53372 5.12237 4.81215 5.48035 4.81215L12.2222 4.87181L3.77003 13.3239C3.53138 13.5626 3.53138 13.9603 3.77003 14.199C4.00868 14.4376 4.42632 14.4575 4.66496 14.2189L13.1569 5.72696L13.2165 12.5483C13.2165 12.9063 13.495 13.1847 13.8529 13.1847C14.012 13.1847 14.1711 13.1052 14.2905 12.9859C14.4098 12.8665 14.4893 12.7074 14.4694 12.5284L14.4098 4.23541C14.4098 3.87744 14.1314 3.59902 13.7734 3.59902Z" fill=""></path>
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
<div className="mx-auto gap-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  max-w-7xl px-6 lg:px-8 w-full mt-3" >
<div className="group shadow-xl p-3">
<div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
<a href="blog-single.html">
<img src="https://images.unsplash.com/photo-1609703048009-d3576872b32c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lcmNlZGVzfGVufDB8fDB8fHww" alt="image" className="size-full object-cover " />
</a>
</div>
<h4>
<a href="blog-single.html" className="block text-dark font-bold text-xl mb-3.5">
<span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
Stylish Kitchen And Dining Room With Functional Ideas
</span>
</a>
</h4>
<p>
Lorem Ipsum is simply dummy text of the print and
typesetting industry...
</p>
<div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
<div className="flex items-center gap-2.5">
<a href="author.html" className="flex items-center gap-3">
<div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
<img src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user"/>
</div>
<p className="text-sm">Adrio Devid</p>
</a>
<span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
<p className="text-sm">Sep 10, 2025</p>
</div>
<a href="category.html" className="inline-flex text-green-dark bg-green/[0.08] font-medium text-sm py-1 px-3 rounded-full">Travel</a>
</div>
</div>
<div className="group shadow-xl p-3">
<div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
<a href="blog-single.html">
<img src="https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="size-full object-cover " />
</a>
</div>
<h4>
<a href="blog-single.html" className="block text-dark font-bold text-xl mb-3.5">
<span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
Stylish Kitchen And Dining Room With Functional Ideas
</span>
</a>
</h4>
<p>
Lorem Ipsum is simply dummy text of the print and
typesetting industry...
</p>
<div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
<div className="flex items-center gap-2.5">
<a href="author.html" className="flex items-center gap-3">
<div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
<img src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user"/>
</div>
<p className="text-sm">Adrio Devid</p>
</a>
<span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
<p className="text-sm">Sep 10, 2025</p>
</div>
<a href="category.html" className="inline-flex text-green-dark bg-green/[0.08] font-medium text-sm py-1 px-3 rounded-full">Travel</a>
</div>
</div>
<div className="group shadow-xl p-3">
<div className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px] *:*:transition-all *:*:group-hover:scale-105">
<a href="blog-single.html">
<img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbGl0aWNzfGVufDB8fDB8fHww" alt="image" className="size-full object-cover " />
</a>
</div>
<h4>
<a href="blog-single.html" className="block text-dark font-bold text-xl mb-3.5">
<span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
Stylish Kitchen And Dining Room With Functional Ideas
</span>
</a>
</h4>
<p>
Lorem Ipsum is simply dummy text of the print and
typesetting industry...
</p>
<div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
<div className="flex items-center gap-2.5">
<a href="author.html" className="flex items-center gap-3">
<div className="flex w-6 h-6 rounded-full overflow-hidden *:object-cover *:size-full">
<img src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user"/>
</div>
<p className="text-sm">Adrio Devid</p>
</a>
<span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
<p className="text-sm">Sep 10, 2025</p>
</div>
<a href="category.html" className="inline-flex text-green-dark bg-green/[0.08] font-medium text-sm py-1 px-3 rounded-full">Travel</a>
</div>
</div>

</div>
{/* blog ui */}

<div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-1">
<div className="flex flex-wrap justify-between">

<div className="max-w-7xl px-6 lg:px-8 mt-10 mx-auto border-b py-5 overflow-hidden bg-white shadow-2xl p-2 rounded-xl w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 my-10">
<div className="lg:max-w-[536px] w-full">
<a href="blog-single.html">
<img className="w-full shadow-2xl rounded-xl" src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb3BlcnR5fGVufDB8fDB8fHww" alt="hero" />
</a>
</div>
<div className="lg:max-w-[540px] w-full mt-4 lg:mt-0">
<a href="category.html" className="inline-flex text-purple-dark bg-purple-200/60 font-medium text-sm py-1 px-3 rounded-full mb-4">Lifestyle</a>
<h1 className="font-bold text-custom-4 xl:text-heading-4 text-dark mb-4 ">
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
<img src="https://plus.unsplash.com/premium_photo-1682096186855-3f32647abe68?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" />
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
<img className="w-full rounded-2xl" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" alt="hero" />
</a>
</div>
<div className=" w-full">
<a href="category.html" className="inline-flex text-blue bg-blue-400/50 font-medium text-sm py-1 px-3 rounded-full mb-4">Technology</a>
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
<img className="w-full rounded-2xl" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" alt="hero" />
</a>
</div>
<div className=" w-full">
<a href="category.html" className="inline-flex text-blue bg-blue-400/50 font-medium text-sm py-1 px-3 rounded-full mb-4">Technology</a>
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

<div className="max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto">
<div className="flex flex-wrap items-center justify-between gap-8 mb-6  w-full mt-10 mx-auto border-b py-5">
<h2 className="font-medium text-heading-5 [font-family:'Painting_With_Chocolate'] text-3xl md:text-5xl text-dark">Top Authers</h2>
<a href="#" className="group text-dark leading-none">
<span className="flex items-center gap-2 bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
All Author
<svg className="fill-current group-hover:rotate-45 transition-all" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_675_6418)">
<path d="M13.7734 3.59902L5.48035 3.53935C5.12237 3.53935 4.84395 3.81778 4.84395 4.17575C4.84395 4.53372 5.12237 4.81215 5.48035 4.81215L12.2222 4.87181L3.77003 13.3239C3.53138 13.5626 3.53138 13.9603 3.77003 14.199C4.00868 14.4376 4.42632 14.4575 4.66496 14.2189L13.1569 5.72696L13.2165 12.5483C13.2165 12.9063 13.495 13.1847 13.8529 13.1847C14.012 13.1847 14.1711 13.1052 14.2905 12.9859C14.4098 12.8665 14.4893 12.7074 14.4694 12.5284L14.4098 4.23541C14.4098 3.87744 14.1314 3.59902 13.7734 3.59902Z" fill=""></path>
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
<div className="pt-3 pb-2">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<a href="author.html" className="group">
<div className="border border-gray-3 rounded-[20px] bg-gray-50 p-5 group-hover:bg-white group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all">
<div className="flex flex-wrap items-center gap-8">
<div className="w-20 h-20 rounded-full overflow-hidden *:size-full *:object-cover">
<img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" />
</div>
<div>
<h3 className="font-semibold text-custom-xl text-dark mb-1">
Adrio Devid
</h3>
<p>Director of Operations</p>
<span className="flex items-center gap-2 text-custom-sm mt-2.5">
<svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.775 14.4501H2.575C2.325 14.4501 2.125 14.2501 2.125 14.0001V2.00009C2.125 1.75009 2.325 1.55009 2.575 1.55009H8.225V4.75009C8.225 5.05009 8.475 5.32509 8.8 5.32509H11.975V7.00009C11.975 7.30009 12.225 7.57509 12.55 7.57509C12.875 7.57509 13.125 7.32509 13.125 7.00009V4.90009C13.125 4.62509 13 4.35009 12.8 4.15009L9.3 0.750091C9.1 0.550091 8.825 0.450091 8.55 0.450091H2.55C1.7 0.425091 1 1.15009 1 2.00009V14.0001C1 14.8501 1.7 15.5751 2.575 15.5751H5.8C6.1 15.5751 6.375 15.3251 6.375 15.0001C6.375 14.6751 6.1 14.4501 5.775 14.4501ZM9.325 2.35009L11.2 4.20009H9.325V2.35009Z" fill=""></path>
<path d="M14.7996 9.40015C14.5996 9.20015 14.3996 9.00015 14.1996 8.80015C14.0246 8.62515 13.8496 8.42515 13.6496 8.25015C13.5496 8.12515 13.3996 8.02515 13.2246 8.00015C13.0246 7.97515 12.8246 8.02515 12.6746 8.15015L8.32461 12.4751C8.19961 12.6001 8.12461 12.7251 8.07461 12.8751L7.44961 14.7751L7.34961 15.0751L7.52461 15.3001C7.59961 15.4001 7.74961 15.5501 8.02461 15.5501H8.12461L10.0996 14.9001C10.2496 14.8501 10.3996 14.7751 10.4996 14.6501L14.7996 10.3751C14.9246 10.2501 14.9996 10.0751 14.9996 9.87515C14.9996 9.70015 14.9246 9.52515 14.7996 9.40015ZM13.1246 9.30015C13.2246 9.40015 13.3246 9.50015 13.3996 9.60015C13.4996 9.70015 13.5996 9.80015 13.6996 9.90015L13.4246 10.1751L12.8496 9.60015L13.1246 9.30015ZM9.72461 13.8501L8.84961 14.1251L9.12461 13.2501L12.0246 10.3501L12.5996 10.9251L9.72461 13.8501Z" fill=""></path>
</svg>
03 Published posts
</span>
</div>
</div>
</div>
</a>

<a href="author.html" className="group">
<div className="border border-gray-3 rounded-[20px] bg-gray-50 p-5 group-hover:bg-white group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all">
<div className="flex flex-wrap items-center gap-8">
<div div className="w-20 h-20 rounded-full overflow-hidden *:size-full *:object-cover ">
<img src="https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" />
</div>
<div>
<h3 className="font-semibold text-custom-xl text-dark mb-1">
Rayna Kenter
</h3>
<p>Content writer</p>
<span className="flex items-center gap-2 text-custom-sm mt-2.5">
<svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.775 14.4501H2.575C2.325 14.4501 2.125 14.2501 2.125 14.0001V2.00009C2.125 1.75009 2.325 1.55009 2.575 1.55009H8.225V4.75009C8.225 5.05009 8.475 5.32509 8.8 5.32509H11.975V7.00009C11.975 7.30009 12.225 7.57509 12.55 7.57509C12.875 7.57509 13.125 7.32509 13.125 7.00009V4.90009C13.125 4.62509 13 4.35009 12.8 4.15009L9.3 0.750091C9.1 0.550091 8.825 0.450091 8.55 0.450091H2.55C1.7 0.425091 1 1.15009 1 2.00009V14.0001C1 14.8501 1.7 15.5751 2.575 15.5751H5.8C6.1 15.5751 6.375 15.3251 6.375 15.0001C6.375 14.6751 6.1 14.4501 5.775 14.4501ZM9.325 2.35009L11.2 4.20009H9.325V2.35009Z" fill=""></path>
<path d="M14.7996 9.40015C14.5996 9.20015 14.3996 9.00015 14.1996 8.80015C14.0246 8.62515 13.8496 8.42515 13.6496 8.25015C13.5496 8.12515 13.3996 8.02515 13.2246 8.00015C13.0246 7.97515 12.8246 8.02515 12.6746 8.15015L8.32461 12.4751C8.19961 12.6001 8.12461 12.7251 8.07461 12.8751L7.44961 14.7751L7.34961 15.0751L7.52461 15.3001C7.59961 15.4001 7.74961 15.5501 8.02461 15.5501H8.12461L10.0996 14.9001C10.2496 14.8501 10.3996 14.7751 10.4996 14.6501L14.7996 10.3751C14.9246 10.2501 14.9996 10.0751 14.9996 9.87515C14.9996 9.70015 14.9246 9.52515 14.7996 9.40015ZM13.1246 9.30015C13.2246 9.40015 13.3246 9.50015 13.3996 9.60015C13.4996 9.70015 13.5996 9.80015 13.6996 9.90015L13.4246 10.1751L12.8496 9.60015L13.1246 9.30015ZM9.72461 13.8501L8.84961 14.1251L9.12461 13.2501L12.0246 10.3501L12.5996 10.9251L9.72461 13.8501Z" fill=""></path>
</svg>
05 Published posts
</span>
</div>
</div>
</div>
</a>

<a href="author.html" className="group">
<div className="border border-gray-3 rounded-[20px] bg-gray-50 p-5 group-hover:bg-white group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all">
<div className="flex flex-wrap items-center gap-8">
<div className="w-20 h-20 rounded-full overflow-hidden *:size-full *:object-cover">
<img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" />
</div>
<div>
<h3 className="font-semibold text-custom-xl text-dark mb-1">
Talan Philips
</h3>
<p>Director of Operations</p>
<span className="flex items-center gap-2 text-custom-sm mt-2.5">
<svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.775 14.4501H2.575C2.325 14.4501 2.125 14.2501 2.125 14.0001V2.00009C2.125 1.75009 2.325 1.55009 2.575 1.55009H8.225V4.75009C8.225 5.05009 8.475 5.32509 8.8 5.32509H11.975V7.00009C11.975 7.30009 12.225 7.57509 12.55 7.57509C12.875 7.57509 13.125 7.32509 13.125 7.00009V4.90009C13.125 4.62509 13 4.35009 12.8 4.15009L9.3 0.750091C9.1 0.550091 8.825 0.450091 8.55 0.450091H2.55C1.7 0.425091 1 1.15009 1 2.00009V14.0001C1 14.8501 1.7 15.5751 2.575 15.5751H5.8C6.1 15.5751 6.375 15.3251 6.375 15.0001C6.375 14.6751 6.1 14.4501 5.775 14.4501ZM9.325 2.35009L11.2 4.20009H9.325V2.35009Z" fill=""></path>
<path d="M14.7996 9.40015C14.5996 9.20015 14.3996 9.00015 14.1996 8.80015C14.0246 8.62515 13.8496 8.42515 13.6496 8.25015C13.5496 8.12515 13.3996 8.02515 13.2246 8.00015C13.0246 7.97515 12.8246 8.02515 12.6746 8.15015L8.32461 12.4751C8.19961 12.6001 8.12461 12.7251 8.07461 12.8751L7.44961 14.7751L7.34961 15.0751L7.52461 15.3001C7.59961 15.4001 7.74961 15.5501 8.02461 15.5501H8.12461L10.0996 14.9001C10.2496 14.8501 10.3996 14.7751 10.4996 14.6501L14.7996 10.3751C14.9246 10.2501 14.9996 10.0751 14.9996 9.87515C14.9996 9.70015 14.9246 9.52515 14.7996 9.40015ZM13.1246 9.30015C13.2246 9.40015 13.3246 9.50015 13.3996 9.60015C13.4996 9.70015 13.5996 9.80015 13.6996 9.90015L13.4246 10.1751L12.8496 9.60015L13.1246 9.30015ZM9.72461 13.8501L8.84961 14.1251L9.12461 13.2501L12.0246 10.3501L12.5996 10.9251L9.72461 13.8501Z" fill=""></path>
</svg>
10 Published posts
</span>
</div>
</div>
</div>
</a>
</div>
</div>
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
<input id="email" type="email" name="email" placeholder="Enter your Email" className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3.5 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent" />
</div>
<button className="font-medium rounded-md text-white bg-black flex py-3 px-5 hover:opacity-90 transition-all ease-linear duration-300">
Subscribe
</button>
</div>
</form>
</div>
</div>
</div>
</div>
{/* newsletter end */}
{/* footer start */}
<footer className="relative z-10 py-8 border-t border-gray-3">
<div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-6">
<div className="flex flex-wrap items-center justify-center flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between">
<div>
<p className="text-custom-sm">© 2025 Clarity. All rights reserved</p>
</div>
<div>
<ul className="flex flex-wrap items-center gap-2.5">
<li>
<a href="privacy-policy.html" className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark">
<span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">Privacy</span>
</a>
</li>
<li>
<span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
</li>
<li>
<a href="privacy-policy.html" className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark">
<span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">Terms</span>
</a>
</li>
<li>
<span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
</li>
<li>
<a href="signup.html" className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark">
<span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">Contact</span>
</a>
</li>
<li>
<span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
</li>
<li>
<a href="signup.html" className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark">
<span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">Contribute</span>
</a>
</li>
</ul>
</div>
<div>
<div className="flex items-center gap-3">
<p className="font-medium text-custom-sm text-dark">Follow Us:</p>

<div className="flex items-center gap-1.5">
<a id="facebookFooterBtn" aria-label="facebook social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
<svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4 8.58585V6.07664C10.4 5.10529 11.2059 4.31785 12.2 4.31785H14V1.67966L11.5565 1.50912C9.47255 1.36368 7.7 2.97636 7.7 5.01777V8.58585H5V11.224H7.7V16.5H10.4V11.224H13.1L14 8.58585H10.4Z" fill=""></path>
</svg>
</a>
<a id="twitterFooterBtn" aria-label="twitter social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
<svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_739_364)">
<path d="M16.2781 4.30313L17.3469 2.95313C17.6562 2.5875 17.7406 2.30625 17.7688 2.16562C16.925 2.67188 16.1375 2.84063 15.6312 2.84063H15.4344L15.3219 2.72813C14.6469 2.1375 13.8031 1.82812 12.9031 1.82812C10.9344 1.82812 9.3875 3.45938 9.3875 5.34375C9.3875 5.45625 9.3875 5.625 9.41563 5.7375L9.5 6.3L8.90938 6.27188C5.30937 6.15938 2.35625 3.06563 1.87813 2.53125C1.09063 3.9375 1.54063 5.2875 2.01875 6.13125L2.975 7.70625L1.45625 6.8625C1.48438 8.04375 1.93437 8.97188 2.80625 9.64688L3.56562 10.2094L2.80625 10.5188C3.28437 11.9531 4.35313 12.5438 5.14062 12.7688L6.18125 13.05L5.19688 13.725C3.62188 14.85 1.65312 14.7656 0.78125 14.6813C2.55313 15.9188 4.6625 16.2 6.125 16.2C7.22188 16.2 8.0375 16.0875 8.23438 16.0031C16.1094 14.1469 16.475 7.11563 16.475 5.70938V5.5125L16.6438 5.4C17.6 4.5 17.9937 4.02188 18.2188 3.74063C18.1344 3.76875 18.0219 3.825 17.9094 3.85313L16.2781 4.30313Z" fill=""></path>
</g>
<defs>
<clipPath id="clip0_739_364">
<rect width="18" height="18" fill="white" transform="translate(0.5)"></rect>
</clipPath>
</defs>
</svg>
</a>
<a id="linkedinFooterBtn" aria-label="linkedin social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
<svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50004 3.50068C5.49976 4.11141 5.12924 4.661 4.56318 4.89028C3.99713 5.11957 3.34858 4.98277 2.92335 4.54439C2.49812 4.10601 2.38114 3.45359 2.62755 2.89478C2.87397 2.33597 3.43458 1.98236 4.04504 2.00068C4.85584 2.02502 5.5004 2.68951 5.50004 3.50068ZM5.54504 6.11068H2.54504V15.5007H5.54504V6.11068ZM10.2851 6.11068H7.30004V15.5007H10.2551V10.5732C10.2551 7.82816 13.8326 7.57316 13.8326 10.5732V15.5007H16.7951V9.55316C16.7951 4.92568 11.5001 5.09818 10.2551 7.37066L10.2851 6.11068Z" fill=""></path>
</svg>
</a>
<a id="pinterestFooterBtn" aria-label="pinterest social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
<svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00623 9.02818C1.06248 11.6438 2.27186 14.2594 4.32497 15.8344C4.97185 16.3126 5.67497 16.5938 6.40622 16.9032C6.09685 14.9063 6.85622 12.9094 7.2781 10.9407C7.33435 10.7438 7.36247 10.5188 7.36247 10.2938C7.36247 9.98443 7.24997 9.67505 7.1656 9.36568C7.08122 8.85943 7.13747 8.32505 7.36247 7.84693C7.67185 7.20005 8.4031 6.6938 9.04997 6.94693C9.6406 7.17193 9.8656 7.95943 9.7531 8.57818C9.6406 9.22505 9.3031 9.78755 9.13435 10.4063C8.93747 11.0251 8.9656 11.7844 9.4156 12.2063C9.83747 12.6001 10.5125 12.6282 11.0468 12.4032C11.8343 12.0657 12.3406 11.2782 12.65 10.4907C13.2125 9.02818 13.1 7.17193 11.9468 6.10318C11.4687 5.62505 10.7937 5.31568 10.0625 5.20318C8.82497 5.0063 7.47497 5.37193 6.6031 6.27193C5.73122 7.17193 5.33747 8.55005 5.7031 9.7313C5.8156 10.1251 6.0406 10.5188 6.12497 10.9126C6.20935 11.3063 6.18122 11.8126 5.89997 12.0938C5.87185 12.1219 5.84372 12.1501 5.78747 12.1782C5.73122 12.2063 5.64685 12.1501 5.5906 12.1219C5.05622 11.7844 4.63435 11.2501 4.38122 10.6876C3.59372 8.97193 3.98747 6.83443 5.22497 5.42818C6.46247 4.02193 8.45935 3.34693 10.3156 3.60005C12.0593 3.82505 13.775 4.86568 14.5062 6.4688C14.9562 7.42505 15.0406 8.52193 14.8718 9.56255C14.7031 10.6313 14.2812 11.6438 13.5781 12.4594C12.875 13.2751 11.8625 13.8376 10.7937 13.8938C9.92185 13.9501 8.99372 13.6407 8.54372 12.9094C8.26247 14.4282 7.7281 15.9188 6.9406 17.2407C6.91247 17.2969 8.7406 17.6907 8.90935 17.6907C10.9906 17.8594 13.2125 17.0438 14.8437 15.7501C19.3437 12.1782 18.8656 5.3438 14.4218 1.96881C12.1156 0.196933 9.38747 -0.140567 6.68747 0.815684C5.87185 1.09693 5.11247 1.57506 4.40935 2.08131C3.28436 2.92505 2.38436 4.02193 1.79373 5.28755C1.20311 6.44068 0.978106 7.73443 1.00623 9.02818Z" fill=""></path>
</svg>
</a>
</div>

</div>
</div>
</div>
</div>
</footer>
{/* fotter end */}
    </>
  )
}


export default Home
