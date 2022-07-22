import React from "react";
import ListItem from "./ActivityList/ListItem";
import "./ActivityList.css";
import { userActivitiesData } from "../data";

const ActivityList = () => {
  return (
    <section className="listContainer">
      <ListItem />
    </section>
  );
};

export default ActivityList;
