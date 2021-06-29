import React from "react";
import NavBar from '../components/organism/NavBar';
import HeaderCategory from '../components/organism/headerCategory';
// import {   Footer } from "../components/organism";
import CardsCategory from '../components/organism/cardsCategory';



const Category = ({match}) => {
    return (
        <>
            <div className='bg-pale-leaf pb-5'>
                <NavBar />
                <HeaderCategory id={match.params.id}/>
            </div>
            <CardsCategory id={match.params.id} />
            {/* <Footer /> */}

        </>
    );
};

export default Category;
