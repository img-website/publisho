import { Skeleton } from '@nextui-org/react'
import React from 'react'


const DetailPageSkeleton = () => {
  return (
    <>
    <div className="max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto border-b py-5">
      <div className="flex mt-10
       flex-wrap justify-between">
        <div className="xl:max-w-[770px] w-full">
          <Skeleton
            // src={blogData.bannerSkeletonUrl}
            alt="blog"
            className="w-full aspect-[1/.5] mb-10"
          />
          <Skeleton className="font-bold text-2xl sm:text-4xl lg:text-4xl   text-black mb-5">
          </Skeleton>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
            <Skeleton
             
              className="flex h-10 w-10 *:size-full rounded-full overflow-hidden"
            >
              <Skeleton
                alt="user"
              />
            </Skeleton>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <Skeleton className="text-custom-sm">
                  <Skeleton href="author.html">XXXXXXXXXXX</Skeleton>
                </Skeleton>
                <Skeleton className="flex w-[3px] h-[3px] rounded-full bg-black-2"></Skeleton>
                <Skeleton className="text-custom-sm"> XXXXXXXXXX</Skeleton>
                <Skeleton className="flex w-[3px] h-[3px] rounded-full bg-black-2"></Skeleton>
                {/* <Skeleton className="text-custom-sm">12 min read</Skeleton> */}
              </div>
              <Skeleton
                href="javascript:;"
                className="inline-flex text-teal-900 bg-teal-100 font-medium text-sm py-1 px-3 rounded-full"
              >
                Health
              </Skeleton>
            </div>
          </div>
          <div className="mt-9">
            <Skeleton className="mb-5 text-body">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to.
            </Skeleton>
            <Skeleton className="mb-5 text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              id quam at justo ullamcorper vulputate. Donec mattis aliquam
              urna, sed placerat dolor volutpat vel. Maecenas posuere sem
              purus, quis feugiat.
            </Skeleton>
            <Skeleton className="text-body">
              As discussed in the introduction post, one of the best things
              about Ghost is just how much you can customize to turn your site
              into something unique. Everything about your layout and design
              can be changed, so you're not stuck with yet another clone of a
              social network profile.
            </Skeleton>
          </div>
          <div className="rounded-md bg-gray-100 py-9 px-10 my-8">
            <Skeleton className="font-medium italic text-black text-center">
              “As discussed in the introduction post, one of the best things
              about Ghost is just how much you can customize so you're not
              stuck with yet another something unique.”
            </Skeleton>
            <Skeleton
              href="javascript:;"
              className="flex items-center justify-center gap-3.5 mt-5"
            >
              <div className="flex w-10 h-10 rounded-full overflow-hidden">
                <Skeleton
                  src="	https://clarity-tailwind.preview.uideck.com/images/user-02.png"
                  alt="user"
                />
              </div>
              <div>
                <Skeleton className="font-medium text-black text-custom-sm">
                  Rayna Kenter
                </Skeleton>
                <Skeleton className="text-xs ">Founder @jeeb-box</Skeleton>
              </div>
            </Skeleton>
          </div>
          <Skeleton className="mb-5 text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            quam at justo ullamcorper vulputate. Donec mattis aliquam urna,
            sed placerat dolor volutpat vel. Maecenas posuere sem purus, quis
            feugiat.
          </Skeleton>
          <Skeleton className="text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            quam at justo ullamcorper vulputate. Donec mattis aliquam urna,
            sed placerat dolor volutpat vel. Maecenas posuere sem purus, quis
            feugiat.
          </Skeleton>
          <div className="flex flex-wrap items-center gap-7 mt-10">
            <div className="lg:max-w-[360px] aspect-[1/1] w-full">
              <Skeleton
                src="https://clarity-tailwind.preview.uideck.com/images/blog-single-06.png"
                alt="blog"
                className="size-full object-cover"
              />
            </div>
            <div className="lg:max-w-[380px] w-full">
              <Skeleton className="font-bold text-heading-5 text-black mb-4">
                justo ullamcorper vulputate
              </Skeleton>
              <Skeleton className="mb-5 text-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id quam at justo ullamcorper vulputate. Donec mattis aliquam
                urna, sed placerat dolor volutpat vel. Maecenas posuere sem
                purus, quis feugiat.
              </Skeleton>
              <Skeleton className="text-body">
                As discussed in the introduction post, one of the best things
                about Ghost is just how much sed placerat dolor volutpat vel.
              </Skeleton>
            </div>
          </div>
          <div className="mt-10">
            <Skeleton className="font-semibold text-custom-3 text-black mb-6">
              Donec mattis aliquam urna
            </Skeleton>
            <Skeleton className="text-body">
              Sed ullamcorper dui at risus viverra, nec cursus leo
              ullamcorper. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per cursus himenaeos.
            </Skeleton>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="flex gap-2 text-body">
                <Skeleton>1.</Skeleton>
                <Skeleton>
                  <Skeleton className="text-black font-semibold">
                    Sed ullamcorper dui at risus
                  </Skeleton>
                  viverra, nec cursus leo ullamcorper nec cursus leo
                  ullamcorper. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per cursus himenaeos.
                </Skeleton>
              </li>
              <li className="flex gap-2 text-body">
                <Skeleton>2.</Skeleton>
                <Skeleton>
                  <Skeleton className="text-black font-semibold">
                    Everything about your
                  </Skeleton>
                  layout and design can be changed, so you're not stuck with
                  yet another clone of a social network profile.
                </Skeleton>
              </li>
              <li className="flex gap-2 text-body">
                <Skeleton>3.</Skeleton>
                <Skeleton>
                  <Skeleton className="text-black font-semibold">
                    Nulla id quam
                  </Skeleton>
                  at justo ullamcorper vulputate. Donec mattis aliquam urna,
                  dolor volutpat vel.
                </Skeleton>
              </li>
              <li className="flex gap-2 text-body">
                <Skeleton>4.</Skeleton>
                <Skeleton>
                  <Skeleton className="text-black font-semibold">
                    Sed ullamcorper dui at risus
                  </Skeleton>
                  viverra, nec cursus leo ullamcorper nec cursus leo
                  ullamcorper.
                </Skeleton>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap mt-4 items-center justify-between gap-10 mt-18">
            <ul className="flex items-center gap-3">
              <li className="text-base font-semibold">Tags:</li>
              <li className="text-black hover:text-blue-600 ease-in duration-200">
                <Skeleton href="category.html">#travel</Skeleton>
              </li>
              <li className="text-black hover:text-blue-600 ease-in duration-200">
                <Skeleton href="category.html">#health</Skeleton>
              </li>
              <li className="text-black hover:text-blue-600 ease-in duration-200">
                <Skeleton href="category.html">#technology</Skeleton>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <Skeleton className="text-base font-semibold">Share this:</Skeleton>

              <div className="flex items-center gap-2">
                <Skeleton
                  href="#"
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-[#364E8F] ease-in duration-200 hover:bg-opacity-95"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.7 6.6779V4.7263C7.7 3.9708 8.32679 3.35835 9.1 3.35835H10.5V1.30642L8.5995 1.17378C6.97865 1.06066 5.6 2.31497 5.6 3.90273V6.6779H3.5V8.72984Skeleton.6V12.8334H7.7V8.72984H9.8L10.5 6.6779H7.7Z"
                      fill="white"
                    ></path>
                  </svg>
                </Skeleton>
                <Skeleton
                  href="#"
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-[#52A2EC] ease-in duration-200 hover:bg-opacity-95"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.44062 12.5562C9.60312 12.5562 12.4031 8.29054 12.4031 4.59366C12.4031 4.50616 12.4031 4.35304 12.3812 4.22179C12.9281 3.82804 13.4094 3.32491 13.7812 2.77804C13.2562 3.01866 12.7313 3.14991 12.1844 3.21554C12.775 2.86554 13.2125 2.31866 13.4094 1.66241C12.8625 1.96866 12.2937 2.20929 11.6156 2.34054C11.0906 1.79366 10.3906 1.44366 9.58125 1.44366C8.02812 1.44366 6.75937 2.71241 6.75937 4.26554C6.75937 4.48429 6.78125 4.70304 6.825 4.92179C4.57188 4.76866 2.51562 3.65304 1.11562 1.96866C0.875 2.40616 0.74375 2.86554 0.74375 3.36866C0.74375 4.35304 1.24687 5.18429 2.0125 5.68741C1.55312 5.66554 1.11563 5.53429 0.74375 5.33741C0.74375 5.35929 0.74375 5.35929 0.74375 5.35929C0.74375 6.69366 1.70625 7.85304 2.975 8.11554C2.73438 8.18116 2.47187 8.20304 2.275 8.20304C2.1 8.20304 1.90312 8.18116 1.75 8.13741C2.12188 9.25304 3.15 10.0624 4.375 10.0843C3.4125 10.828 2.20937 11.2874 0.91875 11.2874C0.65625 11.3312 0.4375 11.2874 0.21875 11.2655C1.4 12.0968 2.86562 12.5562 4.44062 12.5562Z"
                      fill="white"
                    ></path>
                  </svg>
                </Skeleton>
                <Skeleton
                  href="#"
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-[#B1151D] ease-in duration-200 hover:bg-opacity-95"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_693_5532)">
                      <path
                        d="M0.393898 7.02197C0.437648 9.05635 1.37828 11.0907 2.97514 12.3157C3.47827 12.6876 4.02514 12.9063 4.59389 13.147C4.35327 11.5938 4.94389 10.0407 5.27202 8.50947C5.31577 8.35635 5.33764 8.18135 5.33764 8.00635C5.33764 7.76572 5.25014 7251 5.18452 7.28447C5.11889 6.89072 5.16264 6.4751 5.33764 6.10322C5.57827 5.6001 6.14702 5.20635 6.65014 5.40322C7.10952 5.57822 7.28452 6.19072 7.19702 6.67197C7.10952 7.1751 6.84702 7.6126 6.71577 8.09385C26264 8.5751 28452 9.16572 6.93452 9.49385C7.26264 9.8001 7.78764 9.82197 8.20327 9.64697C8.81577 9.38447 9.20952 8.77197 9.45014 8.15947C9.88764 7.02197 9.80014 5.57822 8.90326 4.74697C8.53139 4.3751 8.00639 4.13447 7.43764 4.04697C6.47514 3.89385 5.42514 4.17822 4.74702 4.87822C4.06889 5.57822 3.76264 6.6501 4.04702 76885C4.13452 7.8751 4.30952 8.18135 4.37514 8.4876C4.44077 8.79385 4.41889 9.1876 4.20014 9.40635C4.17827 9.42822 4.15639 9.4501 4.11264 9.47197C4.06889 9.49385 4.00327 9.4501 3.95952 9.42822C3.54389 9.16572 3.21577 8.7501 3.01889 8.3126C2.40639 6.97822 2.71264 5.31572 3.67514 4.22197C4.63764 3.12822 6.19077 2.60322 7.63452 2.8001C8.99077 2.9751 10.3251 3.78447 10.8939 5.03135C11.2439 5.7751 11.3095 6.62822 11.1783 7.4376C11.047 8.26885 10.7189 9.05635 10.172 9.69072C9.62514 10.3251 8.83764 10.7626 8.00639 10.8063C7.32827 10.8501 6.60639 10.6095 6.25639 10.0407C6.03764 11.222 5.62202 12.3813 5.00952 13.4095C4.98764 13.4532 6.40952 13.7595 24077 13.7595C8.15952 13.8907 9.88764 13.2563 11.1564 12.2501C14.6564 9.47197 14.2845 4.15635 10.8283 1.53135C9.03452 0.153224 6.91264 -0.109276 4.81264 0.634475C4.17827 0.853225 3.58764 1.2251 3.04077 1.61885C2.16577 2.2751 1.46577 3.12822 1.0064 4.1126C0.547023 5.00947 0.372023 6.01572 0.393898 7.02197Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_693_5532">
                        <rect width="14" height="14" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </Skeleton>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-12">
            <Skeleton
              href="author.html"
              className="flex max-w-24 w-full h-24 rounded-full overflow-hidden"
            >
              <Skeleton
                src="	https://clarity-tailwind.preview.uideck.com/images/user-02.png"
                alt="user"
              />
            </Skeleton>
            <div className="max-w-[617px]">
              <h4 className="font-medium text-black text-[22px] leading-7 mb-3">
                <Skeleton href="author.html">Author: Rayna Kenter</Skeleton>
              </h4>
              <Skeleton>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis.
              </Skeleton>

              <div className="flex items-center gap-1.5 mt-5">
                <Skeleton
                  href="#"
                  className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-black"
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
                      d="M10.4 8.58585V6.07664C10.4 5.10529 11.2059 4.31785 12.2 4.31785H14V1.67966L11.5565 1.50912C9.47255 1.36368 7.7 2.97636 7.7 5.01777V8.58585SkeletonV11.224H7.7V12H10.4V11.224H13.1L14 8.58585H10.4Z"
                      fill=""
                    ></path>
                  </svg>
                </Skeleton>
                <Skeleton
                  href="#"
                  className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-black"
                >
                  <svg
                    className="fill-current"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_739_364)">
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
                </Skeleton>
                <Skeleton
                  href="#"
                  className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-black"
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
                      d="M5.50004 3.50068C5.49976 4.11141 5.12924 4.661 4.56318 4.89028C3.99713 5.11957 3.34858 4.98277 2.92335 4.54439C2.49812 4.10601 2.38114 3.45359 2.62755 2.89478C2.87397 2.33597 3.43458 1.98236 4.04504 2.00068C4.85584 2.02502 5.5004 2.68951 5.50004 3.50068ZM5.54504 6.11068H2.54504V15.5007Skeleton.54504V6.11068ZM10.2851 6.11068H7.30004V15.5007H10.2551V10.5732C10.2551 7.82816 13.8326 77316 13.8326 10.5732V15.5007H16.7951V9.55316C16.7951 4.92568 11.5001 5.09818 10.2551 7.37066L10.2851 6.11068Z"
                      fill=""
                    ></path>
                  </svg>
                </Skeleton>
                <Skeleton
                  href="#"
                  className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-black"
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
                      d="M1.00623 9.02818C1.06248 11.6438 2.27186 14.2594 4.32497 15.8344C4.97185 16.3126 5.67497 12938 6.40622 16.9032C6.09685 14.9063 6.85622 12.9094 7.2781 10.9407C7.33435 10.7438 7.36247 10.5188 7.36247 10.2938C7.36247 9.98443 7.24997 9.67505 7.1656 9.36568C7.08122 8.85943 7.13747 8.32505 7.36247 7.84693C7.67185 7.20005 8.4031 6.6938 9.04997 6.94693C9.6406 7.17193 9.8656 7.95943 9.7531 8.57818C9.6406 9.22505 9.3031 9.78755 9.13435 10.4063C8.93747 11.0251 8.9656 11.7844 9.4156 12.2063C9.83747 12.6001 10.5125 12.6282 11.0468 12.4032C11.8343 12.0657 12.3406 11.2782 12.65 10.4907C13.2125 9.02818 13.1 7.17193 11.9468 6.10318C11.4687 5.62505 10.7937 5.31568 10.0625 5.20318C8.82497 5.0063 7.47497 5.37193 6.6031 6.27193C5.73122 7.17193 5.33747 8.55005 5.7031 9.7313C5.8156 10.1251 6.0406 10.5188 6.12497 10.9126C6.20935 11.3063 6.18122 11.8126 5.89997 12.0938C5.87185 12.1219 5.84372 12.1501 5.78747 12.1782C5.73122 12.2063 5.64685 12.1501 5.5906 12.1219C5.05622 11.7844 4.63435 11.2501 4.38122 10.6876C3.59372 8.97193 3.98747 6.83443 5.22497 5.42818C6.46247 4.02193 8.45935 3.34693 10.3156 3.60005C12.0593 3.82505 13.775 4.86568 14.5062 6.4688C14.9562 7.42505 15.0406 8.52193 14.8718 9.56255C14.7031 10.6313 14.2812 11.6438 13.5781 12.4594C12.875 13.2751 11.8625 13.8376 10.7937 13.8938C9.92185 13.9501 8.99372 13.6407 8.54372 12.9094C8.26247 14.4282 7.7281 15.9188 6.9406 17.2407C6.91247 17.2969 8.7406 17.6907 8.90935 17.6907C10.9906 17.8594 13.2125 17.0438 14.8437 15.7501C19.3437 12.1782 18.8656 5.3438 14.4218 1.96881C12.1156 0.196933 9.38747 -0.140567 6.68747 0.815684C5.87185 1.09693 5.11247 1.57506 4.40935 2.08131C3.28436 2.92505 2.38436 4.02193 1.79373 5.28755C1.20311 6.44068 0.978106 7.73443 1.00623 9.02818Z"
                      fill=""
                    ></path>
                  </svg>
                </Skeleton>
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
                <Skeleton href="blog-single-3.html" className="group flex gap-2">
                  <div className="max-w-[70px] w-full h-17 rounded-full">
                    <Skeleton
                      src="https://clarity-tailwind.preview.uideck.com/images/blog-small-01.png"
                      alt="blog"
                    />
                  </div>
                  <div>
                    <Skeleton className="font-medium text-sm text-black duration-200 ease-in mb-1.5 group-hover:text-blue-600">
                      The Most Beautiful Green Field on Earth
                    </Skeleton>
                    <div className="flex items-center gap-2">
                      <Skeleton className="text-xs ">Rhiel Madsen</Skeleton>
                      <Skeleton className="flex w-[3px] h-[3px] rounded-full bg-black-2"></Skeleton>
                      <Skeleton className="text-xs ">Sep 10, 2025</Skeleton>
                    </div>
                  </div>
                </Skeleton>

                <Skeleton href="blog-single-3.html" className="group flex gap-2">
                  <div className="max-w-[70px] w-full h-17 rounded-full">
                    <Skeleton
                      src="https://clarity-tailwind.preview.uideck.com/images/blog-small-02.png"
                      alt="blog"
                    />
                  </div>
                  <div>
                    <Skeleton className="font-medium text-sm text-black duration-200 ease-in mb-1.5 group-hover:text-blue-600">
                      Facts About Business That Will Help You Success
                    </Skeleton>
                    <div className="flex items-center gap-2">
                      <Skeleton className="text-xs ">Jordyn Culhne</Skeleton>
                      <Skeleton className="flex w-[3px] h-[3px] rounded-full bg-black-2"></Skeleton>
                      <Skeleton className="text-xs ">Mar 12, 2025</Skeleton>
                    </div>
                  </div>
                </Skeleton>

                <Skeleton href="blog-single-3.html" className="group flex gap-2">
                  <div className="max-w-[70px] w-full h-17 rounded-full">
                    <Skeleton
                      src="https://clarity-tailwind.preview.uideck.com/images/blog-small-03.png"
                      alt="blog"
                    />
                  </div>
                  <div>
                    <Skeleton className="font-medium text-sm text-black duration-200 ease-in mb-1.5 group-hover:text-blue-600">
                      5 Easy Ways You Can Turn Future Into Success
                    </Skeleton>
                    <div className="flex items-center gap-2">
                      <Skeleton className="text-xs ">Ane Madsen</Skeleton>
                      <Skeleton className="flex w-[3px] h-[3px] rounded-full bg-black-2"></Skeleton>
                      <Skeleton className="text-xs ">Nov 25, 2025</Skeleton>
                    </div>
                  </div>
                </Skeleton>
              </div>
            </div>

            <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7 lg:p-10">
              <h4 className="font-semibold text-custom-4 text-black mb-8">
                Explore Topics
              </h4>
              <div className="flex flex-col gap-3">
                <Skeleton
                  href="#"
                  className="group flex items-center justify-between gap-2"
                >
                  <Skeleton className="ease-in duration-200 group-hover:text-black">
                    Celebration
                  </Skeleton>
                  <Skeleton className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                    02
                  </Skeleton>
                </Skeleton>

                <Skeleton
                  href="#"
                  className="group flex items-center justify-between gap-2"
                >
                  <Skeleton className="ease-in duration-200 group-hover:text-black">
                    Culture
                  </Skeleton>
                  <Skeleton className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                    05
                  </Skeleton>
                </Skeleton>

                <Skeleton
                  href="#"
                  className="group flex items-center justify-between gap-2"
                >
                  <Skeleton className="ease-in duration-200 group-hover:text-black">
                    Fashion
                  </Skeleton>
                  <Skeleton className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                    12
                  </Skeleton>
                </Skeleton>

                <Skeleton
                  href="#"
                  className="group flex items-center justify-between gap-2"
                >
                  <Skeleton className="ease-in duration-200 group-hover:text-black">
                    Inspiration
                  </Skeleton>
                  <Skeleton className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                    30
                  </Skeleton>
                </Skeleton>

                <Skeleton
                  href="#"
                  className="group flex items-center justify-between gap-2"
                >
                  <Skeleton className="ease-in duration-200 group-hover:text-black">
                    Lifestyle
                  </Skeleton>
                  <Skeleton className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                    45
                  </Skeleton>
                </Skeleton>

                <Skeleton
                  href="#"
                  className="group flex items-center justify-between gap-2"
                >
                  <Skeleton className="ease-in duration-200 group-hover:text-black">
                    Political
                  </Skeleton>
                  <Skeleton className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                    23
                  </Skeleton>
                </Skeleton>

                <Skeleton
                  href="#"
                  className="group flex items-center justify-between gap-2"
                >
                  <Skeleton className="ease-in duration-200 group-hover:text-black">
                    Trending
                  </Skeleton>
                  <Skeleton className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-dark">
                    03
                  </Skeleton>
                </Skeleton>
              </div>
            </div>

            <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7 lg:p-10">
              <h4 className="font-semibold text-custom-4 text-black mb-7">
                Newsletter
              </h4>
              <Skeleton className="font-medium text-custom-lg mb-5.5">
                Join 70,000 subscribers!
              </Skeleton>
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
              <Skeleton className="text-custom-sm mt-5 text-center">
                By signing up, you agree to our
                <Skeleton href="privacy-policy.html" className="text-black">
                  Privacy Policy
                </Skeleton>
              </Skeleton>
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
          <Skeleton href="index.html" class="-ml-1.5 flex items-center">
            <Skeleton
              src="./assets/Skeleton/fantasy-logo.png"
              alt="logo"
              class="size-full "
            />
          </Skeleton>
        </div>
        <label
          for="sideToggle"
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-black"
        >
          <Skeleton class="sr-only">Close menu</Skeleton>
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
                <Skeleton href="index.html" class="text-sm font-medium text-white">
                  Home
                </Skeleton>
                <Skeleton href="about.html" class="text-sm font-medium text-white">
                  About
                </Skeleton>
                <Skeleton href="work.html" class="text-sm font-medium text-white">
                  Work
                </Skeleton>
                <Skeleton href="blog.html" class="text-sm font-medium text-white">
                  {" "}
                  Blogs
                </Skeleton>
                <Skeleton href="contact.html" class="text-sm font-medium text-white">
                  {" "}
                  Contact Us
                </Skeleton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default DetailPageSkeleton