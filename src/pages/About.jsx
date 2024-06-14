import React from 'react'


export default function About() {
  return (
   <>
   <div className="max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto border-b py-5 mb-4">
<div className="flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14">
<div className="lg:max-w-[570px] w-full rounded-md overflow-hidden aspect-[1/.6] *:h-full">
<img src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="about" className="size-full object-cover" />
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
   
{/* blog ui */}

<div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-1">
<div className="flex flex-wrap justify-between">

<div className="8 mt-10 mx-auto border-b overflow-hidden bg-white shadow-2xl p-2 rounded-xl w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 my-10">
<div className="lg:max-w-[536px] w-full aspect-[1/.8]">
<a href="blog-single.html">
<img className="size-full shadow-2xl object-cover rounded-xl" src="https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA" alt="hero" />
</a>
</div>
<div className="lg:max-w-[540px] w-full mt-4 lg:mt-0">
<a href="category.html" className="inline-flex text-violet-700 bg-violet-200/60 font-medium text-sm py-1 px-3 rounded-full mb-4">Bikes</a>
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
<div className="w-full aspect-[1/.6]">
<a href="blog-single.html">
<img className="size-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1574484184081-afea8a62f9c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxmb29kfGVufDB8fDB8fHww" alt="hero" />
</a>
</div>
<div className=" w-full">
<a href="category.html" className="inline-flex text-yellow-900 bg-yellow-100/50 font-medium text-sm py-1 px-3 rounded-full mb-4">Technology</a>
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
   </>
  )
}
