import React from "react";
import { addBudget, fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

//action
export const createAccountAction = async ({ request }) => {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  if (formData._action === "addBudget") {
    try {
      console.log("formData", formData);
      addBudget(formData.newBudget, formData.newBudgetAmount);
      return toast.success(`${formData.newBudget} Added to budgets`);
    } catch (e) {
      throw new Error("Something went wrong with add a budget");
    }
  } else if (formData._action === "createUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(formData.userName));

      return toast.success(`Welcome,${formData.userName} `);
    } catch (e) {
      throw new Error("there was a problem creating your account");
    }
  }
};

//loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
};

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm"></div>
          {/* {budgets?():() } */}
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm />
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
