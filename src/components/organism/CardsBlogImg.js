import React, { useEffect } from "react";
import { CardBlogImg } from "../atoms";
import { CardBlog } from "../atoms";

import { connect } from "react-redux";
import {
  GetPosts,
  DeletePost,
  Remove_Like,
  Add_Like,
} from "../../redux/actions/posts";

const CardsBlogImg = ({
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
  console.log(specialist);
  return (
    <>
      <div className=" mt-12 mb-10 m-0  flex flex-wrap justify-center">
        <div
          className="flex flex-wrap justify-center "
          style={{ margin: "0px" }}
        >
          {posts &&
            posts.map((item) =>
              item?.imagepost ? (
                <CardBlogImg
                  blogtitle={item.title}
                  Name={item.Specialist?.username}
                  specID={item.Specialist?._id}
                  content={item.text}
                  id={item._id}
                  likes={item?.likes?.length}
                  AddLike={Add_Like}
                  RemoveLike={Remove_Like}
                  specid={item.Specialist._id}
                  auth={specialist?._id}
                  userauth={userauth}
                  DeletePost={DeletePost}
                  imageURL={
                    item.Specialist?.image
                      ? `https://banoun-app.herokuapp.com/api/upload/show/${item.Specialist.image?.filename}`
                      : item.Specialist?.gender == "female"
                      ? "images/docgirl.png"
                      : "images/docboy.png"
                  }
                  imageSrc={`https://banoun-app.herokuapp.com/api/upload/show/${item?.imagepost?.filename}`}
                  DeletePost={DeletePost}
                  time={item.data}
                />
              ) : (
                <CardBlog
                  blogtitle={item.title}
                  imageURL={
                    item.Specialist?.image
                      ? `https://banoun-app.herokuapp.com/api/upload/show/${item.Specialist.image?.filename}`
                      : item.Specialist?.gender == "female"
                      ? "images/docgirl.png"
                      : "images/docboy.png"
                  }
                  Name={item.Specialist?.username}
                  time={item.data}
                  content={item.text}
                  id={item._id}
                  likes={item?.likes?.length}
                  AddLike={Add_Like}
                  RemoveLike={Remove_Like}
                  auth={specialist?._id}
                  userauth={userauth}
                  specid={item.Specialist._id}
                  DeletePost={DeletePost}
                />
              )
            )}
          {/* <div>
            <CardBlogImg
              blogtitle="مابعد الولاده"
              imageURL="images/1-business-woman-removebg-preview 2.png"
              Name="ليلي سمير"
              time="19 يونيو الساعه 12:32ص"
              content="في نهاية كل دورة ، يستيقظ الأطفال حديثي الولادة لبعض الوقت.
        عندما يستيقظون ، قد يصيحون أو يبكون. إذا "
              imageSrc="images/Baby-sleeping-positions-questions-mom-with-newborn-baby-frequently-ask.jpg"
            />
          </div> */}
        </div>
      </div>
    </>
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
})(CardsBlogImg);
