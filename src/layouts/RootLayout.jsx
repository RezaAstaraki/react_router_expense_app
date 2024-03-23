import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

//helper functions
import { fetchData } from "../helpers";

//assets
import wave from "../assets/wave.svg";

//components
import Nav from "../components/Nav";

export const rootLoader = () => {
  const userName = fetchData("userName");

  return { userName };
};

const RootLayout = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet></Outlet>
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default RootLayout;
