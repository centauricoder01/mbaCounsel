import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Signup from "../Components/Authtication/Signup/Signup";
import Login from "../Components/Authtication/Login/Login";
import Forget from "../Components/Authtication/Forget/Forget";
import Otp from "../Components/Authtication/Otp/Otp";
import NewPassword from "../Components/Authtication/NewPassword/NewPassword";
import Thanks from "../Components/Authtication/Thanks/Thanks";
import Collages from "../Pages/CollagePages/Collages";
import UnderConstruction from "../Pages/Construction/UnderConstruction";

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
        <Route path="*" element={<UnderConstruction />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
