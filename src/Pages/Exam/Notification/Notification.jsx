import React from "react";
import { Link } from "react-router-dom";
import '../Exam.css'

const Notification = () => {
  let mydate = new Date();
  // Get day, month, and year
  let day = mydate.getDate();
  let month = mydate.getMonth() + 1; // Month starts from 0, so add 1
  let year = mydate.getFullYear();
  // Format day and month with leading zeros if needed
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  // Construct the date string in dd-mm-yyyy format
  let formattedDate = `${day}-${month}-${year}`;
  return (
    <div>
      <Link  className="latest-news-for-exam-page">
        this is first Notification Lorem ipsum dolor sit amet consectetur itae
        aperiam sequidi perspiciatis, quidem deleniti voluptas a? Vitae ipsam
        sit expedita amet quae magni error!
      </Link>
      <p style={{ textAlign: "right" }}>{formattedDate}</p>
    </div>
  );
};

export default Notification;
