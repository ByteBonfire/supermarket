import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Home from "../view/home/Home";
import Navbar from "../Components/navbar/Navbar";
import SubHeader from "../Components/subHeader/SubHeader";
import Login from "../Components/login/Login";
import Signup from "../Components/signup/Signup";
import Contact from "../Components/contact/contact";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
