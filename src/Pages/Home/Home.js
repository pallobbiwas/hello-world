import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import ScrollItem from '../ScrollItem/ScrollItem';

const Home = () => {
    return (
        <div>
            <ScrollItem></ScrollItem>
            <Banner></Banner>
            <h2 style={{color:"gray",padding:"4px",marginTop:'10px'}}>FEATURED</h2>
            <Featured></Featured>
            <Category></Category>
            
        </div>
    );
};

export default Home;