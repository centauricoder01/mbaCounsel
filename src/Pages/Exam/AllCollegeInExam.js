import React from "react";

import Card from "react-bootstrap/Card";
import "./AllCollegeInExam.css";
import { IoLocationOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { FaHandHoldingDollar } from "react-icons/fa6";

const AllCollegeInExam = ({ image, head , location ,money , avgPackage }) => {
  return (
    <>
     

      <Card className="exam-card"  style={{ width: "14rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> {head}</Card.Title>
          <Card.Text> <IoLocationOutline /> {location}</Card.Text>
          <Card.Text> <GiMoneyStack /> {money}</Card.Text>
          <Card.Text> <FaHandHoldingDollar /> {avgPackage}</Card.Text>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default AllCollegeInExam;
