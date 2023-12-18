import React from "react";
import { ImLocation } from "react-icons/im";

const Placements = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="main-collage-overview-div">
        <div className="main-collage-left-side-div">
          <div className="main-degree-granting-programme">
            <strong className="main-collage-admission-in-blue">
              <i>Placements</i>
            </strong>
            <p>
              IIM-B is notoriously known for its high rate of placements and its
              ability to shape and produce brilliant professionals that shine in
              every sector and industry.
            </p>

            <p>
              The MBA (PGP) class of 2019-21 achieved a 100% placement rate,
              with 435 candidates receiving over 481 job offers during the first
              two days of the interview process. The preponderance of placements
              were in the consulting and product management fields.
            </p>
            <p>
              The Indian Institute of Management Bangalore is widely considered
              as one of the top business schools in India and Central Asia.
              Aside from providing an excellent learning environment, the
              institute is also well-known for its high ROI. IIM Bangalore's
              flagship MBA programme costs about INR. 23 LPA, with the average
              CTC grabbed by its students frequently exceeding INR. 25 LPA, and
              the highest CTC provided by Bloomberg reaching at INR 80 LPA.
            </p>

            <table className="my-table">
              <thead>
                <tr>
                  <th>
                    <i>Institute</i>
                  </th>
                  <th>
                    <i>Sector</i>
                  </th>
                  <th>
                    <i>2020 Batch</i>
                  </th>
                  <th>
                    <i>2021 Batch</i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col1">IIM Bangalore</td>
                  <td className="col2">Management / Consulting</td>
                  <td className="col2">37%</td>
                  <td className="col2">37.9%</td>
                </tr>
                <tr>
                  <td className="col1">IIM Bangalore</td>
                  <td className="col2">Management / Consulting</td>
                  <td className="col2">37%</td>
                  <td className="col2">37.9%</td>
                </tr>
                <tr>
                  <td className="col1">IIM Bangalore</td>
                  <td className="col2">Management / Consulting</td>
                  <td className="col2">37%</td>
                  <td className="col2">37.9%</td>
                </tr>
                <tr>
                  <td className="col1">IIM Bangalore</td>
                  <td className="col2">Management / Consulting</td>
                  <td className="col2">37%</td>
                  <td className="col2">37.9%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <strong className="main-collage-admission-in-blue">
            <i>Top Recruiter</i>
          </strong>

          <div className="programs-Scholarship">
            <div className="programs-placements-img-div">
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
              <img src={require("../../../Assets/company.png")} alt="company" />
            </div>
          </div>
        </div>
        <div className="main-collage-right-side-div">
          <div className="collage-similar-collge-div">
            <h2>Similar Colleges</h2>
            <hr />
            {arr.map((ele) => (
              <div key={ele}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <img
                    src={require("../../../Assets/similar.png")}
                    alt="siliar"
                    style={{ width: "3rem" }}
                  />
                  <p style={{ marginTop: "0rem", marginBottom: "0rem" }}>
                    SIBM School of Business Management Lorem ipsum dolor sit
                    amet.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "7px",
                    marginTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <ImLocation size={20} />
                    <p style={{ marginTop: "0rem", marginBottom: "0rem" }}>
                      Bangelore
                    </p>
                  </div>
                  <button
                    className="similar-collage-button-div"
                    style={{ backgroundColor: "#2ea44f" }}
                  >
                    Compare
                  </button>
                  <button className="similar-collage-button-div">Apply</button>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div
            className="collage-advertiment"
            style={{
              border: "1px solid #dbdbdb",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <h2>Advertisment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              numquam enim eos ut dicta qui quod temporibus nobis sint tempora.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placements;
