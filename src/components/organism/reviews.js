import React from "react";
import Comments from "../molecules/Comments";
import { Btn } from "../atoms/btn";

const Reviews = () => {
  return (
    <div className="mt-40 pb-5 px-6 lg:px-32">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <h1 className="text-3xl text-center md:text-4xl mb-4">تقييمات </h1>
      </div>

      {/* 1 */}

      <Comments
        name="Donia Mahran"
        date="الأحد، ١٤ مارس ٢٠٢١ ٠٥:٣٢ ص"
        stylee="bg-white"
        comment="دكتور فاهم كويس قوي وعنده سعة صدر وبيتكلم كويس جدا مهذب ومتواضع و خبرة كبيرة"
      />
      {/* 2 */}

      <Comments
        name="Ali rami"
        date="الأحد، ١٤ مارس ٢٠٢١ ٠٥:٣٢ ص"
        stylee="bg-white"
        comment=" الطبيب الخاص بك من هنا الانالطبيب الخاص بك من هنا الان اشترك مع الطبيب
    الخاص بك من هنا الان اشترك مع الطبيب الخاص بك من هنا الان اشترك مع
    الطبيب الخاص بك من هنا الان"
      />
      <div className="text-center   ">
        <Btn stylee="mt-12  md:py-1 md:px-5 bg-spring-rain-900  text-white md:text-lg rounded-lg shadow-md">
          أرسل تقييم
        </Btn>
      </div>
    </div>
  );
};

export default Reviews;
