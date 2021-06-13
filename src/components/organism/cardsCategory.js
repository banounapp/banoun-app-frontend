import React, {  useEffect, useState } from "react";
import { Suspense } from "react";
import { Card } from "../atoms";
import { connect } from "react-redux";
import Spinner from '../atoms/Spinner';
import {GetCategory} from '.././../redux/actions/categories';
import { Fragment } from "react";
 const CardsCategory = ({GetCategory,sub_category,id}) => {

    useEffect(() => {

        GetCategory(id);
    
      }, [id]);
      console.log(sub_category);
    return (
        <Fragment>
            {
                !sub_category ?<Spinner/> :
                    (
                    <div className='block m-8 p-4 md:flex  justify-around flex-wrap '>
                {sub_category&& sub_category.sub_category.map(sub=>(
                    
                    <>
                        {
                        sub.image?
                        <Card
                     stylee="w-full  md:w-1/3  lg:w-1/4"
                     category={sub.name}
                     des={sub.description}
                     
                      imageSource={`https://banoun-app.herokuapp.com/api/upload/show/${sub.image.filename}`}

                 />:(  <Card
                    stylee="w-full  md:w-1/3  lg:w-1/4"
                    category={sub.name}
                    des={sub.description}
                    
                     imageSource="../images/4.png"

                />)
                       
                        }

                     

                 </>

                ))}
           

           
        </div>
                    )
            }
            
        </Fragment>
    );
};


const mapStateToProps = (state) => ({
    sub_category: state.categories.category
  
  });
  

export default connect(mapStateToProps,{

    GetCategory
  
  })(CardsCategory);
  