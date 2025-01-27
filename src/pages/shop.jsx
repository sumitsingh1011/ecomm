import React from 'react';
import Mainhero from '../components/mainpage/mainhero';
import Popular from '../components/popular/popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';


const Shop = () => {
  return (
    <main className="shop-page">
      <Mainhero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
      
    </main>
  );
};

export default Shop;
