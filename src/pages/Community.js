import React from "react";
import NavBar from "../components/organism/NavBar";
import { Footer } from "../components/organism/footer";
import HeaderCommunity from "../components/organism/HeaderCommunity";
import { CardsBlog } from "../components/organism/CardsBlog";
import CardsBlogImg from "../components/organism/CardsBlogImg";
import { connect } from "react-redux";

const Community = ({ specialist }) => {
  return (
    <div style={{minHeight:"100vh"}} >
      <div>
        {sessionStorage.getItem("token") && specialist && <HeaderCommunity />}
        <CardsBlogImg />

        {/* <CardsBlog /> */}

        {/* <Footer/> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  specialist: state.specialist.specialist_auth,
});

export default connect(mapStateToProps, {})(Community);
