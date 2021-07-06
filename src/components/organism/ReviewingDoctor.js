import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Login from "../../pages/Login";
import { AddDoctorReview } from "../../redux/actions/Reviews";

const ReviwingDoctor = ({ AddDoctorReview }) => {
  const { id } = useParams();
  const [stars, setstars] = useState(0);
  const [textArea, settextArea] = useState();

  let history = useHistory();

  const ratingChanged = (newRating) => {
    setstars(newRating);
  };
  if((localStorage.token == "null"|| !localStorage.token)){
    alert("you are not authorized please login")
    return (
      <Login></Login>
    )
  }
  return (
    <>
      <div class="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
        <div class="py-3 w-full px-12 sm:w-1/2  sm:mx-auto">
          <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
            <div class="px-12 py-5">
              <h2 class="text-gray-800 text-3xl font-semibold">رأيك يهمنا!</h2>
            </div>
            <div class="bg-gray-200 w-full flex flex-col items-center">
              <div class="flex flex-col items-center py-6 space-y-3">
                <span class="text-lg text-gray-800">ما تقييمك للدكتور...</span>
                {/* REviews */}
                <div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={32}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div class="w-3/4 flex flex-col">
                <textarea
                  rows="3"
                  class="p-4 text-gray-500 rounded-xl resize-none"
                  placeholder="أترك تقييمك للطبيب..."
                  onChange={(e) => {
                    settextArea(e.target.value);
                  }}
                ></textarea>
                <button
                  onClick={() =>
                    AddDoctorReview({
                      data: { text: textArea, rate: stars, id },
                    })
                  }
                  class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                >
                  أرسال
                </button>
              </div>
            </div>
            <div class="h-20 flex items-center justify-center">
              <button className="w-full h-full" onClick={history.goBack}>
                الرجوع
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { AddDoctorReview })(ReviwingDoctor);
