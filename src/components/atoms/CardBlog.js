import React from "react";

export const CardBlog = ({ blogtitle, imageURL, Name, time, content }) => {
  return (
    <div className=" md:w-11/12 lg:w-9/12	 h-auto	  border-2 border-gray-300 rounded-lg mt-5">
      <div className=" mt-3">
        <div className=" flex justify-between">
          <div className="  text-gray-500">
            <i className="far fa-comment-dots px-4"></i>
            <span className=" px-2">  {blogtitle}</span>
          </div>
          <div className=" ml-10 cursor-pointer	 text-xl">
            <span>...</span>
          </div>
        </div>
        <div className=" flex">
            <div><img src={imageURL}
            className=" rounded-full w-10 h-12 mr-10 mt-5"
            /></div>
            <div className=" mt-5 mr-2">
                <p> {Name}</p>
                <p className=" text-gray-500">{time}  </p>
            </div>
        </div>
        <p className="mr-10 mt-5">{content}</p>
        <div className="mt-16 border-t-2 border-gray-300 flex justify-between text-gray-500
        text-sm md:text-base lg:text-lg
        ">
            <div className=" px-5 py-3 cursor-pointer	">
            <i className="far fa-thumbs-up px-2"></i>
            اعجبني
            
            </div>
            <div className=" px-5 py-3 cursor-pointer	">
            <i className="far fa-thumbs-down px-2"></i>
            لا يعجبني
            
            </div>
            <div className=" px-5 py-3 cursor-pointer	">
            <i className="far fa-comment-dots px-2"></i>
            تعليق
            
            </div>
           
        </div>
      </div>
    </div>
  );
};


