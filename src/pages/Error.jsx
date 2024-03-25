import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const s = useRouteError();
  const navigate = useNavigate();

  // console.log("s", Object.getOwnPropertyNames(s));
  // console.log("s", s.message);
  // console.error();

  return (
    <div className="error">
      <h1>Uh oh! we've got a problem</h1>
      <p>{s.message || s.statusText} </p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon height={20} />
          Go Back
        </button>
        <Link className="btn btn--dark" to="/">
          <HomeIcon height={20} />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
