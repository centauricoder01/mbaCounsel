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
import Mainredirect from "../Pages/LatestNews/redirectFolder/Mainredirect";
import Blog from "../Pages/Blog/Blog";
import BlogRedirect from "../Pages/Blog/BlogRedirectFolder/BlogRedirect";
import Articles from "../Pages/Articles/Articles";
import ArticleRedirect from "../Pages/Articles/ArticleRedirect/ArticleRedirect";
import Rating from "../Pages/Collage/SmallPages/Rating";
import Pagenotfound from "../Components/PageNotFound/Pagenotfound";

// Here we have route of dashboard

import AddCollege from "../Pages/College-backend/AddCollege/AddCollege";
import ViewCollege from "../Pages/College-backend/ViewCollege/ViewCollege";
import AddCity from "../Pages/Master-backend/AddCity/AddCity";
import AddState from "../Pages/Master-backend/AddState/AddState";
import AddSpecialization from "../Pages/Master-backend/AddSpecialization/AddSpecialization";
import AddEntranceExam from "../Pages/Master-backend/AddEntranceExam/AddEntranceExam";
import AddCourse from "../Pages/Master-backend/AddCourse/AddCourse";
import AddCollegeType from "../Pages/Master-backend/AddCollegeType/AddCollegeType";
import AddAffiliation from "../Pages/Master-backend/AddAffiliation/AddAffiliation";
import AddAccreditation from "../Pages/Master-backend/AddAccreditation/AddAccreditation";
import Logindash from "../Pages/Authtication-backend/Login";
import Dashboard from "../Pages/Dashboard-backend/Dashboard";
import AddBanner from "../Pages/Home-backend/AddBanner/AddBanner";
import AddBannerAds from "../Pages/Home-backend/AddBannerAds/AddBannerAds";
import AddEvents from "../Pages/Home-backend/AddEvents/AddEvents";
import AddLatestNews from "../Pages/AddNews-backend/AddLatestNews";
import AddLatestNotification from "../Pages/Home-backend/AddLatestNotification/AddLatestNotification";
import AddServices from "../Pages/Home-backend/AddServices/AddServices";
import AddTestimonials from "../Pages/Home-backend/AddTestimonials/AddTestimonials";
import EditCollege from "../Pages/College-backend/EditCollege/EditCollege";
import AddExam from "../Pages/Exam-backend/AddExam";
import ViewExam from "../Pages/Exam-backend/ViewExam";
import EditExam from "../Pages/Exam-backend/EditExam";
import ViewLatestNews from "../Pages/AddNews-backend/ViewLatestNews";
import AddDetailedCourse from "../Pages/Courses-backend/AddCourses";
import ViewDetailedCourse from "../Pages/Courses-backend/ViewCouses";
import NewCategory from "../Pages/Master-backend/AddNewsCategory/NewCategory";
import AddArticle from "../Pages/Article-backend/AddArticle";
import ViewArticle from "../Pages/Article-backend/ViewArticle";
import UserLoginDetails from "../Pages/UserLoginDetails-backend/UserLoginDetails";
import AdminLogin from "../Pages/Admin-login/AdminLogin";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forget" element={<Forget />}></Route>
        <Route path="/verifyemail" element={<Otp />}></Route>
        <Route path="/Newpassword" element={<NewPassword />}></Route>
        <Route path="/Thanks" element={<Thanks />}></Route>
        <Route path="/college/:id" element={<Collages />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/exam/:id" element={<Exam />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/latestnews" element={<LatestNews />}></Route>
        <Route path="/redirectfolder" element={<Mainredirect />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/allblogs" element={<BlogRedirect />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/allarticle" element={<ArticleRedirect />}></Route>
        <Route path="/collegelist" element={<CollageList />}></Route>
        <Route path="/rating" element={<Rating />}></Route>

        {/************ HERE IS THE ROUTES OF THE DASHBOARD *************/}

        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add collage list */}
        <Route path="/addcollege" element={<AddCollege />} />
        <Route path="/viewcollege" element={<ViewCollege />} />
        <Route path="/editcollege/:id" element={<EditCollege />} />

        {/* HOME PAGE ROUTE */}
        <Route path="/addbanner" element={<AddBanner />} />
        <Route path="/addadsbanner" element={<AddBannerAds />} />
        <Route path="/addevents" element={<AddEvents />} />
        <Route
          path="/addlatestnotification"
          element={<AddLatestNotification />}
        />
        <Route path="/addservices" element={<AddServices />} />
        <Route path="/addtestimonials" element={<AddTestimonials />} />

        {/* MASTER BRANCH */}
        <Route path="/addcity" element={<AddCity />} />
        <Route path="/addstate" element={<AddState />} />
        <Route path="/addspecialization" element={<AddSpecialization />} />
        <Route path="/addentranceexam" element={<AddEntranceExam />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/addcollegetype" element={<AddCollegeType />} />
        <Route path="/addaffiliation" element={<AddAffiliation />} />
        <Route path="/addaccreditation" element={<AddAccreditation />} />
        <Route path="/addnewcategory" element={<NewCategory />} />
        {/* Login Page  */}
        <Route path="/dashlogin" element={<Logindash />} />
        <Route path="*" element={<Login />} />

        {/* EXAM PAGE START FROM HERE */}
        <Route path="/addexam" element={<AddExam />} />
        <Route path="/viewexam" element={<ViewExam />} />
        <Route path="/editexam/:id" element={<EditExam />} />

        {/* NEWS PAGE START FROM HERE  */}
        <Route path="/addlatestnews" element={<AddLatestNews />} />
        <Route path="/viewlatestnews" element={<ViewLatestNews />} />
        <Route path="/editlatestnews/:id" element={<AddLatestNews />} />

        {/* COURSES SECTION START FROM HERE  */}
        <Route path="/addcoursedetail" element={<AddDetailedCourse />} />
        <Route path="/viewallcourses" element={<ViewDetailedCourse />} />
        <Route path="/editcoursedetail/:id" element={<AddDetailedCourse />} />

        {/* ARTICLE PAGE ROUTES START FROM HERE  */}
        <Route path="/addarticle" element={<AddArticle />} />
        <Route path="/viewarticle" element={<ViewArticle />} />
        <Route path="/editarticle/:id" element={<AddArticle />} />

        {/* ALL USER LOGIN DETAILS */}
        <Route path="/logindetails" element={<UserLoginDetails />} />

        {/* DEFAULT PATH OF FILE NOT FOUND  */}
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
