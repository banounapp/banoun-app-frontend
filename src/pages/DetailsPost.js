import React, { useEffect } from "react";
import { DetailsPostdoc } from "../components/molecules";
import NavBar from "../components/organism/NavBar";
import { connect } from "react-redux";
import { GetOnePost } from "../redux/actions/posts";
import Login from "./Login";
const DetailsPost = ({ GetOnePost, post, match }) => {

  
  useEffect(() => {
    GetOnePost(match.params.id);
  }, [match.params.id]);

  if((localStorage.token == "null"|| !localStorage.token)){
    alert("you are not authorized please login")
    return (
      <Login></Login>
    )
  }
  return (
    <div className="bg-alabaster-500 space-y-8">
      <div className="lg:flex">
        {post && (
          <DetailsPostdoc
            title={post.title}
            name={post.Specialist.username}
            text={post.text}
            imgsrc={
              post.Specialist.image
                ? `https://banoun-app.herokuapp.com/api/upload/show/${post.Specialist.image?.filename}`
                : post.Specialist.gender == "female"
                ? "images/docgirl.png"
                : "images/docboy.png"
            }
            imagepost={
              post.imagepost &&
              `https://banoun-app.herokuapp.com/api/upload/show/${post.imagepost.filename}`
            }
          />
        )}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.posts.post,
});

export default connect(mapStateToProps, {
  GetOnePost,
})(DetailsPost);
