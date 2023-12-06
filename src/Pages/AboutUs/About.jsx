// import { Footer } from "antd/es/layout/layout";
import Navbar from "../../Components/Navbar/Navbar";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsOfAbout from "./CardsOfAbout";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <img
        src={require("../../Assets/about_us_head.png")}
        className="img-fluid head-image pt-5"
        alt=""
      />
      <div className="containerfluid">
        <div className="row vision-row">
          <div className="col-lg-5 order-lg-1">
            <h1 className="vision-mission-head-tag text-center ">VISION </h1>
            <p>
              We envision a future in India where aspirants and brilliant minds
              in pursuit of their masters are guided to the best colleges and
              educational institutes in India for an MBA which not only
              guarantees a prosperous career but focuses on the overall
              development of their students. We are zealous in bringing to you
              the top MBA colleges in India while guiding you with an elaborate
              walkthrough for each program.{" "}
              <hr style={{ border: "1px solid black" }} />{" "}
              <span style={{ color: "#107E7D", fontWeight: "600" }}>
                {" "}
                Statement{" "}
              </span>{" "}
              : We envision - “To be India’s only dedicated platform creating a
              complete ecosystem of guidance and counseling to MBA aspirants out
              there”
            </p>
          </div>
          <div className="col-lg-5 order-md-2 vision-image">
            <img
              src={require("../../Assets/vision_about_us.png")}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        {/* -------------------------------------------------------------------------------- */}

        <div className="row mission-row">
          <div className="col-lg-5 order-md-2 image-of-mission">
            <img
              src={require("../../Assets/mission_about_us.png")}
              className="img-fluid "
              alt=""
            />
          </div>
          <div className="col-lg-5  order-lg-2 ">
            <h1 className="vision-mission-head-tag mt-5 ">MISSION</h1>
            <p>
              Our mission just embraces what we envision! MBA4me is a dedicated
              knowledge and counseling platform guiding MBA aspirants to choose
              the best from the good colleges that suit the student’s career
              ambitions. The platform acts as a chaperone to those candidates,
              allowing them to gather end-to-end knowledge on the MBA colleges
              in India, trending MBA specialization courses, and even assist
              them with a tailored plan for accommodation, finding an
              internship, financing your education, preparation guidance, and
              much more. <hr style={{ border: "1px solid black" }} />{" "}
              <span style={{ color: "#107E7D", fontWeight: "600" }}>
                {" "}
                Statement{" "}
              </span>
              : Our mission is to “Administer and counsel MBA aspirants
              addressing all their needs with every possibility, guiding them to
              their rightful career choice.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 align-text">
            <h2 style={{ fontStyle: "italic", fontWeight: "800" }}>
              | WE VALUE{" "}
            </h2>
          </div>
        </div>
        <div className="row we-value-parts">
          <div className="col-md-10   all-value-parts ">
            <img src={require("../../Assets/accountability.png")} alt="" />
            <img
              src={require("../../Assets/collab-and-partnership.png")} alt=""  />

            <img src={require("../../Assets/innovation.png")} alt="" />

            <img src={require("../../Assets/result-oriented.png")} alt="" />

            <img src={require("../../Assets/employee-devlopment.png")} alt="" />
          </div>
        </div>
        <div className="row why-mba">
          <div className="col-10">
            <h2 style={{ fontStyle: "italic", fontWeight: "600" }}>
              | WHY MBA COUNCEL
            </h2>
          </div>
          <div className="col-10">
            <p style={{ color: "white", fontStyle: "italic" }}>
              A lot has changed since the pandemic shocked the globe. Today,
              given much to the necessary changes made in the nation’s education
              system, it has become critical to select from the range of
              colleges that fits best for you.{" "}
            </p>
          </div>
          <div className="col-10">
            <p style={{ color: "white" }}>
              Now ask us what MBA COUNCEL has got for you:{" "}
            </p>
          </div>
          <div className="row cards-of-about  ">
            <div className="col-lg-4 order-lg-1 cardNoOne ">
              <CardsOfAbout
                image={require("../../Assets/about_card_1.png")}
                head={"Comprehensive Admission Mentoring Program"}
                para={
                  "With us, your career ambitions are not just yours, it’s our responsibility as well!"
                }
              />
            </div>
            <div className="col-lg-4 order-lg-2 cardNoTwo ">
              <CardsOfAbout
                image={require("../../Assets/about_card_2.png")}
                head={"Tailored Course Guidance"}
                para={
                  "We understand not everyone has the same opportunities and this is what makes us unique. We curate a customized MBA program roadmap tailored only for you."
                }
              />
            </div>
            <div className="col-lg-4 order-lg-3 cardNoThree ">
              <CardsOfAbout
                image={require("../../Assets/about_card_3.png")}
                head={"Founder Collaboration"}
                para={
                  "It is none other than the founder himself, a personality of proven experience, who would be the key person in supervising your final course roadmap"
                }
              />
            </div>
          </div>
        </div>
        <div className="row why-mba-text">
          <div className="col-10  ">
            <h1 style={{ fontStyle: "italic" }}>| WHY MBA</h1>
          </div>
          <div className="col-10 ">
            <p style={{ fontStyle: "italic", fontWeight: "600" }}>
              One of the most crucial questions for MBA aspirants is what it
              entails to do a Master’s in Business Administration. Given the
              radical rise in international and national business standards,
              organizations need more profound and effective management of their
              businesses to beat others in the competition. According to many
              important studies done on understanding the career scope of MBA,
              and as per the conclusions drawn, almost 72% of businesses require
              an MBA specialist to run acute business management. Getting an MBA
              is all about giving your dream of Business Management and a
              wealthy career prospect, a stage to perform.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-10 text-start-main ">
            <h6 style={{ fontWeight: "600", fontSize: "25px" }}>
              Here are the top 5 reasons to choose MBA as our career.
            </h6>
          </div>
        </div>
        <div className="row list-in-whyMBA mb-5">
          <div className="col-10 mt-4">
            <h3 className="pb-4">1. Certify your Skillset with a Degree:</h3>
            <p>
              You know what you do best: may it be Finance Management, Marketing
              Management, HR Management, Operations Management, or any! However,
              entering the professional world might ask you out for an MBA
              degree before applying. Having an MBA degree certifies your skill
              sets to industry standards making you eligible to work with
              businesses.
            </p>
          </div>
          <div className="col-10">
            <h3 className="pb-4">
              2. Improve your Knowledge Base and Entrepreneurship skills:
            </h3>
            <p>
              Although professional skill sets are never developed by reading
              books but rather by implementing your heart and brain to achieve
              each skill. All general and specialized MBAs courses proffered by
              the top MBA schools in India are designed to improve the overall
              knowledge base of the candidates and prepare them to be an
              entrepreneur.
            </p>
          </div>
          <div className="col-10">
            <h3 className="pb-4">
              3. Learn the In and Out of managing a Business:
            </h3>
            <p>
              With an MBA you not only brush up your skills of managing a
              business, but specialized MBAs also give more in-depth knowledge
              and practical training taking you closer to professionals. During
              the entire tenure in a B-School, the students are subject to
              various activities, events, and conferences that unlock all
              necessary information on managing a business.{" "}
            </p>
          </div>
          <div className="col-10">
            <h3 className="pb-4">4. Network with Influencers and Peers</h3>
            <p>
              Studying for your MBA also prepares you to network with
              influencers and engage with your peers in the industry. Each
              course syllabus and program mentors you through a range of
              practical business situations requiring you to connect with
              influencers giving the aspirant a high-end opportunity to connect
              with such personalities and build rapport.{" "}
            </p>
          </div>
          <div className="col-10">
            <h3 className="pb-4"> 5. Our higher and Trusted Career Path</h3>
            <p>
              One of the major reasons freshers and experienced candidates tend
              to choose an MBA is to achieve a higher career path from where
              he/she is now. Post Graduation in any Business Administration
              specialization can yield a great career prospect with quality jobs
              with incremental growth.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
