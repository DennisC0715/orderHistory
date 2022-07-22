import React from "react";
import ListItem from "./ActivityList/ListItem";
import "./ActivityList.css";

const ActivityList = ({ pageData }) => {
  return (
    <div>
      {pageData.map((item, index) => {
        return (
          <section className="listContainer" key={index}>
            <ListItem {...item} />
          </section>
        );
      })}
    </div>
  );
};

export default ActivityList;
