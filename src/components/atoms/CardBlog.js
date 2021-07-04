import React, { Fragment, useState } from "react";

export const CardBlog = ({
  blogtitle,
  imageURL,
  Name,
  time,
  content,
  id,
  likes,
  AddLike,
  RemoveLike,
  auth,
  userauth,
  specid,
  DeletePost,
}) => {
  const [isFullContentOrdered, setisFullContentOrdered] = useState(false);
  return (
    <div
      className="  h-auto	  border-2 border-gray-300 rounded-lg mt-5 "
      style={{ width: "51%" }}
    >
      <div className=" mt-3">
        <div className=" flex justify-between">
          <div className="  text-gray-500">
            <i className="far fa-comment-dots pr-12"></i>
            <span className=" px-2"> {blogtitle}</span>
          </div>
          <div className=" ml-10 cursor-pointer	 text-xl">
            {auth == specid && (
              <button
                onClick={() => {
                  DeletePost(id);
                }}
              >
                <i
                  class="fas fa-trash-alt px-2"
                  style={{ color: "red", fontSize: "18px" }}
                ></i>
              </button>
            )}
          </div>
        </div>
        <div className=" flex">
          <div>
            <img
              src={imageURL}
              className=" rounded-full w-10 h-12  mr-10 mt-5"
            />
          </div>
          <div className=" mt-8 mr-2">
            <p> {Name}</p>
            <p className=" text-gray-500">{time} </p>
          </div>
        </div>
        <p className="mr-10 mt-5 mb-7" style={{ width: "90%" }}>
          {content.length >= 200 && !isFullContentOrdered ? (
            <>
              {" "}
              {content.substr(0, 200)}
              <button
                onClick={() => setisFullContentOrdered(true)}
                style={{ color: "blue" }}
              >
                اكثر
              </button>
            </>
          ) : (
            <>
              <span>{content}</span>
              {content.length >= 200 && (
                <button
                  onClick={() => setisFullContentOrdered(false)}
                  style={{ color: "silver-tree" }}
                >
                  اقل
                </button>
              )}
            </>
          )}
        </p>
        {userauth && (
          <div
            className="mt-16 border-t-2 border-gray-300 flex justify-between text-gray-500
        text-sm md:text-base lg:text-lg
        "
          >
            <Fragment>
              <button
                className=" px-5 py-3 cursor-pointer	"
                onClick={(e) => AddLike(id)}
              >
                {likes}
                <i className="far fa-thumbs-up px-2"></i>
                اعجبني
              </button>
              <button
                className=" px-5 py-3 cursor-pointer	"
                onClick={(e) => RemoveLike(id)}
              >
                <i className="far fa-thumbs-down px-2"></i>
                لا يعجبني
              </button>
            </Fragment>

            <div className=" px-5 py-3 cursor-pointer	"></div>
          </div>
        )}
      </div>
    </div>
  );
};
