import React, { useEffect } from "react";
import { Comments } from "../molecules";
import { Btn } from "../atoms/btn";

import { getDoctorReview } from "../../redux/actions/specialist";
import { connect } from "react-redux";
import { useParams } from "react-router";

const Reviews = ({ getDoctorReview, reviews }) => {
  const { id } = useParams();
  useEffect(() => {
    getDoctorReview(id);
  }, []);

  console.log(reviews);
  return (
    <div className="mt-40 pb-5 px-6 lg:px-32">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <h1 className="text-3xl text-center md:text-4xl mb-4">تقييمات </h1>
      </div>

      {/* 1 */}

      {reviews &&
        reviews.map((review) => (
          <Comments
            key={review._id}
            name={`${review.user.firstName} ${review.user.lastName}`}
            date={review.date}
            stylee="bg-white"
            comment={review.text}
          />
        ))}
      <div className="text-center   ">
        <Btn stylee="mt-12  md:py-1 md:px-5 bg-spring-rain-900  text-white md:text-lg rounded-lg shadow-md">
          أرسل تقييم
        </Btn>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    reviews: state.specialist.reviews,
  };
};

export default connect(mapStateToProps, { getDoctorReview })(Reviews);
