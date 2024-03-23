import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";

//loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>dash</h1>
      <h2>{userName}</h2>
    </div>
  );
};

export default Dashboard;
