import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Signup from "../Components/Authtication/Signup/Signup";
import Login from "../Components/Authtication/Login/Login";
import Forget from "../Components/Authtication/Forget/Forget";
import Otp from "../Components/Authtication/Otp/Otp";
import NewPassword from "../Components/Authtication/NewPassword/NewPassword";
import Thanks from "../Components/Authtication/Thanks/Thanks";
import Collages from "../Pages/Collage/Collages";
import Courses from "../Pages/Courses/Courses";
import About from "../Pages/AboutUs/About";
import Exam from "../Pages/Exam/Exam";
import CollageList from "../Pages/CollageList/CollageList";
import ContactUs from "../Pages/ContactUs/ContactUs";
import LatestNews from "../Pages/LatestNews/LatestNews";
import Mainredirect from "../Pages/LatestNews/redirectFolder/Mainredirect"
import Blog from "../Pages/Blog/Blog";
import BlogRedirect from "../Pages/Blog/BlogRedirectFolder/BlogRedirect";
import Articles from "../Pages/Articles/Articles";
import ArticleRedirect from "../Pages/Articles/ArticleRedirect/ArticleRedirect";
import Rating from "../Pages/Collage/SmallPages/Rating";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forget" element={<Forget />}></Route>
        <Route path="/Otp" element={<Otp />}></Route>
        <Route path="/Newpassword" element={<NewPassword />}></Route>
        <Route path="/Thanks" element={<Thanks />}></Route>
        <Route path="/Thanks" element={<Thanks />}></Route>
        <Route path="/collage" element={<Collages />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/latestnews" element={<LatestNews />}></Route>
        <Route path="/redirectfolder" element={<Mainredirect />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/allblogs" element={<BlogRedirect />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/allarticle" element={<ArticleRedirect />}></Route>
        <Route path="/collagelist" element={<CollageList />}></Route>
        <Route path="/ContactUS" element={<ContactUs />}></Route>
        <Route path="/LatestNews" element={<LatestNews />}></Route>
        <Route path="/redirectFolder" element={<Mainredirect />}></Route>
        <Route path="/rating" element={<Rating />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
