import React from "react";
import Card from "../molecules/card";

const Section1 = () => {
  return (
    <div className="relative z-10 px-8 md:px-32  bg-spring-rain-500 pb-5">
      <div className="pt-5 mb-10 px-6 text-center">
        <h1 className="text-4xl mb-4">المحتوي</h1>
        <p className="text-md md:text-2xl mb-4">
          هنا نقدم لك أفضل الارشادات للتربية الصحيحة
        </p>
      </div>

      {/*  */}
      <div className="absolute z-0 w-1 mb-10 hidden lg:block bg-black h-5/6 right-1/2">
        <div className="absolute z-0 transform translate-x-96 top-24 w-96   h-1 bg-black"></div>
        <div className="absolute z-0  top-72 w-96   h-1 bg-black"></div>
        <div className="absolute z-0  transform translate-x-96 top-96 w-96   h-1 bg-black">
          <div className="relative right-30 w-1 h-20 bg-black"></div>
        </div>
        <div className="absolute z-0  bottom-64 w-96  h-1 bg-black"></div>
        <div className="absolute z-0 transform  translate-x-96 bottom-12 w-96   h-1 bg-black"></div>
      </div>

      {/* DIV 1 */}
      <Card
        stylee="lg:w-1/3"
        category="الحمل"
        imageSource="
    https://media.istockphoto.com/vectors/pregnant-woman-concept-vector-illustration-in-cute-cartoon-style-vector-id1132530882?k=6&m=1132530882&s=612x612&w=0&h=DQIj_g5M6N1jIJgnk7DGxPBEEOLt1itmIMnnzbgxK5U="
      />

      {/* DIV 2 */}
      <Card
        stylee="right-0 lg:w-1/3 lg:right-2/3"
        category="الحمل"
        imageSource="https://media.istockphoto.com/vectors/pregnant-woman-concept-vector-illustration-in-cute-cartoon-style-vector-id1132530882?k=6&m=1132530882&s=612x612&w=0&h=DQIj_g5M6N1jIJgnk7DGxPBEEOLt1itmIMnnzbgxK5U="
      />

      {/* DIV 3 */}
      <Card
        stylee="lg:w-1/3"
        category="الحمل"
        imageSource="
    https://media.istockphoto.com/vectors/pregnant-woman-concept-vector-illustration-in-cute-cartoon-style-vector-id1132530882?k=6&m=1132530882&s=612x612&w=0&h=DQIj_g5M6N1jIJgnk7DGxPBEEOLt1itmIMnnzbgxK5U="
      />
      {/* DIV 4 */}

      <Card
        stylee="right-0 lg:w-1/3 lg:right-2/3"
        category="الحمل"
        imageSource="https://media.istockphoto.com/vectors/pregnant-woman-concept-vector-illustration-in-cute-cartoon-style-vector-id1132530882?k=6&m=1132530882&s=612x612&w=0&h=DQIj_g5M6N1jIJgnk7DGxPBEEOLt1itmIMnnzbgxK5U="
      />

      {/* DIV 5*/}
      <Card
        stylee="lg:w-1/3"
        category="الحمل"
        imageSource="
    https://media.istockphoto.com/vectors/pregnant-woman-concept-vector-illustration-in-cute-cartoon-style-vector-id1132530882?k=6&m=1132530882&s=612x612&w=0&h=DQIj_g5M6N1jIJgnk7DGxPBEEOLt1itmIMnnzbgxK5U="
      />
    </div>
  );
};

export default Section1;
