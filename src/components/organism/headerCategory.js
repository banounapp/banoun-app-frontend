import React from "react";
import { connect } from "react-redux";

 const HeaderCategory= ({sub_category}) => {
 console.log(sub_category);
    return (
        <div className="  block items-center md:flex px-20 my-14">

            <div className=" bg-green space-y-6 lg:w-1/3  md:mx-20 text-center  md:text-right   ">
                <div className="space-y-6">

                    <div className="space-y-4">
                        <h2>
                            {sub_category&&sub_category.description}
                        </h2>
                        {/* <h2 className="text-xl  lg:text-4xl md:text-2xl ">
                            طفلك كيان تحمليه بداخلك
            </h2>
                        <h2 className="text-xl  lg:text-4xl md:text-2xl ">
                            لمده تسعه اشهر،
            </h2>
                        <h2 className="text-lg lg:text-4xl md:text-2xl  ">
                            و بين ذراعيك لمدة ثلاث سنوات،
            </h2>
                        <h2 className="text-lg lg:text-4xl md:text-2xl  ">
                            و فى فلبك حتى يوم وفاتك
            </h2>
                        <h2 className=" text-gray-500 text-lg lg:text-3xl md:text-2xl  ">
                            - مارى ماسون
            </h2> */}
                    </div>
                </div>

            </div>
            <div className="sm:w-30 lg:w-2/3 md:w-2/5 ">
            {sub_category&&sub_category.image?  <img
             className="w-2/3 m-auto"
             alt=""
             src={`https://banoun-app.herokuapp.com/api/upload/show/${sub_category.image.filename}`}
         />:
         <img
         className="w-2/3 m-auto"
         alt=""
         src="../images/header.png"
     />
           
            
            }

               
            </div>
        </div>
    );
};


const mapStateToProps = (state) => ({
    sub_category: state.categories.category
  
  });
  export default connect(mapStateToProps,{

    
  
  })(HeaderCategory);
  