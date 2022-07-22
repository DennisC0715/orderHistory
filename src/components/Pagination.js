import React, { useState, useEffect } from "react";
import "./Pagination.css";
import arrowLeft from "../logo/arrowLeft.svg";
import arrowRight from "../logo/arrowRight.svg";

const Pagination = ({ previousPage, userData, page, handlePage, nextPage }) => {
  const [showedPage, setShowedPage] = useState([]);
  return (
    <section className="pagination-section">
      <div className="button-container">
        <button className="pageButton" onClick={previousPage}>
          <img src={arrowLeft} alt="arrowLeft" />
        </button>
        {userData.map((item, index) => {
          return (
            <button
              className={`pageButton ${
                index === page ? "active-pageButton" : null
              }`}
              key={index}
              onClick={() => {
                handlePage(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="pageButton" onClick={nextPage}>
          <img src={arrowRight} alt="arrowLeft" />
        </button>
      </div>
    </section>
  );
};

export default Pagination;
