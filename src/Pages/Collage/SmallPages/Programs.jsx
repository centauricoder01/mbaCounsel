import React from "react";
import { ImLocation } from "react-icons/im";

const Programs = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="main-collage-overview-div">
        <div className="main-collage-left-side-div">
          <div className="main-degree-granting-programme">
            <strong>
              <i>Degree-Granting Programmes</i>
            </strong>
            <ul>
              <li>Doctor of Philosophy (PhD), 5-year full time programme</li>
              <li>
                Master of Business Administration (MBA), 2-year full time
                programme
              </li>
              <li>
                Master of Business Administration (Business
                Analytics),(MBA(BA)), 2-year full time programme
              </li>
              <li>
                Executive Program of Master of Business Administration (MBA),
                1-year full time programme
              </li>
              <li>
                Master of Business Administration (MBA), 2-year weekend
                programme
              </li>
              <li>
                Post Graduate Programme in Public Policy and Management (PGPPM)
              </li>
            </ul>
            <strong>
              <i>Certificate Programs</i>
            </strong>
            <ul>
              <li>N. S. Ramaswamy Pre-doctoral Fellowship (NSR Pre-doc)</li>
              <li> Mahatma Gandhi National Fellowship</li>
            </ul>
          </div>

          <div className="programs-fee-structure">
            <strong>
              <i>Fees Structure</i>
            </strong>
            <table className="my-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col1">PGPM</td>
                  <td className="col2">INR 23,00,000/-</td>
                </tr>
                <tr>
                  <td className="col1">PGPM</td>
                  <td className="col2">INR 23,00,000/-</td>
                </tr>
                <tr>
                  <td className="col1">PGPM</td>
                  <td className="col2">INR 23,00,000/-</td>
                </tr>
                <tr>
                  <td className="col1">PGPM</td>
                  <td className="col2">INR 23,00,000/-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="programs-Scholarship">
            <div>
              <strong>
                <i>Scholarship</i>
              </strong>
              <p>
                PGP students at IIM Bangalore can apply for a range of
                merit-based and need-based scholarships. The following is a list
                of IIM Bangalore scholarships available, along with their
                eligibility requirements and scholarship amount:
              </p>
            </div>
            <table className="my-table">
              <thead>
                <tr>
                  <th>Aditya Birla Scholarship</th>
                  <th>INR 1,75,000/- per student</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col1">OPJEMS Scholarship</td>
                  <td className="col2">INR 1,50,000/- per student</td>
                </tr>
                <tr>
                  <td className="col1">Citi Women’s Leader Award</td>
                  <td className="col2">
                    The top 25% of first-year students are chosen for this
                    award, which is offered during the second year.
                  </td>
                </tr>
                <tr>
                  <td className="col1">
                    Societe Generale Global Solution Centre India Scholarship
                  </td>
                  <td className="col2">
                    Deserving candidates, who are selected from first year
                    applications are given this scholarship. This covers the
                    entire tuition fees completely.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="main-collage-right-side-div">
          <div
            className="collage-similar-collge-div"
            style={{
              border: "1px solid #dbdbdb",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
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

export default Programs;
