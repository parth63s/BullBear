import React from 'react';
import NavBar from '../NavBar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Footer from '../Footer';

function ProductsPage() {
    return ( 
        <>
            <NavBar/>
            <Hero/>
            <LeftSection/>
            <RightSection/>
            <Footer/>
        </>
     );
}

export default ProductsPage;