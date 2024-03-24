import React from "react";
import { fetchData } from "../helpers";
import { useFormAction, useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { object } from "prop-types";
import { toast } from "react-toastify";

//action
export const createAccountAction = async ({ request }) => {
  // useFormAction();
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  //some logs
  // console.log("data", data);
  // console.log("request", request);
  // console.log("data.userNAme", data.userName);
  // console.log('data.get("userName")', data.get("userName"));

  //second way to get data//////////////////
  // console.log("data", data);
  // console.log("fromEntries", formData);

  //second way to save data
  // localStorage.setItem("userName", data.get("userName"));
  try {
    localStorage.setItem("userName", formData.userName);
    toast.success(`Welcome,${formData.userName} `);
    return null;
  } catch (e) {
    throw new Error("there was a problem creating your account");
  }
};

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
