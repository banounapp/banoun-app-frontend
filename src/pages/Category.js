import React from "react";
import NavBar from '../components/organism/NavBar';
import HeaderCategory from '../components/organism/headerCategory';
// import {   Footer } from "../components/organism";
import CardsCategory from '../components/organism/cardsCategory';



const Category = ({ match }) => {
    return (
        <>
            <div className='pb-5'>

                <HeaderCategory id={match.params.id} />
            </div>
            <CardsCategory id={match.params.id} />
            {/* <Footer /> */}

        </>
    );
};

export default Category;
