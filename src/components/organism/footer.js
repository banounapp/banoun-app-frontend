import React from "react";

import { Icons } from '../atoms';
export const Footer = () => {
  return (
    <footer className="p-10  bg-gray-900 " >
     <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 lg:mr-20 ">
     <div className="mt-10 ">
       <h1 className="text-silver-tree lg:text-4xl">بنون</h1>
       <p className=" text-white lg:text-lg">يقدم لكم دعم كامل في<br></br> كل خطوه ف تربيه ابنائك</p>
     </div>
      <div className=" text-white mt-10">
        <h1 className="lg:text-2xl">تصفح</h1>
      <div className="flex  py-5">
      <ul >
         <li className=" mb-2"><a href="#">الصفحه الرئيسيه</a></li>
         <li><a href="#">عن بنون</a></li>
       </ul>
       <ul className="mr-8">
         <li className=" mb-2"><a href="#">المحتوي</a></li>
         <li><a href="#">استشير</a></li>
       </ul>
      </div>
      </div>
      <div className="text-white mt-10 ">

        <h className="lg:text-2xl">تابعنا علي</h>
        <ul className="py-5">
          <li className=" mb-2"><a href="#" >فيسبوك</a></li>
          <li className=" mb-2"><a href="#" >تويتر</a></li>
          <li><a href="#" >انستجرام</a></li>
        </ul>
      </div>
      <div>
      <div className="flex   mt-10">
          <div class="w-7  overflow-hidden inline-block">
            <div class=" h-9  bg-silver-tree-500 -rotate-45 transform origin-top-right"></div>
          </div>
          <h1 className="text-2xl md:text-2xl lg:text-3xl mb-4 text-white"> يسعدنا ان نسمع منك  </h1>
         
        </div>
        <div className="bg-silver-tree rounded h-10 text-white w-3/4 text-center text-base py-2 lg:text-2xl" style={{fontFamily:"Arial"}}>01278023989</div>
        <div className="bg-silver-tree rounded h-10 text-white w-3/4 text-center text-base py-2 lg:text-xl mt-2">banoun.app@gmail.com</div>

      </div>
     </div>
     

    </footer>
  );
};



// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer-1 text-center text-white sm:text-right bg-gray-800 py-8 sm:py-12">
//       <div className="container mx-auto px-4">
//         <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
//           <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
//             <h5 className="text-xl font-bold mb-6">بنون</h5>
//             <ul className="list-none footer-links">
//               <li className="mb-2">
//                 <a
//                   href="#"
//                   className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
//                 >
//                   عن بنون
//                 </a>
//               </li>

//               <li className="mb-2">
//                 <a
//                   href="#"
//                   className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
//                 >
//                   الاشتراك
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a
//                   href="#"
//                   className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
//                 >
//                   المحتوي
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
//             <h5 className="text-xl font-bold mb-6">Resources</h5>
//             <ul className="list-none footer-links">
//               <li className="mb-2">
//                 <a
//                   href="#"
//                   className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
//                 >
//                   المحتوي1
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a
//                   href="#"
//                   className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
//                 >
//                   المحتوي2
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a
//                   href="#"
//                   className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
//                 >
//                   المحتوي3
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a
//                   href="#"
//                   className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
//                 >
//                   الحمل
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
//             <h5 className="text-xl md:ml-10 font-bold mb-6 sm:text-center xl:text-left">
//               كن متصلا!
//             </h5>
//             <div className="flex justify-center xl:justify-start">
//               <a
//                 href=""
//                 className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
//               >
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a
//                 href=""
//                 className="w-8 mr-2 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
//               >
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a
//                 href=""
//                 className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
//               >
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//             </div>
//             <div className="mt-5">
//               <label>تواصل</label>
//               <input placeholder="رايك" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
