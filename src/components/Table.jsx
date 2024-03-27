import React from "react";
import { getItems } from "../helpers";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Table = ({ expenses }) => {
  console.log("expenses", expenses);
  //   console.log(
  //     "getItems",
  //     getItems("expenses", "budgetID", "51f84ff4-620f-4e6e-bb82-656102ebe84d")
  //   );
  return (
    <div>
      <table>
        <thead>
          <tr>
            {["name", "amount", "date", "category"].map((item, index) => {
              return <td key={index}>{item}</td>;
            })}
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.value}</td>
                <td>{expense.createAt}</td>
                <td>
                  <Link
                    to={getItems("budgets", "id", expense.budgetID)[0].id}
                    style={{
                      "--accent": getItems("budgets", "id", expense.budgetID)[0]
                        .color,
                    }}
                  >
                    {getItems("budgets", "id", expense.budgetID)[0].name}
                  </Link>
                </td>
                <td>
                  <button className="btn btn--warning">
                    <TrashIcon width={20} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
