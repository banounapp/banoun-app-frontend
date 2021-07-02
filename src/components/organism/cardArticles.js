import React from "react";
import { Card } from "../atoms";
import { connect } from "react-redux";
import Spinner from "../atoms/spinner";

const CardsArticles = ({ articles }) => {
  return (
    <>
      {!articles ? (
        <Spinner />
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-x-4 tracking-wider py-5 px-10 md:px-20 lg:px-20">
          {articles?.articles?.map((item) => (
            <Card
              category={item.title}
              des={item.description}
              imageSource={`https://banoun-app.herokuapp.com/api/upload/show/${item.image?.filename}`}
            />
          ))}
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  articles: state.categories.subCategory,
});

export default connect(mapStateToProps, {})(CardsArticles);
