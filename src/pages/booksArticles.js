import React, { useEffect } from "react";
import { Footer } from "../components/organism";
import HeaderArtcles from "../components/organism/headerArticles";
import CardsArticles from "../components/organism/cardArticles";
import CardsBook from "../components/organism/cardbook";
import NavBar from "../components/organism/NavBar";
import { connect } from "react-redux";
import { GetSubCategory } from "../redux/actions/categories";

const BooksArticles = ({ subCategory, GetSubCategory, match, props }) => {
  useEffect(() => {
    GetSubCategory(match.params.catId, match.params.subId);
  }, [match.params.catId, match.params.subId]);
  return (
    <>
      <div className="bg-white ">
        {/* {} */}
        <HeaderArtcles />
      </div>
      <CardsBook />
      <CardsArticles />
      {/* <Footer /> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  subCategory: state.categories.subCategory,
});

export default connect(mapStateToProps, { GetSubCategory })(BooksArticles);
