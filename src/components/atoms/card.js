import React from "react";


export const Card = ({ stylee, imageSource, category, des,styleimage }) => {
    return (
        <div
            className={` w-full shadow-lg h-28 mx-2 md:h-36 border-2 mt-16 mb-6 rounded  flex sm:px-4 bg-white text-black ${stylee}`}
        >

            <div className="text-center  w-full text-lg sm:text-xl my-auto">
                <h1 className="text-sm sm:text-xl text-silver-tree">{category}</h1>
                <h3 className="text-sm sm:text-md">{des}</h3>
            </div>
            <div className="my-auto ">
                <img
                    alt=""
                    className={styleimage}
                    src={imageSource}
                ></img>
            </div>
        </div>
    );
};


