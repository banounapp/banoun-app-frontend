import React from "react";
import NavBar from '../components/organism/NavBar';
import {Footer}  from '../components/organism/footer'
import {HeaderCommunity} from '../components/organism/HeaderCommunity'
import { CardsBlog } from "../components/organism/CardsBlog";
import { CardsBlogImg } from "../components/organism/CardsBlogImg";





const Community = () => {
    return (
        <>
            <div>
                <NavBar />
                <HeaderCommunity/>
                <CardsBlog/>
                <CardsBlogImg/>
                <Footer/>
              
            </div>
            
         

        </>
    );
};

export default Community;
