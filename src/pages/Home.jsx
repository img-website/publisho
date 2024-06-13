import React, { useState } from "react";
import Header from "../components/Header";
import TopBlogs from "../components/TopBlogs";
import TopAuthers from "../components/TopAuthers";
import {Button} from "@nextui-org/react";


function Home() {
 
  return (
    <>
      <div className="relative pb-12 bg-black xl:py-40 py-12 sm:py-20 md:py-28 ">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1610827776753-8c668b92d732?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="relative">
          <div className="px-5 mx-auto max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
                Master the basics of baking
              </h1>
              <p className="mt-6 tracking-tighter text-white">
                <span className=" font-normal [font-family:'Painting_With_Chocolate'] text-6xl">
                  Unlock the World of{" "}
                </span>
                <br />
                <span className="font-serif italic font-normal text-7xl">
                  blogera
                </span>
              </p>
              <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                penatibus pellentesque dolor consequat ligula egestas massa
                gravida. Porttitor venenatis enim praesent.
              </p>

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
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                    />
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
            <img
              src="https://clarity-tailwind.preview.uideck.com/images/about.png"
              alt="about"
              className="w-full"
            />
          </div>
          <div className="lg:max-w-[490px] w-full">
            <span className="inline-flex text-primary font-medium md:text-6xl text-3xl mt-3  [font-family:'Painting_With_Chocolate'] mb-1 sm:mb-3">
              Who we are
            </span>
            <h1 className="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-5">
              We provide high quality Articles &amp; blogs
            </h1>
            <p>
              Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos congue dui nec dui lobortis
              maximus.
            </p>
            <p className="mt-4.5">
              Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
              auctor orci, eu dictum diam diam nec neque. Pellentesque.
            </p>
          </div>
        </div>
      </div>
      {/* blog-card */}

      <div></div>
      {/* blog-card */}
      <div>
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
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3.5 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                    />
                  </div>
                  <Button className="hover:!bg-black  hover:!text-white border-black font-semibold ">
                    Subscribe
                  </Button>
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
              <p className="text-custom-sm">
                © 2025 Clarity. All rights reserved
              </p>
            </div>
            <div>
              <ul className="flex flex-wrap items-center gap-2.5">
                <li>
                  <a
                    href="privacy-policy.html"
                    className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark"
                  >
                    <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                      Privacy
                    </span>
                  </a>
                </li>
                <li>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                </li>
                <li>
                  <a
                    href="privacy-policy.html"
                    className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark"
                  >
                    <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                      Terms
                    </span>
                  </a>
                </li>
                <li>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                </li>
                <li>
                  <a
                    href="signup.html"
                    className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark"
                  >
                    <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                      Contact
                    </span>
                  </a>
                </li>
                <li>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                </li>
                <li>
                  <a
                    href="signup.html"
                    className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark"
                  >
                    <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                      Contribute
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <p className="font-medium text-custom-sm text-dark">
                  Follow Us:
                </p>

                <div className="flex items-center gap-1.5">
                  <a
                    id="facebookFooterBtn"
                    aria-label="facebook social link"
                    href="#"
                    className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark"
                  >
                    <svg
                      className="fill-current"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4 8.58585V6.07664C10.4 5.10529 11.2059 4.31785 12.2 4.31785H14V1.67966L11.5565 1.50912C9.47255 1.36368 7.7 2.97636 7.7 5.01777V8.58585H5V11.224H7.7V16.5H10.4V11.224H13.1L14 8.58585H10.4Z"
                        fill=""
                      ></path>
                    </svg>
                  </a>
                  <a
                    id="twitterFooterBtn"
                    aria-label="twitter social link"
                    href="#"
                    className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark"
                  >
                    <svg
                      className="fill-current"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_739_364)">
                        <path
                          d="M16.2781 4.30313L17.3469 2.95313C17.6562 2.5875 17.7406 2.30625 17.7688 2.16562C16.925 2.67188 16.1375 2.84063 15.6312 2.84063H15.4344L15.3219 2.72813C14.6469 2.1375 13.8031 1.82812 12.9031 1.82812C10.9344 1.82812 9.3875 3.45938 9.3875 5.34375C9.3875 5.45625 9.3875 5.625 9.41563 5.7375L9.5 6.3L8.90938 6.27188C5.30937 6.15938 2.35625 3.06563 1.87813 2.53125C1.09063 3.9375 1.54063 5.2875 2.01875 6.13125L2.975 7.70625L1.45625 6.8625C1.48438 8.04375 1.93437 8.97188 2.80625 9.64688L3.56562 10.2094L2.80625 10.5188C3.28437 11.9531 4.35313 12.5438 5.14062 12.7688L6.18125 13.05L5.19688 13.725C3.62188 14.85 1.65312 14.7656 0.78125 14.6813C2.55313 15.9188 4.6625 16.2 6.125 16.2C7.22188 16.2 8.0375 16.0875 8.23438 16.0031C16.1094 14.1469 16.475 7.11563 16.475 5.70938V5.5125L16.6438 5.4C17.6 4.5 17.9937 4.02188 18.2188 3.74063C18.1344 3.76875 18.0219 3.825 17.9094 3.85313L16.2781 4.30313Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_739_364">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    id="linkedinFooterBtn"
                    aria-label="linkedin social link"
                    href="#"
                    className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark"
                  >
                    <svg
                      className="fill-current"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.50004 3.50068C5.49976 4.11141 5.12924 4.661 4.56318 4.89028C3.99713 5.11957 3.34858 4.98277 2.92335 4.54439C2.49812 4.10601 2.38114 3.45359 2.62755 2.89478C2.87397 2.33597 3.43458 1.98236 4.04504 2.00068C4.85584 2.02502 5.5004 2.68951 5.50004 3.50068ZM5.54504 6.11068H2.54504V15.5007H5.54504V6.11068ZM10.2851 6.11068H7.30004V15.5007H10.2551V10.5732C10.2551 7.82816 13.8326 7.57316 13.8326 10.5732V15.5007H16.7951V9.55316C16.7951 4.92568 11.5001 5.09818 10.2551 7.37066L10.2851 6.11068Z"
                        fill=""
                      ></path>
                    </svg>
                  </a>
                  <a
                    id="pinterestFooterBtn"
                    aria-label="pinterest social link"
                    href="#"
                    className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark"
                  >
                    <svg
                      className="fill-current"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00623 9.02818C1.06248 11.6438 2.27186 14.2594 4.32497 15.8344C4.97185 16.3126 5.67497 16.5938 6.40622 16.9032C6.09685 14.9063 6.85622 12.9094 7.2781 10.9407C7.33435 10.7438 7.36247 10.5188 7.36247 10.2938C7.36247 9.98443 7.24997 9.67505 7.1656 9.36568C7.08122 8.85943 7.13747 8.32505 7.36247 7.84693C7.67185 7.20005 8.4031 6.6938 9.04997 6.94693C9.6406 7.17193 9.8656 7.95943 9.7531 8.57818C9.6406 9.22505 9.3031 9.78755 9.13435 10.4063C8.93747 11.0251 8.9656 11.7844 9.4156 12.2063C9.83747 12.6001 10.5125 12.6282 11.0468 12.4032C11.8343 12.0657 12.3406 11.2782 12.65 10.4907C13.2125 9.02818 13.1 7.17193 11.9468 6.10318C11.4687 5.62505 10.7937 5.31568 10.0625 5.20318C8.82497 5.0063 7.47497 5.37193 6.6031 6.27193C5.73122 7.17193 5.33747 8.55005 5.7031 9.7313C5.8156 10.1251 6.0406 10.5188 6.12497 10.9126C6.20935 11.3063 6.18122 11.8126 5.89997 12.0938C5.87185 12.1219 5.84372 12.1501 5.78747 12.1782C5.73122 12.2063 5.64685 12.1501 5.5906 12.1219C5.05622 11.7844 4.63435 11.2501 4.38122 10.6876C3.59372 8.97193 3.98747 6.83443 5.22497 5.42818C6.46247 4.02193 8.45935 3.34693 10.3156 3.60005C12.0593 3.82505 13.775 4.86568 14.5062 6.4688C14.9562 7.42505 15.0406 8.52193 14.8718 9.56255C14.7031 10.6313 14.2812 11.6438 13.5781 12.4594C12.875 13.2751 11.8625 13.8376 10.7937 13.8938C9.92185 13.9501 8.99372 13.6407 8.54372 12.9094C8.26247 14.4282 7.7281 15.9188 6.9406 17.2407C6.91247 17.2969 8.7406 17.6907 8.90935 17.6907C10.9906 17.8594 13.2125 17.0438 14.8437 15.7501C19.3437 12.1782 18.8656 5.3438 14.4218 1.96881C12.1156 0.196933 9.38747 -0.140567 6.68747 0.815684C5.87185 1.09693 5.11247 1.57506 4.40935 2.08131C3.28436 2.92505 2.38436 4.02193 1.79373 5.28755C1.20311 6.44068 0.978106 7.73443 1.00623 9.02818Z"
                        fill=""
                      ></path>
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
  );
}

export default Home;
