import React from "react";

import { Icons } from '../atoms';
export const Footer = () => {
  return (
    <footer className="footer-1 text-center text-white sm:text-right bg-gray-800 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/2 ">
            <h5 className="text-xl font-bold mb-6"> تا بعـنــا عـلى</h5>
            <div className="flex justify-center xl:justify-start">
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href=""
                className="w-8 mr-2 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
            <br />
            <ul className="list-none footer-links flex flex-col ">
              <li className="mb-2 ">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-silver-tree hover:text-silver-tree"
                >
                  الصفحة الرئيسية
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-silver-tree hover:text-silver-tree"
                >
                  المحتوى
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-silver-tree hover:text-silver-tree"
                >
                  عن بنـــون
                </a>
              </li>
            </ul>
            <ul className="list-none footer-links flex flex-col ">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-silver-tree hover:text-silver-tree"
                >
                  تواصل  معــنا
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-silver-tree hover:text-silver-tree"
                >
                  اراء الزوار
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-silver-tree hover:text-silver-tree"
                >
                  استشــير
                </a>
              </li>
            </ul>

          </div>


          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/3  sm:mx-auto xl:mt-0 md ">
            <h5 className="text-xl md:ml-10 font-bold mb-6 sm:text-center  ">
              يسعــدنا ان نسمــع مــنك
            </h5>

            <div className="mr-100 lg:w-2/3 pr-20  ">


              <p className='bg-silver-tree text-white p-2 flex' ><Icons icon='fas fa-phone' />8116 240 411 02 +</p>
              <br />

              <p className='bg-silver-tree text-white p-2 flex ' ><Icons icon='fas fa-envelope' /> banoun.app@gmail.com </p>


            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


