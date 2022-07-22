import React, { useState } from "react";
import "./UserActivity.css";
import { paginateFunction } from "../Redux/userActivity-reducer";

const UserActivity = ({ buying, selling, onSetData, userData }) => {
  const [isBuySelected, setIsBuySelected] = useState(false);
  const [isSellSelected, setIsSellSelected] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const pagedBuyingData = paginateFunction(buying);
  const pagedSellingData = paginateFunction(selling);

  return (
    <section className="container">
      <button
        className={`button ${isBuySelected ? "button-active" : null}`}
        onClick={() => {
          onSetData(pagedBuyingData);
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
          onSetData(pagedSellingData);
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
          onSetData(userData);
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
