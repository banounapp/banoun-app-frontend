import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Btn } from "../atoms";
import { connect } from "react-redux";
import { PostCommentReview } from "./../../redux/actions/reviewerComments";

const Section5 = ({ PostCommentReview, user }) => {
  const [stars, setstars] = useState(0);
  const [formData, setFormData] = useState({
    text: "",
    rate: stars,
  });

  const { text, rate } = formData;
  const onChangeMethod = (e) => {
    // console.dir(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const ratingChanged = (newRating) => {
    setstars(newRating);
    setFormData({ ...formData, rate: newRating });
  };

  return (
    <div className="mt-10 px-8 md:px-32 mb-20 mt-20">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <div className="flex">
          <div class="w-9  overflow-hidden inline-block">
            <div class=" h-12  bg-silver-tree-500 -rotate-45 transform origin-top-right"></div>
          </div>
          <h1 className="text-3xl md:text-4xl "> اترك تعليقك </h1>
        </div>
      </div>
      {user ? (
        <form
          className="relative border-2 pb-3 px-6 w-4/5 mx-auto md:w-2/3 "
          onSubmit={(e) => {
            e.preventDefault();
            PostCommentReview(formData);
          }}
        >
          <div>
            <img
              className="w-12/12 h-96 mt-10"
              alt=""
              src="https://pbs.twimg.com/media/Ea6FcyhXsAEAt8c.jpg"
              src={`https://banoun-app.herokuapp.com/api/upload/show/${user && user?.image?.filename}`}
            ></img>
          </div>
          <p className="mr-16 lg:mr-52"> {user?.username}</p>
          <p className="mr-12 lg:mr-44">{user?.email}</p>
        

          <input
            className="mr-5"
            placeholder="اترك تعليقك..."
            name="text"
            defaultValue={text}
            onChange={(e) => onChangeMethod(e)}
            type="text"
          />
          <div className="h-14">
            <div className="flex  justify-between mt-6">
              <div className="text-gray mt-2 sm:mt-0  md:ml-10 ">
                <ReactStars count={5} size={32} onChange={ratingChanged} activeColor="#ffd700" />
                {/* <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 fa-xs sm:text-lg"></i> */}
              </div>
              <div>
                <Btn stylee="mt-10 mr-10 lg:mt-2 lg:mr-20 bg-black text-white rounded w-20 h-10">ارسال</Btn>
              </div>
            </div>
          </div>
        </form>
      ) : (
        "سجل لكي تترك تعليقا"
      )}
      {/*  */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.userProfile.user,
});

export default connect(mapStateToProps, { PostCommentReview })(Section5);
