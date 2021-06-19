import React from "react";

const Comments = ({ name, email, comment, date, stylee, commentColor }) => {
  return (
    <div className={`${stylee} py-4 px-2 md:p-4 `}>
      <div className="block  sm:flex justify-between">
        <div className="flex">
          <div>
            <img
              className="w-14 h-18 sm:w-28 sm:h-20 rounded-circle"
              alt=""
              src="https://cdn.dribbble.com/users/2199928/screenshots/11532918/shot-cropped-1590177932366.png?compress=1&resize=400x300"
            ></img>
          </div>
          <div className="mr-2 text-xs md:text-xl">
            <h2>{name}</h2>
            <p className="text-gray-500">{date}</p>
            {email && <span className="text-gray-400"> {email}@</span>}
          </div>
        </div>
        <div className="text-gray mt-2 sm:mt-0    lg:ml-10 ">
          <i className="fas fa-star  hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
          <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
          <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
          <i className="fas fa-star hover:text-tahuna-sands-800 px-1 fa-xs sm:text-lg"></i>
          <i className="fas fa-star hover:text-tahuna-sands-800 px-1 fa-xs sm:text-lg"></i>
        </div>
      </div>
      <div className="text-xs px-2 md:text-xl mt-6">
        <p>{comment}</p>
      </div>
      <hr
        style={{
          margin: "20px 100px 0px",
        }}
      />
    </div>
  );
};

export default Comments;
