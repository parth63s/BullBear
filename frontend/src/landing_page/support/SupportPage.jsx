import React from 'react';
import NavBar from '../NavBar';
import CreateTicket from './CreateTicket';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <>
            <NavBar/>
            <Hero/>
            <CreateTicket/>
            <Footer/>
        </>
     );
}

export default SupportPage;