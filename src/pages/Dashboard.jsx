import React from "react";
import { fetchData } from "../helpers";
import { Form, useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";

//loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default Dashboard;
