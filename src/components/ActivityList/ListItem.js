import React from "react";
import "./ListItem.css";
import { GoDesktopDownload } from "react-icons/go";

const ListItem = () => {
  return (
    <div className="itemContainer">
      <div>
        <div className="item-title">DOGE/CAD</div>
        <div className="item-date">2021/08/05 00:36:45</div>
        <div className="item-description">Average Price (CAD)</div>
        <div className="item-price">$48500.0</div>
      </div>
      <div className="item-badge-buy">
        <p>Buy</p>
      </div>
      <div className="middleContainer">
        <div className="item-description">Order Price (CAD)</div>
        <div className="item-price">$12345.12</div>
      </div>
      <div className="middleContainer">
        <div className="item-description">Executed Amount (BTC)</div>
        <div className="item-price">1234567.12345678</div>
      </div>
      <div className="middleContainer">
        <div className="item-description">Executed Amount (BTC)</div>
        <div className="item-price">1234567.12345678</div>
      </div>
      <div className="item-download">
        <div className="download-innerContainer">
          <button className="download-logo">
            <GoDesktopDownload size={22} />
          </button>
          <div>Trade Confirmation</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
