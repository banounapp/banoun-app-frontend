import React, { useState, useEffect } from "react";
import NavBar from "../components/organism/NavBar";
import HeaderCategory from "../components/organism/headerCategory";
// import {   Footer } from "../components/organism";
import CardsCategory from "../components/organism/cardsCategory";
import Load from "./../components/molecules/load";

import { GetCategory } from "../redux/actions/categories";
import { connect } from "react-redux";
import { useScrollToTop } from './../customHooks/window';

const Category = ({ match, GetCategory,sub_category }) => {
    const [isLoading, setisLoading] = useState(true);
    useScrollToTop()
useEffect(() => {
    GetCategory(match.params.id);
    setisLoading(false);

   
  }, [match.params.id]);

 



 

  return (
    <>
      {isLoading ? (
        <Load />
      ) : (
        <div style={{ minHeight: "100vh" }}>
          <div className="pb-5">
            <HeaderCategory id={match.params.id} />
          </div>
          <CardsCategory  sub_category ={sub_category}/>
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  sub_category: state.categories.category,
});

export default connect(mapStateToProps, {
  GetCategory,
})(Category);
