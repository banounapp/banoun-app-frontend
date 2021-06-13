import React from 'react';
import {
  NavBar,
  Footer,
  HeaderArtcles,
  CardsBook,
  CardsArticles,
} from '../components/organism';

const BooksArticles = () => {
  return (
    <>
      <div className='bg-pale-leaf pb-5'>
        <NavBar />
        <HeaderArtcles />
      </div>
      <CardsBook />
      <CardsArticles />
      <Footer />
    </>
  );
};

export default BooksArticles;
