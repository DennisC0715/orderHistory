import React from "react";
import "./ListItem.css";
import { GoDesktopDownload } from "react-icons/go";

const ListItem = ({
  coinName,
  type,
  date,
  averagePrice,
  orderPrice,
  executedAmount,
  orderAmount,
}) => {
  const badgeStyle = type === "Buy" ? "item-badge-buy" : "item-badge-sell";

  return (
    <div className="itemContainer">
      <div>
        <div className="item-title">{coinName}</div>
        <div className="item-date">{date}</div>
        <div className="item-description">Average Price (CAD)</div>
        <div className="item-price">${averagePrice}</div>
      </div>
      <div className={badgeStyle}>
        <p>{type}</p>
      </div>
      <div className="middleContainer">
        <div className="item-description">Order Price (CAD)</div>
        <div className="item-price">${orderPrice}</div>
      </div>
      <div className="middleContainer">
        <div className="item-description">Executed Amount (BTC)</div>
        <div className="item-price">${executedAmount}</div>
      </div>
      <div className="middleContainer">
        <div className="item-description">Executed Amount (BTC)</div>
        <div className="item-price">${orderAmount}</div>
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
