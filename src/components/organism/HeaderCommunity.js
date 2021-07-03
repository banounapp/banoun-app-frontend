import React, { useState } from "react";
import { DropdownCommunity } from "../atoms/dropdowncommunity";
import { AddPost } from "../../redux/actions/posts";
import { connect } from "react-redux";

const HeaderCommunity = ({ AddPost }) => {
  const [text, setText] = useState("");
  const [title, settitle] = useState("");

  const [img_upload, Setimg_upload] = useState("");
  return (
    <div className="w-full md:w-4/5 lg:w-4/5 m-auto rounded-lg mt-16 ">
      <form
        className=" border-2 border-gray-300 h-auto w-full rounded-lg py-7"
        onSubmit={(e) => {
          //   toast({
          //     title: "Post created.",
          //     status: "success",
          //     duration: 2000,
          //     isClosable: true,
          //     position: "top-right",

          //   })
          e.preventDefault();

          AddPost(text, title, img_upload);
          setText("");
          settitle("");
        }}
      >
        <div className=" border-b-2 border-gray-300 p-3 ">
          <input
            className=" mr-10 text-xl  p-5 outline-none focus "
            placeholder="عنوان"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className=" md:flex md:justify-between lg:flex lg:justify-between">
          <div className="flex">
            <img
              src="images/1-business-woman-removebg-preview 2.png "
              className=" rounded-full w-10 h-12 mr-10 mt-5"
            />

            <input
              type="text"
              placeholder="ماذا تريد ان تقول؟"
              className="mr-3 mt-10 text-gray-400 text-xl outline-none focus"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="flex">
            <div class="flex  items-center justify-center bg-grey-lighter  mr-10 md:-mr-80 lg:-mr-80">
              <label class="w-28 flex  items-center  bg-white text-silver-tree rounded-lg  tracking-wide uppercase border border-silver-tree cursor-pointer p-1 ">
                <i className="fas fa-cloud-upload-alt px-2"></i>
                <span class="mt-1 mr-2 text-base leading-normal">
                  {" "}
                  اختر صوره{" "}
                </span>
                <input
                  type="file"
                  class="hidden"
                  name="image "
                  onChange={(e) => Setimg_upload(e)}
                />
              </label>
            </div>
            <input
              type="submit"
              value="نشر"
              className="btn  my-10 bg-silver-tree text-white px-10 rounded-lg p-2 m-2"
            />

            <div className="w-full"> {/* <DropdownCommunity /> */}</div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { AddPost })(HeaderCommunity);
