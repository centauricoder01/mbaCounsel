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
import { ProtectedRoute } from "../Components/ProtectRoute/ProtectRoute";

const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/forget", element: <Forget /> },
  { path: "/verifyemail", element: <Otp /> },
  { path: "/Newpassword", element: <NewPassword /> },
  { path: "/Thanks", element: <Thanks /> },
  { path: "/college/:id", element: <Collages /> },
  { path: "/courses", element: <Courses /> },
  { path: "/about", element: <About /> },
  { path: "/exam/:id", element: <Exam /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/latestnews", element: <LatestNews /> },
  { path: "/redirectfolder", element: <Mainredirect /> },
  { path: "/blogs", element: <Blog /> },
  { path: "/allblogs", element: <BlogRedirect /> },
  { path: "/articles", element: <Articles /> },
  { path: "/allarticle", element: <ArticleRedirect /> },
  { path: "/collegelist", element: <CollageList /> },
  { path: "/rating", element: <Rating /> },
  { path: "/dashlogin", element: <Logindash /> },
];

const protectedRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/addcollege", element: <AddCollege /> },
  { path: "/viewcollege", element: <ViewCollege /> },
  { path: "/editcollege/:id", element: <EditCollege /> },
  { path: "/addbanner", element: <AddBanner /> },
  { path: "/addadsbanner", element: <AddBannerAds /> },
  { path: "/addevents", element: <AddEvents /> },
  { path: "/addlatestnotification", element: <AddLatestNotification /> },
  { path: "/addservices", element: <AddServices /> },
  { path: "/addtestimonials", element: <AddTestimonials /> },
  { path: "/addcity", element: <AddCity /> },
  { path: "/addstate", element: <AddState /> },
  { path: "/addspecialization", element: <AddSpecialization /> },
  { path: "/addentranceexam", element: <AddEntranceExam /> },
  { path: "/addcourse", element: <AddCourse /> },
  { path: "/addcollegetype", element: <AddCollegeType /> },
  { path: "/addaffiliation", element: <AddAffiliation /> },
  { path: "/addaccreditation", element: <AddAccreditation /> },
  { path: "/addnewcategory", element: <NewCategory /> },
  { path: "/addexam", element: <AddExam /> },
  { path: "/viewexam", element: <ViewExam /> },
  { path: "/editexam/:id", element: <EditExam /> },
  { path: "/addlatestnews", element: <AddLatestNews /> },
  { path: "/viewlatestnews", element: <ViewLatestNews /> },
  { path: "/editlatestnews/:id", element: <AddLatestNews /> },
  { path: "/addcoursedetail", element: <AddDetailedCourse /> },
  { path: "/viewallcourses", element: <ViewDetailedCourse /> },
  { path: "/editcoursedetail/:id", element: <AddDetailedCourse /> },
  { path: "/addarticle", element: <AddArticle /> },
  { path: "/viewarticle", element: <ViewArticle /> },
  { path: "/logindetails", element: <UserLoginDetails /> },
];

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        {publicRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
        {protectedRoutes.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
