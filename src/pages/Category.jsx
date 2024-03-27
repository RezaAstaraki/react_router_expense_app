import React from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../helpers";
import Table from "../components/Table";

const Category = () => {
  const params = useParams();
  const id = params.id;

  const expenses = getItems("expenses", "budgetID", id)?.sort(
    (a, b) => b.createAt - a.createAt
  );

  return (
    <div>
      <Table expenses={expenses} />
    </div>
  );
};

export default Category;
