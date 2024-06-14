import React from "react";
import { FbIcon, Linkdinicon, Printicon, Twittericon } from "../component/Icons";

function Detail() {
  return (
    <>
      <div className="max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto border-b py-5">
        <div className="flex flex-wrap justify-between">
          <div className="xl:max-w-[770px] w-full">
            <img
              src="https://clarity-tailwind.preview.uideck.com/images/blog-single-03.png"
              alt="blog"
              className="w-full mb-10"
            />
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-4xl   text-black mb-5">
              Give Your Space a Parisian - Inspired Makeover
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
              <a
                href="author.html"
                className="flex h-10 w-10 *:size-full rounded-full overflow-hidden"
              >
                <img
                  src="	https://clarity-tailwind.preview.uideck.com/images/user-02.png"
                  alt="user"
                />
              </a>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h4 className="text-custom-sm">
                    <a href="author.html">Rayna Kenter</a>
                  </h4>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-black-2"></span>
                  <p className="text-custom-sm">Sep 10, 2025</p>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-black-2"></span>
                  <p className="text-custom-sm">12 min read</p>
                </div>
                <a
                  href="category.html"
                  className="inline-flex text-teal-900 bg-teal-100 font-medium text-sm py-1 px-3 rounded-full"
                >
                  Health
                </a>
              </div>
            </div>
            <div className="mt-9">
              <p className="mb-5 text-body">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to.
              </p>
              <p className="mb-5 text-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id quam at justo ullamcorper vulputate. Donec mattis aliquam
                urna, sed placerat dolor volutpat vel. Maecenas posuere sem
                purus, quis feugiat.
              </p>
              <p className="text-body">
                As discussed in the introduction post, one of the best things
                about Ghost is just how much you can customize to turn your site
                into something unique. Everything about your layout and design
                can be changed, so you're not stuck with yet another clone of a
                social network profile.
              </p>
            </div>
            <div className="rounded-md bg-gray-100 py-9 px-10 my-8">
              <p className="font-medium italic text-black text-center">
                “As discussed in the introduction post, one of the best things
                about Ghost is just how much you can customize so you're not
                stuck with yet another something unique.”
              </p>
              <a
                href="author.html"
                className="flex items-center justify-center gap-3.5 mt-5"
              >
                <div className="flex w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="	https://clarity-tailwind.preview.uideck.com/images/user-02.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-black text-custom-sm">
                    Rayna Kenter
                  </h4>
                  <p className="text-xs ">Founder @jeeb-box</p>
                </div>
              </a>
            </div>
            <p className="mb-5 text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
              quam at justo ullamcorper vulputate. Donec mattis aliquam urna,
              sed placerat dolor volutpat vel. Maecenas posuere sem purus, quis
              feugiat.
            </p>
            <p className="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
              quam at justo ullamcorper vulputate. Donec mattis aliquam urna,
              sed placerat dolor volutpat vel. Maecenas posuere sem purus, quis
              feugiat.
            </p>
            <div className="flex flex-wrap items-center gap-7 mt-10">
              <div className="lg:max-w-[360px] aspect-[1/1] w-full">
                <img
                  src="https://clarity-tailwind.preview.uideck.com/images/blog-single-06.png"
                  alt="blog"
                  className="size-full object-cover"
                />
              </div>
              <div className="lg:max-w-[380px] w-full">
                <h3 className="font-bold text-heading-5 text-black mb-4">
                  justo ullamcorper vulputate
                </h3>
                <p className="mb-5 text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  id quam at justo ullamcorper vulputate. Donec mattis aliquam
                  urna, sed placerat dolor volutpat vel. Maecenas posuere sem
                  purus, quis feugiat.
                </p>
                <p className="text-body">
                  As discussed in the introduction post, one of the best things
                  about Ghost is just how much sed placerat dolor volutpat vel.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="font-semibold text-custom-3 text-black mb-6">
                Donec mattis aliquam urna
              </h2>
              <p className="text-body">
                Sed ullamcorper dui at risus viverra, nec cursus leo
                ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per cursus himenaeos.
              </p>
              <ul className="flex flex-col gap-4 mt-5">
                <li className="flex gap-2 text-body">
                  <span>1.</span>
                  <p>
                    <span className="text-black font-semibold">
                      Sed ullamcorper dui at risus
                    </span>
                    viverra, nec cursus leo ullamcorper nec cursus leo
                    ullamcorper. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per cursus himenaeos.
                  </p>
                </li>
                <li className="flex gap-2 text-body">
                  <span>2.</span>
                  <p>
                    <span className="text-black font-semibold">
                      Everything about your
                    </span>
                    layout and design can be changed, so you're not stuck with
                    yet another clone of a social network profile.
                  </p>
                </li>
                <li className="flex gap-2 text-body">
                  <span>3.</span>
                  <p>
                    <span className="text-black font-semibold">
                      Nulla id quam
                    </span>
                    at justo ullamcorper vulputate. Donec mattis aliquam urna,
                    dolor volutpat vel.
                  </p>
                </li>
                <li className="flex gap-2 text-body">
                  <span>4.</span>
                  <p>
                    <span className="text-black font-semibold">
                      Sed ullamcorper dui at risus
                    </span>
                    viverra, nec cursus leo ullamcorper nec cursus leo
                    ullamcorper.
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap mt-4 items-center justify-between gap-10 mt-18">
              <ul className="flex items-center gap-3">
                <li className="text-base font-semibold">Tags:</li>
                <li className="text-black hover:text-blue-600 ease-in duration-200">
                  <a href="category.html">#travel</a>
                </li>
                <li className="text-black hover:text-blue-600 ease-in duration-200">
                  <a href="category.html">#health</a>
                </li>
                <li className="text-black hover:text-blue-600 ease-in duration-200">
                  <a href="category.html">#technology</a>
                </li>
              </ul>
              <div className="flex items-center gap-3">
                <p className="text-base font-semibold">Share this:</p>

                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full *:fill-white bg-[#364E8F] ease-in duration-200 hover:bg-opacity-95"
                  >
                   <FbIcon/>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full *:fill-white bg-[#52A2EC] ease-in duration-200 hover:bg-opacity-95"
                  >
                    <Twittericon/>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 *:fill-white rounded-full bg-[#B1151D] ease-in duration-200 hover:bg-opacity-95"
                  >
                    <Printicon/>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              <a
                href="author.html"
                className="flex max-w-24 w-full h-24 rounded-full overflow-hidden"
              >
                <img
                  src="	https://clarity-tailwind.preview.uideck.com/images/user-02.png"
                  alt="user"
                />
              </a>
              <div className="max-w-[617px]">
                <h4 className="font-medium text-black text-[22px] leading-7 mb-3">
                  <a href="author.html">Author: Rayna Kenter</a>
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis.
                </p>

                <div className="flex items-center gap-1.5 mt-5">
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-black"
                  >
                    <Linkdinicon/>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-black"
                  >
                    <FbIcon/>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-black"
                  >
                    <Twittericon/>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-black"
                  >
                    <Printicon/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[370px] w-full">
            <div className="flex flex-col gap-10">
              <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7 lg:p-10">
                <h4 className="font-semibold text-custom-4 text-black mb-7">
                  Recent Posts
                </h4>
                <div className="flex flex-col gap-7">
                  <a href="blog-single-3.html" className="group flex gap-2">
                    <div className="max-w-[70px] w-full h-17 rounded-full">
                      <img
                        src="https://clarity-tailwind.preview.uideck.com/images/blog-small-01.png"
                        alt="blog"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm text-black duration-200 ease-in mb-1.5 group-hover:text-blue-600">
                        The Most Beautiful Green Field on Earth
                      </h5>
                      <div className="flex items-center gap-2">
                        <p className="text-xs ">Rhiel Madsen</p>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-black-2"></span>
                        <p className="text-xs ">Sep 10, 2025</p>
                      </div>
                    </div>
                  </a>

                  <a href="blog-single-3.html" className="group flex gap-2">
                    <div className="max-w-[70px] w-full h-17 rounded-full">
                      <img
                        src="https://clarity-tailwind.preview.uideck.com/images/blog-small-02.png"
                        alt="blog"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm text-black duration-200 ease-in mb-1.5 group-hover:text-blue-600">
                        Facts About Business That Will Help You Success
                      </h5>
                      <div className="flex items-center gap-2">
                        <p className="text-xs ">Jordyn Culhne</p>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-black-2"></span>
                        <p className="text-xs ">Mar 12, 2025</p>
                      </div>
                    </div>
                  </a>

                  <a href="blog-single-3.html" className="group flex gap-2">
                    <div className="max-w-[70px] w-full h-17 rounded-full">
                      <img
                        src="https://clarity-tailwind.preview.uideck.com/images/blog-small-03.png"
                        alt="blog"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm text-black duration-200 ease-in mb-1.5 group-hover:text-blue-600">
                        5 Easy Ways You Can Turn Future Into Success
                      </h5>
                      <div className="flex items-center gap-2">
                        <p className="text-xs ">Ane Madsen</p>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-black-2"></span>
                        <p className="text-xs ">Nov 25, 2025</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7 lg:p-10">
                <h4 className="font-semibold text-custom-4 text-black mb-8">
                  Explore Topics
                </h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="group flex items-center justify-between gap-2"
                  >
                    <p className="ease-in duration-200 group-hover:text-black">
                      Celebration
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                      02
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center justify-between gap-2"
                  >
                    <p className="ease-in duration-200 group-hover:text-black">
                      Culture
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                      05
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center justify-between gap-2"
                  >
                    <p className="ease-in duration-200 group-hover:text-black">
                      Fashion
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                      12
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center justify-between gap-2"
                  >
                    <p className="ease-in duration-200 group-hover:text-black">
                      Inspiration
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                      30
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center justify-between gap-2"
                  >
                    <p className="ease-in duration-200 group-hover:text-black">
                      Lifestyle
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                      45
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center justify-between gap-2"
                  >
                    <p className="ease-in duration-200 group-hover:text-black">
                      Political
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                      23
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center justify-between gap-2"
                  >
                    <p className="ease-in duration-200 group-hover:text-black">
                      Trending
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                      03
                    </span>
                  </a>
                </div>
              </div>

              <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7 lg:p-10">
                <h4 className="font-semibold text-custom-4 text-black mb-7">
                  Newsletter
                </h4>
                <p className="font-medium text-custom-lg mb-5.5">
                  Join 70,000 subscribers!
                </p>
                <form>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="rounded-md border border-gray-3 bg-white placeholder:text-black-5 w-full py-3.5 px-5 outline-none text-center focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                  />
                  <button className="font-medium rounded-md text-white bg-black flex justify-center text-center w-full py-3 px-5 hover:opacity-90 transition-all duration-200 mt-4">
                    Subscribe Now
                  </button>
                </form>
                <p className="text-custom-sm mt-5 text-center">
                  By signing up, you agree to our
                  <a href="privacy-policy.html" className="text-black">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        class="peer/sideToggle hidden"
        name="sideToggle"
        id="sideToggle"
      />
      <label
        for="sideToggle"
        class="fixed inset-0 -z-[1011] backdrop-blur-xl bg-blue-500/10 overflow-hidden peer-checked/sideToggle:z-[1010] peer-checked/sideToggle:opacity-100 opacity-0 duration-100"
      ></label>
      <div class="fixed flex flex-col h-screen inset-y-0 right-0 z-[1011] w-full overflow-y-auto bg-slate-900 overflow-hidden backdrop-blur-lg select-none text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/10 peer-checked/sideToggle:translate-x-0 peer-checked/sideToggle:opacity-100 translate-x-full opacity-0 duration-300">
        <div class="flex items-center justify-between border-b pb-3">
          <div class="h-10 flex">
            <a href="index.html" class="-ml-1.5 flex items-center">
              <img
                src="./assets/img/fantasy-logo.png"
                alt="logo"
                class="size-full "
              />
            </a>
          </div>
          <label
            for="sideToggle"
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-black"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </label>
        </div>
        <div class=" mt-1 grow flex flex-fill overflow-auto  ">
          <div class=" divide-y divide-black w-full">
            <div class="space-y-2 py-6 w-full">
              <div class="flex flex-col gap-5 items-center w-full">
                <div class="flex flex-col w-full gap-y-3">
                  <a href="index.html" class="text-sm font-medium text-white">
                    Home
                  </a>
                  <a href="about.html" class="text-sm font-medium text-white">
                    About
                  </a>
                  <a href="work.html" class="text-sm font-medium text-white">
                    Work
                  </a>
                  <a href="blog.html" class="text-sm font-medium text-white">
                    {" "}
                    Blogs
                  </a>
                  <a href="contact.html" class="text-sm font-medium text-white">
                    {" "}
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
