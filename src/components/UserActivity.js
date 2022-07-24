import React, { useState } from "react";
import "./UserActivity.css";

const UserActivity = ({
  buying,
  selling,
  setData,
  dataBase,
  setCurrentPage,
}) => {
  const [isBuySelected, setIsBuySelected] = useState(false);
  const [isSellSelected, setIsSellSelected] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(true);

  return (
    <section className="container">
      <button
        className={`button ${isBuySelected ? "button-active" : null}`}
        onClick={() => {
          setCurrentPage(1);
          setData(buying);
          setIsBuySelected(true);
          setIsSellSelected(false);
          setIsAllSelected(false);
        }}
      >
        Buy<span className="badge-buy">{buying.length}</span>
      </button>
      <button
        className={`button ${isSellSelected ? "button-active" : null}`}
        onClick={() => {
          setCurrentPage(1);
          setData(selling);
          setIsSellSelected(true);
          setIsAllSelected(false);
          setIsBuySelected(false);
        }}
      >
        Sell
        <span className="badge-sell">{selling.length}</span>
      </button>
      <button
        className={`button ${isAllSelected ? "button-active" : null}`}
        onClick={() => {
          setCurrentPage(1);
          setData(dataBase);
          setIsAllSelected(true);
          setIsBuySelected(false);
          setIsSellSelected(false);
        }}
      >
        All
      </button>
    </section>
  );
};

export default UserActivity;
