import "./Menu.css";
import { Link } from "react-router-dom";
import { Collapse } from "antd";

const { Panel } = Collapse;
const Menu = () => {
  return (
    <>
      <Collapse className="dropdownCategory">
        {/* DASHBOARD LINK  */}
        <Link to={"/dashboard"}>
          <p className="dropdownCategory-para">Dashboard</p>
        </Link>
        <hr />
        {/* HOME PAGE LINK */}
        <Panel header="Home Resources" key="1">
          <Link to={"/addbanner"} className="categoryLink">
            <p>Banner</p>
          </Link>
          <Link to={"/addlatestnotification"} className="categoryLink">
            <p>Latest Notification</p>
          </Link>

          <Link to={"/addevents"} className="categoryLink">
            <p>Add Event</p>
          </Link>

          <Link to={"/addadsbanner"} className="categoryLink">
            <p>Banner Ads</p>
          </Link>
          <Link to={"/addservices"} className="categoryLink">
            <p>Add Services</p>
          </Link>
          <Link to={"/addtestimonials"} className="categoryLink">
            <p>Testimonial</p>
          </Link>
        </Panel>
        {/* ADD COLLEGE LINK */}
        <Panel header="Add college" key="2">
          <Link to="/viewcollege" className="categoryLink">
            <p> View Collage</p>
          </Link>
          <Link to="/addcollege" className="categoryLink">
            <p>Add Collage</p>
          </Link>
        </Panel>
        {/* ADD EXAM LINK */}
        <Panel header="Add Exams" key="3">
          <Link to="/addexam" className="categoryLink">
            <p> Add Exam</p>
          </Link>
          <Link to="/viewexam" className="categoryLink">
            <p>View Exams</p>
          </Link>
        </Panel>
        {/* ADD ATTRIBUTE LINK */}
        <Panel header="Add Attribute" key="4">
          <Link to="/addstate" className="categoryLink">
            <p>Add State</p>
          </Link>
          <Link to="/addcity" className="categoryLink">
            <p>Add City</p>
          </Link>
          <Link to="/addcourse" className="categoryLink">
            <p>Add Course</p>
          </Link>
          <Link to="/addspecialization" className="categoryLink">
            <p>Add Specialization</p>
          </Link>
          <Link to="/addcollegetype" className="categoryLink">
            <p>Add College Type</p>
          </Link>
          <Link to="/addaffiliation" className="categoryLink">
            <p>Add Affiliation</p>
          </Link>
          <Link to="/addaccreditation" className="categoryLink">
            <p>Add Accreditation</p>
          </Link>
          <Link to="/addentranceexam" className="categoryLink">
            <p>Add Entrance Exam</p>
          </Link>
          <Link to="/addnewcategory" className="categoryLink">
            <p>Add News Categorys</p>
          </Link>
        </Panel>
        {/* ADD REVIEWS  */}
        <Panel header=" Add reviews" key="5">
          <Link to="/dashboard" className="categoryLink">
            <p>View Reviews</p>
          </Link>
          <Link to="/dashboard" className="categoryLink">
            <p>Add Review</p>
          </Link>
        </Panel>
        {/* ADD NOTIFICATION LINKS */}
        <Panel header="Add notification" key="6">
          <Link to="/dashboard" className="categoryLink">
            <p>Add Notification</p>
          </Link>
        </Panel>
        {/* ADD NEWS  */}
        <Panel header="Add News" key="7">
          <Link to={"/addlatestnews"} className="categoryLink">
            <p>Add News</p>
          </Link>
          <Link to={"/viewlatestnews"} className="categoryLink">
            <p>Views News</p>
          </Link>
        </Panel>
        <Panel header="Add Articles" key="10">
          <Link to={"/addarticle"} className="categoryLink">
            <p>Add Article</p>
          </Link>
          <Link to={"/viewarticle"} className="categoryLink">
            <p>Views Article</p>
          </Link>
        </Panel>
        {/* CHECK LOGIN DETAILS */}
        <Panel header="Check Login Details" key="8">
          <Link to="/logindetails" className="categoryLink">
            <p>Check User details</p>
          </Link>
        </Panel>
        {/* ADD DETAILED COURSE LINKS */}
        <Panel header="Add Detailed Course" key="9">
          <Link to="/addcoursedetail" className="categoryLink">
            <p>Add Detailed Course</p>
          </Link>
          <Link to="/viewallcourses" className="categoryLink">
            <p>View Course</p>
          </Link>
        </Panel>
        {/* SUPPORT SECTION */}
        <p className="dropdownCategory-para">Support</p>
        <hr />
      </Collapse>
    </>
  );
};

export default Menu;
