import React, { Fragment, useEffect } from "react";
import { DropDownDoc } from "../atoms";
import { Pagination } from "../atoms";
import { connect } from "react-redux";
import { GetAllSpecialist } from ".././../redux/actions/specialist";

import { BtnDoc } from "../atoms";
import { CardDoc } from "../molecules";
import { SearchDoc } from "../molecules/searchdoc";
const Doctors = ({ GetAllSpecialist, specialists }) => {
  useEffect(() => {
    GetAllSpecialist();
  }, []);
  return (
    <>
      <div className="  py-7 bg-alabaster-500  ">
        <h2 className=" text-3xl text-center">اطباؤنا</h2>
        <p className=" text-base text-center mt-5">
          اختر طبيبك من بين مجموعة كبيرة من أطبائنا المتميزين في مختلف التخصصات
          التي تهمك
        </p>

        <div className="lg:flex mr-10	lg:mr-24 mt-10  ">
          <SearchDoc
            className=" py-4 px-5"
            placeholder="  ابحث عن طبيب او مختص...      "
          />
          <DropDownDoc
            parent=" اختر من التخصصات"
            child1="الحمل"
            child2="ما بعد الولادة"
            child3="الطفوله"
            child4="المراهقه"
            child5="الحالات الخاصه"
          />
          <BtnDoc
            stylee="bg-silver-tree  text-white   h-8  w-9/12 mt-2 m-auto  md:w-4/12  md:mt-2 md:mr-60 lg:w-1/12 lg:mr-5 "
            type="submit"
          >
            بحث
          </BtnDoc>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:px-20">
          {specialists &&
            specialists.map((item) => (
              <Fragment>
                <CardDoc
                  imageSource={
                    item.image
                      ? `https://banoun-app.herokuapp.com/api/upload/show/${item?.image?.filename}`
                      : item.gender == "female"
                      ? "images/docgirl.png"
                      : "images/docboy.png"
                  }
                  // imageSource={item.gender=="female"?"images/docgirl.png":"images/docboy.png"}

                  docname={item.username}
                  des={item.job}
                  rate={item.rate}
                  className="-mt-16"
                  id={item._id}
                />
              </Fragment>
            ))}
        </div>
      </div>
      {/* <Pagination /> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  specialists: state.specialist.specialists,
});

export default connect(mapStateToProps, {
  GetAllSpecialist,
})(Doctors);
