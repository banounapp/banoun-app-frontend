import React, { useEffect, useState } from "react";
import { Comments } from "../molecules";
import { Btn } from "../atoms/btn";

import { getDoctorReview } from "../../redux/actions/specialist";
import { connect } from "react-redux";
import { Route, useParams } from "react-router";
import { Link } from "react-router-dom";

const Reviews = ({ getDoctorReview, reviews }) => {
  const { id } = useParams();
  useEffect(() => {
    getDoctorReview(id);
  }, []);
  const [isFullContentOrdered, setisFullContentOrdered] = useState(false);

  console.log(reviews);
  return (
    <div className="mt-40 pb-5 px-6 lg:px-32">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <h1 className="text-3xl text-center md:text-4xl mb-4">تقييمات </h1>
      </div>

      {/* 1 */}

      {reviews && (reviews.length <= 3 || isFullContentOrdered) ? (
        <>
          {reviews.map((review) => (
            <Comments
              key={review._id}
              name={`${review.user.firstName} ${review.user.lastName}`}
              date={review.date}
              stylee="bg-white"
              comment={review.text}
            />
          ))}
          {reviews && reviews.length >= 3 && (
            <button onClick={() => setisFullContentOrdered(false)}>
              اعرض أقل
            </button>
          )}
        </>
      ) : (
        <>
          {" "}
          <>
            {reviews &&
              !isFullContentOrdered &&
              [...reviews]
                .slice(0, 3)
                .map((review) => (
                  <Comments
                    key={review._id}
                    name={`${review.user.firstName} ${review.user.lastName}`}
                    date={review.date}
                    stylee="bg-white"
                    comment={review.text}
                  />
                ))}
          </>{" "}
          {reviews && reviews.length >= 3 && (
            <button onClick={() => setisFullContentOrdered(true)}>
              اعرض المزيد
            </button>
          )}
        </>
      )}
      <div className="text-center   ">
        <Link to={`/ReviwingDoctor/${id}`}>
          <Btn stylee="mt-12  md:py-1 md:px-5 bg-spring-rain-900  text-white md:text-lg rounded-lg shadow-md">
            أرسل تقييم
          </Btn>
        </Link>
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
