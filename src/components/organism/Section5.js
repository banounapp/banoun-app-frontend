import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Btn } from "../atoms";
import { connect } from 'react-redux';
import { PostCommentReview } from './../../redux/actions/reviewerComments'


const Section5 = ({ PostCommentReview, user }) => {
  const [stars, setstars] = useState(0);
  const [formData, setFormData] = useState({
    text: "",
    rate: stars
  });

  const { text, rate } = formData;
  const onChangeMethod = (e) => {
    // console.dir(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const ratingChanged = (newRating) => {
    setstars(newRating);
    setFormData({ ...formData, rate: newRating })
  };

  return (
    <div className="mt-10 px-8 md:px-32 mb-20 mt-20">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <h1 className="text-3xl md:text-4xl mb-4"> اترك تعليقك </h1>
      </div>
      {user ? <form className="relative border-2 pb-3 px-6 w-4/5 mx-auto md:w-2/3"
        onSubmit={(e) => {
          e.preventDefault();
          PostCommentReview(formData);
        }}
      >
        <div className="text-center mx-auto">
          <div className="relative h-4 sm:h-10">
            <img
              className="absolute  rounded-full left-auto mx-auto  bottom-2 sm:bottom-4 left-6  w-12 h-12  sm:w-20 sm:h-20"
              alt=""
              src="https://pbs.twimg.com/media/Ea6FcyhXsAEAt8c.jpg" src={`https://banoun-app.herokuapp.com/api/upload/show/${user && user?.image?.filename
                }`}
            ></img>
          </div>
          <div>
            <p> {user?.username}</p>
            <p className="text-sm sm:text-md text-gray-400 ">{user?.email}</p>
          </div>
        </div>
        <input className="text-gray text-sm sm:text-md mt-6 outline-none"
          placeholder='اترك تعليقك...'
          name='text'
          defaultValue={text}
          onChange={(e) => onChangeMethod(e)}

          type='text'
        />
        <div className="h-14">
          <div className="flex  justify-between mt-6">
            <div className="text-gray mt-2 sm:mt-0  md:ml-10 ">
              <ReactStars
                count={5}
                size={32}
                onChange={ratingChanged}
                activeColor="#ffd700"
              />
              {/* <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 fa-xs sm:text-lg"></i> */}
            </div>
            <div>
              <Btn stylee="px-2 md:px-6 mx-auto ml-0 sm:ml-10 py-1 bg-gray-800 text-white text-sm md:text-lg  mt-2 rounded ">
                أرسال
              </Btn>
            </div>
          </div>
        </div>
      </form> : "سجل لكي تترك تعليقا"}
      {/*  */}

    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.userProfile.user,
});

export default connect(mapStateToProps, { PostCommentReview })(Section5)