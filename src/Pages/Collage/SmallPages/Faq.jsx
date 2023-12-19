import React, { useState } from "react";
import { Collapse } from "antd";
import { ImLocation } from "react-icons/im";
import { Button, Modal } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "Are there any scholarships available at IIM Bangalore?",
    children: (
      <p>
        Yes, IIM Bangalore offers various scholarships on tuition fees based on
        the merit of the student such as Aditya Birla Scholarship that provides
        upto Rs 1, 75,000 lakh per student. There is also Societe Generale
        Global Solution Centre India Scholarship that provides deserving
        candidates, who are selected from first year applications which covers
        the entire tuition fees completely. Many more scholarships are available
        for students to avail.
      </p>
    ),
  },
  {
    key: "2",
    label:
      "Does IIM Bangalore have good placement statistics for MBA students recently?",
    children: (
      <p>
        Yes, The MBA (PGP) class of 2019-21 achieved a 100% placement rate, with
        435 candidates receiving over 481 job offers during the first two days
        of the interview process. The preponderance of placements were in the
        consulting and product management fields.
      </p>
    ),
  },
  {
    key: "3",
    label: "Are there hostel facilities available on campus at IIM Bangalore? ",
    children: (
      <p>
        Yes, IIM Bangalore features ten hostel buildings, one executive block,
        and executive housing at the Management Development Center with top
        notch facilities for students both boys and girls as well as faculties
        and staff.
      </p>
    ),
  },
  {
    key: "4",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "7",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "8",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "9",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "10",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "11",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "12",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "13",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "14",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const Faq = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="main-collage-overview-div">
        <div className="main-collage-left-side-div">
          <div className="main-collage-faq-div-strong">
            <strong>
              <i style={{ color: "blue" }}>FAQs</i>
            </strong>
            <button onClick={showModal}>Add Faqs</button>
          </div>
          <Collapse items={items} defaultActiveKey={["1"]} />
          <Modal
            title="Ask Question"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </Modal>
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

export default Faq;
