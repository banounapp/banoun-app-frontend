import React, { useEffect } from "react";
import { Comments } from "../molecules";
import { connect } from 'react-redux';
import { GetCommentReview } from './../../redux/actions/reviewerComments';
const Section4 = ({ reviwes, GetCommentReview }) => {
  useEffect(() => {
    GetCommentReview();
  }, [])
  console.log(reviwes);
  return (
    <div className=" pb-5 px-6 md:px-32" id="visitors">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <h1 className="text-3xl md:text-4xl mb-4">تعليقات الزوار </h1>
      </div>

      {/* 1 */}
      {reviwes?.map(item =>
        <Comments
          name={item?.user?.username}
          email={item?.user?.email}
          comment={item?.text}
        />
      )
      }



    </div>
  );
};
const mapStateToProps = (state) => ({
  reviwes: state.reviewerComments.Reviews
});

export default connect(mapStateToProps, { GetCommentReview })(Section4);
