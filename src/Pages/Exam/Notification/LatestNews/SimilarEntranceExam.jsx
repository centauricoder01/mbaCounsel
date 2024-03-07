import React from "react";
import { Link } from "react-router-dom";
import "../../Exam.css";

const SimilarEntranceExam = () => {
  return (
    <div className="Similar-Entrance-Exam-div">
      <Link>Common Admission Test (CAT)</Link>
      <Link>Mangament Aptitude Test (MAT)</Link>
      <Link>Symboisis National Aptitude Test (SNAP)</Link>
      <Link>Karnataka Managment Aptitude Test (KMAT)</Link>
      <Link>PG Common Entrance Test (PGCET)</Link>
    </div>
  );
};

export default SimilarEntranceExam;
