import React, { useState, useEffect } from "react";
import "./Pagination.css";
import arrowLeft from "../logo/arrowLeft.svg";
import arrowRight from "../logo/arrowRight.svg";

const Pagination = ({ previousPage, userData, page, handlePage, nextPage }) => {
  const [currentItems, setCurrentItems] = useState(userData.slice(1, 8));

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 5;
    setCurrentItems(userData.slice(itemOffset, endOffset));
  }, [itemOffset]);

  const next = () => {
    nextPage();
    // setItemOffset(page);
  };
  const prev = () => {
    // setItemOffset(page);
    previousPage();
  };
  return (
    <section className="pagination-section">
      <div className="button-container">
        <button className="pageButton" onClick={prev}>
          <img src={arrowLeft} alt="arrowLeft" />
        </button>
        {currentItems.map((item, index) => {
          return (
            <button
              className={`pageButton ${
                index === page ? "active-pageButton" : null
              }`}
              key={index}
              onClick={() => {
                handlePage(index);
                // setItemOffset(page);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        {itemOffset > 15 ? "" : "..."}
        <button
          className="pageButton"
          onClick={() => {
            handlePage(userData.length - 1);
          }}
        >
          {userData.length}
        </button>
        <button className="pageButton" onClick={next}>
          <img src={arrowRight} alt="arrowLeft" />
        </button>
      </div>
    </section>
  );
};

export default Pagination;
