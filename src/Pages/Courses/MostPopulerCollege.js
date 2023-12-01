import React from "react";
import "./MostPopulerCollege.css";

const PopulerCollge = () => {
  return (
    <>
      <div className="row main-first-college">
        <div className="col-md-8 first-college">
          <div className="row image-and-buttons">
            <div className=" col-md-5 order-md-1 image-and-head">
              <img
                src={require("../../Assets/Symbiosis_international_university.png")}
                alt=""
                width={80}
              />
              <h4>
                Symbiosis International University <p>Pune, Maharashtra</p>
                <hr />
              </h4>
            </div>
            <div className=" col-md-5 order-md-2 buttons-of-populer-college">
              <button className="apply-now-button">Apply Now</button>
              <button className="counsoult-button">Counsult</button>
              <img
                src={require("../../Assets/bookmark_image.png")}
                alt=""
                className="book-mark-image"
              />
            </div>
          </div>
          <div className=" col-md-12 order-md-3 para-of-colleges">
            <p>
              Symbiosis International University (SIU), based in Pune, offers an
              MBA Entrepreneurship specialisation and is a pioneer in offering
              excellent education with worldwide exposure. It is the best-ranked
              university in the country. This university offers studies at the
              graduate, postgraduate, and diploma levels. Symbiosis
              International Institute provides Distance Learning Education in
              addition to conventional courses.
            </p>
            <p>
              Entrance Exam: SET, SNAP | Fee Structure: Rs 7.8 lakhs (approx) |
              Duration : 2 years
            </p>
          </div>
        </div>
      </div>
   

      {/* --------------------------------end of first college------------------------- */}
      <div className="row main-first-college">
        <div className="col-md-8 first-college">
          <div className="row image-and-buttons">
            <div className=" col-md-5 order-md-1 image-and-head">
              <img
                src={require("../../Assets/Symbiosis_international_university.png")}
                alt=""
                width={80}
              />
              <h4>
                Symbiosis International University <p>Pune, Maharashtra</p>
                <hr />
              </h4>
            </div>
            <div className=" col-md-5 order-md-2 buttons-of-populer-college">
              <button className="apply-now-button">Apply Now</button>
              <button className="counsoult-button">Counsult</button>
              <img
                src={require("../../Assets/bookmark_image.png")}
                alt=""
                className="book-mark-image"
              />
            </div>
          </div>
          <div className=" col-md-12 order-md-3 para-of-colleges">
            <p>
              Symbiosis International University (SIU), based in Pune, offers an
              MBA Entrepreneurship specialisation and is a pioneer in offering
              excellent education with worldwide exposure. It is the best-ranked
              university in the country. This university offers studies at the
              graduate, postgraduate, and diploma levels. Symbiosis
              International Institute provides Distance Learning Education in
              addition to conventional courses.
            </p>
            <p>
              Entrance Exam: SET, SNAP | Fee Structure: Rs 7.8 lakhs (approx) |
              Duration : 2 years
            </p>
          </div>
        </div>
      </div>

      {/* end of second college------------------------ */}

      <div className="row main-first-college">
        <div className="col-md-8 first-college">
          <div className="row image-and-buttons">
            <div className=" col-md-5 order-md-1 image-and-head">
              <img
                src={require("../../Assets/Symbiosis_international_university.png")}
                alt=""
                width={80}
              />
              <h4>
                Symbiosis International University <p>Pune, Maharashtra</p>
                <hr />
              </h4>
            </div>
            <div className=" col-md-5 order-md-2 buttons-of-populer-college">
              <button className="apply-now-button">Apply Now</button>
              <button className="counsoult-button">Counsult</button>
              <img
                src={require("../../Assets/bookmark_image.png")}
                alt=""
                className="book-mark-image"
              />
            </div>
          </div>
          <div className=" col-md-12 order-md-3 para-of-colleges">
            <p>
              Symbiosis International University (SIU), based in Pune, offers an
              MBA Entrepreneurship specialisation and is a pioneer in offering
              excellent education with worldwide exposure. It is the best-ranked
              university in the country. This university offers studies at the
              graduate, postgraduate, and diploma levels. Symbiosis
              International Institute provides Distance Learning Education in
              addition to conventional courses.
            </p>
            <p>
              Entrance Exam: SET, SNAP | Fee Structure: Rs 7.8 lakhs (approx) |
              Duration : 2 years
            </p>
          </div>
        </div>
      </div>

      {/* end of thrird college----------------------- */}

      <div className="row main-buttons-to-see-next-populer-college">
        <div className="col-md-8 buttons-to-see-next-populer-college">
          <button>prev</button>
          <button>01</button>
          <button>02</button>
          <button>03</button>
          <button>Next</button>
        </div>
      </div>
      
    </>
  );
};

export default PopulerCollge;
