import React from "react";
import _ from "lodash";

export const Comments = ({ name, email, comment, date, rate }) => {
  return (
    <div className="mt-5 border-2 py-4 px-2 md:p-4 shadow">
      <div className="block  sm:flex justify-between">
        <div className="flex">
          <div>
            <img
              className="w-14  h-18 sm:w-28 sm:h-20 rounded-circle"
              alt=""
              src="https://cdn.dribbble.com/users/2199928/screenshots/11532918/shot-cropped-1590177932366.png?compress=1&resize=400x300"
            ></img>
          </div>
          <div className="text-xs md:text-xl">
            <h2>{name}</h2>
            <h3>{date}</h3>
            {/* <span className="text-gray-400"> Shery Shawki@</span> */}
            <span className="text-gray-400"> {email}</span>
          </div>
        </div>
        <div className="text-gray mt-2 sm:mt-0  md:ml-10 ">
          {
            _.times(rate, (i) => (
              <i
                key={i}
                className="fas fa-star text-amber-500 fa-xs "
              ></i>
            ))}
        </div>
      </div>
      <div className="text-xs px-2 sm:px-28 md:text-xl mt-2">
        <p>{comment}</p>
      </div>
      <p className=" mr-16 lg:mr-52"> {name}</p>
      <p className="mr-14 lg:mr-48"> {email}</p>
      <p className=" mr-5 mt-5"> {comment}</p>
      <div className="text-gray mt-2 sm:mt-0  md:ml-10 mr-5 lg:mt-4">
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 fa-xs sm:text-lg"></i>
  </div>
     
    </div>

  );
};




{/* <div className="mt-5 border-2 py-4 px-4 md:p-4 shadow">
<div className="block  sm:flex justify-between">
  <div className="flex">
    <div>
      <img
        className="w-14 h-18 sm:w-28 sm:h-20 rounded-circle"
        alt=""
        src="https://cdn.dribbble.com/users/2199928/screenshots/11532918/shot-cropped-1590177932366.png?compress=1&resize=400x300"
      ></img>
    </div>
    <div className="text-xs md:text-xl">
      <h2>Shery Shawki</h2>
      <span className="text-gray-400"> Shery Shawki@</span>
    </div>
  </div>
  <div className="text-gray mt-2 sm:mt-0  md:ml-10 ">
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 fa-xs sm:text-lg"></i>
  </div>
</div>
<div className="text-xs px-2 md:text-xl mt-6">
  <p>
    الطبيب الخاص بك من هنا الانالطبيب الخاص بك من هنا الان اشترك مع الطبيب
    الخاص بك من هنا الان اشترك مع الطبيب الخاص بك من هنا الان اشترك مع
    الطبيب الخاص بك من هنا الان
  </p>
</div>
</div> */}