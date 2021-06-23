
import React from "react";


export const CardBroadcast = ({ title,desc,link ,imageURL}) => {
    return (
        
        <div className=" bg-white rounded  w-72 h-40 mt-5 md:w-64 md:h-40 md:mt-5 md:px-2 lg:w-96 lg:h-40  border-gray-300 border-2 flex">
           <div className=" px-5 py-2">
           <h1 className=" lg:text-2xl">{title}</h1>
           <p className=" lg:text-lg py-1">{desc}</p>
           <p className=" lg:text-lg text-silver-tree-500 py-1"><a href="#">{link}</a></p>
           </div>
           <img src={imageURL}  className=" transition duration-500 ease-in-out lg:w-28 lg:h-38  hover:lg:w-40 hover:lg:h-60 hover:lg:-mt-20"/>

    </div>
    );
};


