import React from "react";
import { connect } from "react-redux";
const HeaderArtcles = ({ HeadArtcles }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 ">
        <div className=" bg-white px-44  py-10 text-silver-tree ">
          <h2 className=" text-lg md:text-xl lg:text-3xl py-12 	 ">
            {/* تابعي حملك واطمئني ان طفلك<br></br> ينمو بشكل سليم وامن */}
            {HeadArtcles?.name}
          </h2>

          <p className=" text-sm md:text-base lg:text-base py-1 ">
            {/* توفر لك بنون مجموعه متميزة من المقالات لمساعدتك  <br></br>
                        في متابعة أسابيع الحمل ومعرفة كيف تعتنين بنفسك وطفلك   */}
            {HeadArtcles?.description}
          </p>
        </div>
        {/* <div className="px-10 ">
          <img
            src="images/Pregnancy.png"
            alt="pregnancy"
            className="w-full	 lg:w-11/12 	"
          />
        </div> */}
      </div>
      {/* <img src="images/shagara.png" alt="tree" className=" lg:w-3/12 lg:h-30	" /> */}
    </>
  );
};
const mapStateToProps = (state) => ({
  HeadArtcles: state.categories.subCategory,
});

export default connect(mapStateToProps, {})(HeaderArtcles);
