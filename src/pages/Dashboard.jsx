import React from "react";
import { addBudget, addExpense, fetchData, getItems, wait } from "../helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetCard from "../components/BudgetCard";

import Table from "../components/Table";

//action-------------------------------------------------------
export const createAccountAction = async ({ request }) => {
  await wait(500, 2000);
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  console.log("formData", formData);
  //action for add budget--------------------------------------
  if (formData._action === "addBudget") {
    try {
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
  } //add expenses -----------------------------------------------
  else if (formData._action === "createExpense") {
    const expense = addExpense(
      formData.newExpense,
      formData.newExpenseAmount,
      formData.newExpenseBudget
    );

    try {
      return toast.success(
        `${formData.newExpense} Added to ${
          getItems("budgets", "id", expense.budgetID)[0].name
        }`
      );
    } catch (e) {
      throw new Error("Something went wrong with add new Expense");
    }
  }
};

//loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
};

const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();
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

      <div>
        {budgets.map((budget) => (
          <BudgetCard key={budget.id} budget={budget} />
        ))}
      </div>

      <div>
        <h1>Expenses</h1>
        <Table
          showCategory={true}
          expenses={expenses?.sort((a, b) => b.createAt - a.createAt) ?? []}
        ></Table>
      </div>
    </>
  );
};

export default Dashboard;
