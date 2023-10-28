import React from "react";
import { Collapse } from "antd";

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
  return (
    <>
      <div className="main-collage-faq-div">
        <div className="main-collage-faq-div-strong">
          <strong>
            <i>FAQs</i>
          </strong>
        </div>
        <Collapse items={items} defaultActiveKey={["1"]} />
      </div>
    </>
  );
};

export default Faq;
