import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { SearchIcon, Book, FbIcon, Twitter, Linkdin, Print} from "../component/Icons";

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
        
        <NavbarItem color="foreground" isActive>
        <Link color="foreground" href="#">
            Home
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
    {/* toggle */}
    <NavbarItem>
    <button type="button" class="hs-dark-mode-active:hidden block hs-dark-mode group items-center text-gray-600 hover:text-blue-600 font-medium dark:text-neutral-400 dark:hover:text-neutral-500" data-hs-theme-click-value="dark">
  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
</button>
<button type="button" class="hs-dark-mode-active:block hidden hs-dark-mode group  items-center text-gray-600 hover:text-blue-600 font-medium dark:text-neutral-400 dark:hover:text-neutral-500" data-hs-theme-click-value="light">
  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
</button>
    </NavbarItem>
    {/* toggle */}
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
<a href="category.html" className="inline-flex text-purple-700 bg-purple-100 font-medium text-sm py-1 px-3 rounded-full">Automobile</a>
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
<a href="category.html" className="inline-flex text-green-700 bg-green-100 font-medium text-sm py-1 px-3 rounded-full">Travel</a>
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
<a href="category.html" className="inline-flex text-blue-700 bg-blue-100 font-medium text-sm py-1 px-3 rounded-full">Travel</a>
</div>
</div>

</div>

{/* blog-card */}

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
<Book/>
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
<Book/>
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
<Book/>
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
<a id="facebookFooterBtn" aria-label="facebook social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-400 lg:transition-all lg:ease-linear lg:duration-300 hover:text-black">
<FbIcon/>
</a>
<a id="twitterFooterBtn" aria-label="twitter social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 *:text-black rounded-full hover:bg-gray-400 lg:transition-all lg:ease-linear lg:duration-300 hover:text-black">
<Twitter/>
</a>
<a id="linkedinFooterBtn" aria-label="linkedin social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
<Linkdin/>
</a>
<a id="pinterestFooterBtn" aria-label="pinterest social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
<Print/>
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
