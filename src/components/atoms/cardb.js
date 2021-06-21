
import React from "react";


export const CardB = ({ bookname, vote, price, imageURL }) => {
    return (

        <div className="">
            <img
                alt=''
                className=' w-44 h-52'
                src={imageURL}
            ></img>
            <h3 className='mt-1 text-lg'> {bookname}</h3>
            <div className=' mt-2 sm:mt-0  md:ml-10 '>
                <i className='fas fa-star text-amber-500 fa-xs '></i>
                <i className='fas fa-star text-amber-500  fa-xs '></i>
                <i className='fas fa-star text-amber-500  fa-xs '></i>
                <i className='fas fa-star text-amber-500  fa-xs '></i>
                <i className='fas fa-star text-amber-500  fa-xs '></i>
                <span className='mr-2 text-gray-500 text-lg mr-3'> {vote}  </span>
                <h2 className='text-lg md:mb-5'>{price}  </h2>
            </div>
        </div>
    );
};