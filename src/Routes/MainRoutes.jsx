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
        <Route path="/collagelist" element={<CollageList />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
