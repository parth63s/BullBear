import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Eductions from './Eductions';
import OpenAccount from '../OpenAccount';
import Stats from './stats';

function HomePage() {
    return ( 
        <>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Eductions/>
            <OpenAccount/>
        </>
     );
}

export default HomePage;