import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Home from "../view/home/Home";
import Navbar from "../Components/navbar/Navbar";
import SubHeader from "../Components/subHeader/SubHeader";
import Login from "../Components/login/Login";
import Signup from "../Components/signup/Signup";
import ContactUs from "../Components/contactUs/ContactUs";
import AdvertiseOffer from "../view/advertiseOffer/AdvertiseOffer";
import AboutUS from "../Components/aboutUS/AboutUS";
import ShortCodes from "../Components/shortCodes/ShortCodes";
import FAQ from "../Components/faq/FAQ";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/advertiseoffer" element={<AdvertiseOffer />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/shortcodes" element={<ShortCodes />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
