import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export const rootLoader = () => {
  const userName = fetchData("userName");

  return { userName };
};

const RootLayout = () => {
  useLoaderData();
  return (
    <div>
      main
      <Outlet></Outlet>
      main below
    </div>
  );
};

export default RootLayout;
