import React from 'react'
import { FbIcon, Linkdinicon, Printicon, Twittericon } from '../component/Icons'

function Footer() {
  return (
    <div>
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
                   <FbIcon/>
                  </a>
                  <a
                    id="twitterFooterBtn"
                    aria-label="twitter social link"
                    href="#"
                    className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark"
                  >
                    <Twittericon/>
                  </a>
                  <a
                    id="linkedinFooterBtn"
                    aria-label="linkedin social link"
                    href="#"
                    className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark"
                  >
                    <Linkdinicon/>
                  </a>
                  <a
                    id="pinterestFooterBtn"
                    aria-label="pinterest social link"
                    href="#"
                    className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark"
                  >
                   <Printicon/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* fotter end */}
    </div>
  )
}

export default Footer