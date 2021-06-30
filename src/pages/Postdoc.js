import React, { useEffect } from "react";
import { Post } from "../components/molecules";
import PostForm from "../components/molecules/PostForm";
import { connect } from "react-redux";
import { GetPosts, DeletePost } from "../redux/actions/posts";
import { Add_Like, Remove_Like } from "./../redux/actions/posts";

const Postdoc = ({
  GetPosts,
  posts,
  specialist,
  Add_Like,
  DeletePost,
  Remove_Like,
  userauth,
}) => {
  useEffect(() => {
    GetPosts();
  }, [GetPosts]);

  return (
    <div className=" space-y-8">
      {sessionStorage.getItem("token") && specialist && <PostForm />}
      <div className="lg:flex">
        {posts &&
          posts.map((item) => (
            <Post
              title={item.title}
              name={item.Specialist?.username}
              specID={item.Specialist?._id}
              text={item.text}
              id={item._id}
              likes={item?.likes?.length}
              AddLike={Add_Like}
              RemoveLike={Remove_Like}
              auth={specialist?._id}
              userauth={userauth}
              imgsrc={
                item.Specialist?.imagepost
                  ? `https://banoun-app.herokuapp.com/api/upload/show/${item.Specialist.image?.filename}`
                  : item.Specialist?.gender == "female"
                  ? "images/docgirl.png"
                  : "images/docboy.png"
              }
              DeletePost={DeletePost}
            />
          ))}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  specialist: state.specialist.specialist_auth,
  userauth: state.userProfile.user,
});

export default connect(mapStateToProps, {
  GetPosts,
  Add_Like,
  DeletePost,
  Remove_Like,
})(Postdoc);
