import React from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../helpers";
import Table from "../components/Table";
import AddExpenseForm from "../components/AddExpenseForm";

const Category = () => {
  const params = useParams();
  const id = params.id;

  const expenses = getItems("expenses", "budgetID", id)?.sort(
    (a, b) => b.createAt - a.createAt
  );
  const budget = getItems("budgets", "id", id);
  return (
    <div>
      <AddExpenseForm budgets={budget} />
      <Table showLess={false} expenses={expenses} />
    </div>
  );
};

export default Category;
