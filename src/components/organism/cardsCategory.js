import React, { useEffect, useState } from "react";
import { Card } from "../atoms";
import { connect } from "react-redux";
import Spinner from "../atoms/spinner";
import { GetCategory } from ".././../redux/actions/categories";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const CardsCategory = ({  sub_category, id }) => {

  return (
    <Fragment>

      {!sub_category ? (
        <Spinner />
      ) : (
        <div className="block m-8 p-4 md:flex  justify-around flex-wrap ">
          {!sub_category.sub_category ? (
            <Spinner />
          ) : (
            sub_category.sub_category.map((sub) => (
              <>
                {sub.image ? (
                  <Card
                    // key={sub._id}
                    stylee="w-full  md:w-1/3  lg:w-1/4"
                    category={sub.name}
                    des={sub.description}
                    imageSource={`https://banoun-app.herokuapp.com/api/upload/show/${sub.image.filename}`}
                    link={`/sub/${sub_category._id}/${sub._id}`}
                  />
                ) : (
                  <Card
                    key={sub._id}
                    stylee="w-full  md:w-1/3  lg:w-1/4"
                    category={sub.name}
                    des={sub.description}
                    imageSource="../images/4.png"
                    link={`/sub/${sub_category._id}/${sub._id}`}
                    sub_category={sub_category._id}
                    sub_id={sub._id}
                  />
                )}
              </>
            ))
          )}
        </div>
      )}
    </Fragment>
  );
};

export default CardsCategory