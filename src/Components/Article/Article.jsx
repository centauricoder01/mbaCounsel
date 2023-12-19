import React from "react";
import "./Article.css";
import { Link } from "react-router-dom";

const Article = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="main-article-div">
      <h3>Article</h3>
      <p className="article-div-para-tag">Latest Article</p>
      <div className="all-article-container">
        {arr.map((ele) => (
          <div className="article-div-single-article-div" key={ele}>
            <p>
              <Link to={"/"}>
                <b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, ratione.
                </b>
              </Link>
            </p>
            <p>Dec 13, 2024</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
