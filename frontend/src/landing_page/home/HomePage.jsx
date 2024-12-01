import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Eductions from './Eductions';
import OpenAccount from '../OpenAccount';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Stats from './stats';

function HomePage() {
    return ( 
        <>
            <NavBar/>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Eductions/>
            <OpenAccount/>
            <Footer/>
        </>
     );
}

export default HomePage;