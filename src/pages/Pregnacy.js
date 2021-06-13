import React from "react";
import { NavBar, HeaderPregnacy, CardsPregnacy, Footer } from "../components/organism";


const Pregnacy = () => {
    return (
        <>
            <div className='bg-pale-leaf pb-5'>
                <NavBar />
                <HeaderPregnacy />
            </div>
            <CardsPregnacy />
            <Footer />

        </>
    );
};

export default Pregnacy;
