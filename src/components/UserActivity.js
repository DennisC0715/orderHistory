import React from "react";
import "./UserActivity.css";

const UserActivity = () => {
  return (
    <section className="container">
      <button className="button">
        Buy<span className="badge-buy">30</span>
      </button>
      <button className="button">
        Sell<span className="badge-sell">30</span>
      </button>
      <button className="button button-active">All</button>
    </section>
  );
};

export default UserActivity;
