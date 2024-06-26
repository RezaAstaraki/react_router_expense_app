import React from "react";
import { addBudget, addExpense, fetchData, wait } from "../helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";

//action-------------------------------------------------------
export const createAccountAction = async ({ request }) => {
  await wait(500, 2000);
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  //action for add budget--------------------------------------
  if (formData._action === "addBudget") {
    try {
      console.log("formData", formData);

      addBudget(formData.newBudget, formData.newBudgetAmount);
      return toast.success(`${formData.newBudget} Added to budgets`);
    } catch (e) {
      throw new Error("Something went wrong with add a budget");
    }
  } // action for create user------------------------------------
  else if (formData._action === "createUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(formData.userName));

      return toast.success(`Welcome,${formData.userName} `);
    } catch (e) {
      throw new Error("there was a problem creating your account");
    }
  } //------------------------------------------------------------
  else if (formData._action === "createExpense") {
    addExpense(
      formData.newExpense,
      formData.newExpenseAmount,
      formData.newExpenseBudget
    );

    try {
      console.log("formData", formData);
      return toast.success(`${formData.newExpense} Added to ${"budgets"}`);
    } catch (e) {
      throw new Error("Something went wrong with add new Expense");
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
          {budgets && budgets.length > 0 ? (
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
                <AddExpenseForm budgets={budgets} />
              </div>
            </div>
          ) : (
            <div className="grid-sm">
              <p>Personal budgeting is the secret to financial freedom.</p>
              <p>create a budget to get started!</p>
              <AddBudgetForm />
            </div>
          )}
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
