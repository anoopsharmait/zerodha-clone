
import { createRoot } from 'react-dom/client'
import AboutPage from './landing-page/about/AboutPage.jsx'

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './landing-page/home/Homepage.jsx'
import "../public/icons.js";
import SignUp from './landing-page/signup/signUp.jsx';
import SupportPage from './landing-page/support/supportPage.jsx';
import ProductPage from './landing-page/products/productPage.jsx';
import PricingPage from '../src/landing-page/pricing/Pricingpage.jsx';
import Navbar from './landing-page/NavBar.jsx';
import Footer from './landing-page/footer.jsx';

createRoot(document.getElementById('root')).render(
 
<BrowserRouter>
<Navbar/>
  <Routes>
    <Route  path="/" element={<HomePage/>}></Route>
      <Route  path="/signup" element={<SignUp/>}></Route>
      <Route  path="/About" element={<AboutPage/>}></Route>
      <Route  path="/products" element={<ProductPage/>}></Route>
      <Route  path="/pricing" element={<PricingPage/>}></Route>
     <Route  path="/support" element={<SupportPage/>}></Route>

 </Routes>
 <Footer/>
</BrowserRouter>




)
