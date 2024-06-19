import React from 'react'
import { Aeroicon, Bookicon } from '../component/Icons';

function TopAuthers() {
    const authorsData = [
        {
          name: "Adrio Devid",
          position: "Director of Operations",
          imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postsCount: 3,
        },
        {
          name: "Rayna Kenter",
          position: "Content Writer",
          imageSrc: "https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postsCount: 5,
        },
        {
          name: "Talan Philips",
          position: "Director of Operations",
          imageSrc: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postsCount: 10,
        },
        // Add more authors as needed
      ];
      
  return (
    <div>
         <div className="max-w-7xl px-6 lg:px-8 w-full mt-10 mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-8 mb-6  w-full mt-10 mx-auto border-b py-5">
        <h2 className="font-medium text-heading-5 [font-family:'Painting_With_Chocolate'] text-3xl md:text-5xl text-dark">
          Top Authors
        </h2>
        <a href="#" className="group text-dark leading-none">
          <span className="flex items-center gap-2 bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
            All Author
            <Aeroicon/>
          </span>
        </a>
      </div>
      <div className="pt-3 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {authorsData.map((author, index) => (
            <a href="author.html" className="group" key={index}>
              <div className="border border-gray-3 rounded-[20px] bg-gray-50 p-5 group-hover:bg-white group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all">
                <div className="flex flex-wrap items-center gap-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden *:size-full *:object-cover">
                    <img src={author.imageSrc} alt="user" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-custom-xl text-dark mb-1">
                      {author.name}
                    </h3>
                    <p>{author.position}</p>
                    <span className="flex items-center gap-2 text-custom-sm mt-2.5">
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.775 14.4501H2.575C2.325 14.4501 2.125 14.2501 2.125 14.0001V2.00009C2.125 1.75009 2.325 1.55009 2.575 1.55009H8.225V4.75009C8.225 5.05009 8.475 5.32509 8.8 5.32509H11.975V7.00009C11.975 7.30009 12.225 7.57509 12.55 7.57509C12.875 7.57509 13.125 7.32509 13.125 7.00009V4.90009C13.125 4.62509 13 4.35009 12.8 4.15009L9.3 0.750091C9.1 0.550091 8.825 0.450091 8.55 0.450091H2.55C1.7 0.425091 1 1.15009 1 2.00009V14.0001C1 14.8501 1.7 15.5751 2.575 15.5751H5.8C6.1 15.5751 6.375 15.3251 6.375 15.0001C6.375 14.6751 6.1 14.4501 5.775 14.4501ZM9.325 2.35009L11.2 4.20009H9.325V2.35009Z"
                          fill=""
                        ></path>
                        <path
                          d="M14.7996 9.40015C14.5996 9.20015 14.3996 9.00015 14.1996 8.80015C14.0246 8.62515 13.8496 8.42515 13.6496 8.25015C13.5496 8.12515 13.3996 8.02515 13.2246 8.00015C13.0246 7.97515 12.8246 8.02515 12.6746 8.15015L8.32461 12.4751C8.19961 12.6001 8.12461 12.7251 8.07461 12.8751L7.44961 14.7751L7.34961 15.0751L7.52461 15.0501L9.42461 14.4251C9.57461 14.3751 9.72461 14.3001 9.84961 14.1751L14.1746 9.85015C14.2996 9.72515 14.3496 9.52515 14.3246 9.32515C14.2996 9.15015 14.1996 9.02515 14.0746 8.90015L14.7996 9.40015ZM11.6746 9.75015L11.8496 9.92515L7.94961 13.8251L7.42461 14.0001L7.59961 13.4501L8.49961 10.5251L8.74961 10.2751C9.32461 10.6751 9.82461 10.8251 10.4246 10.8251C11.0246 10.8251 11.4996 10.6751 11.6746 10.5001C11.8496 10.3251 11.6746 10.0001 11.6746 9.75015Z"
                          fill=""
                        ></path>
                      </svg>
                      {author.postsCount} Posts
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default TopAuthers