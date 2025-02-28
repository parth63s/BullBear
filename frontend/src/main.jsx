import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage.jsx'
import './index.css'
import SignUp from './landing_page/signup/SignIn.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductsPage from "./landing_page/products/ProductsPage.jsx";
import NavBar from "./landing_page/NavBar";
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound.jsx';
import SignPage from './landing_page/signup/SignPage.jsx';


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<SignPage s={0}/>}></Route>
      <Route path="/signin" element={<SignPage s={1}/>}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductsPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>

    <Footer/>
  </BrowserRouter>
)
