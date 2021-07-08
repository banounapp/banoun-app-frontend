import React, { useEffect, useState } from "react";
import { Footer } from "../components/organism";
import HeaderArtcles from "../components/organism/headerArticles";
import CardsArticles from "../components/organism/cardArticles";
import CardsBook from "../components/organism/cardbook";
import NavBar from "../components/organism/NavBar";
import { connect } from "react-redux";
import { GetSubCategory } from "../redux/actions/categories";
import Load from './../components/molecules/load';
import { useScrollToTop } from './../customHooks/window';

const BooksArticles = ({ subCategory, GetSubCategory, match, props }) => {
  const [isLoading, setisLoading] = useState(true);

  useScrollToTop();
  useEffect(() => {
    GetSubCategory(match.params.catId, match.params.subId);
    setisLoading(false);
  }, [match.params.catId, match.params.subId]);
  return (
    <>
     
      {isLoading ? (
        <Load />
      ) : (
        <div style={{ minHeight: "100vh" }}>
          <div className="bg-white ">
            {/* {} */}
            <HeaderArtcles />
          </div>
          <CardsBook />
          <CardsArticles />
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  subCategory: state.categories.subCategory,
});

export default connect(mapStateToProps, { GetSubCategory })(BooksArticles);
