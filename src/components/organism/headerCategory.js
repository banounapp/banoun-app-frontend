import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Load from "./../molecules/load";
import "./category.css"
const HeaderCategory = ({ sub_category }) => {
  const imageElem = useRef(null);
  // const handleImagesLoading = ()=>{
  //     console.log("happened")
  //     imageElem.current.onerror = null;
  //     imageElem.current.src="./images/Logo.gif";
  // }

  const [isImageEqual, setisImageEqual] = useState(false);

  const [imageSrc, setimageSrc] = useState(imageElem?.current?.src);

  return (
    <>
      {sub_category && !isImageEqual ? (
        <div className="  block items-center md:flex px-20 my-14">
          <div className=" space-y-6 lg:w-1/3  md:mx-20 text-center  md:text-right   ">
            <div className="space-y-6">
              <div className="space-y-4 text-3xl">
                <h2>{sub_category.description}</h2>

                <h2 className=" text-gray-500 text-lg lg:text-3xl md:text-2xl  ">- مارى ماسون</h2>
              </div>
            </div>
          </div>
          <div className="sm:w-30 lg:w-1/2 md:w-2/5 h-1/2 relative ">
            {sub_category.image ? (
<>                <div
                  className="image"
                  style={{
                    background: `url(https://banoun-app.herokuapp.com/api/upload/show/${sub_category.image.filename})   ,
                  url("") `,
                 
                  }}
                  ref={imageElem}
                  // onError={handleImagesLoading}
                >
                <img
                  src={"/images/bg.png"}
                  style={{  position: "absolute", top: "0px", left: "-25px", zIndex: "-10" }}
                /></div>
              </>
            ) : (
              <img className="w-2/3 m-auto" alt="" src="../images/HM.png" style={{ backgroundImage: "url(/images/bg.png)" }} />
            )}
          </div>
        </div>
      ) : (
        <Load></Load>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  sub_category: state.categories.category,
});
export default connect(mapStateToProps, {})(HeaderCategory);
