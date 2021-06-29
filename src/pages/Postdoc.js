import React, { useEffect } from "react";
import { Post } from "../components/molecules";
import PostForm from "../components/molecules/PostForm";
import NavBar from "../components/organism/NavBar";
import { connect } from "react-redux";
import { GetPosts } from "../redux/actions/posts";

const Postdoc = ({ GetPosts, posts }) => {
  useEffect(() => {
    GetPosts();
  }, [GetPosts]);

  return (
    <div className="bg-alabaster-500 space-y-8">
      <NavBar />
      {sessionStorage.getItem("token") && <PostForm />}

      <div className="lg:flex">
        {posts &&
          posts.map((item) => (
            <Post
              title={item.title}
              name={item.Specialist.username}
              text={item.text}
              id={item._id}
              imgsrc={
                item.Specialist.image
                  ? `https://banoun-app.herokuapp.com/api/upload/show/${item.Specialist.image?.filename}`
                  : item.Specialist.gender == "female"
                  ? "images/docgirl.png"
                  : "images/docboy.png"
              }
            />
          ))}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, {
  GetPosts,
})(Postdoc);
