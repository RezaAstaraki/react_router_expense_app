import React, { useState } from "react";
import { getItems, timeFormatter, currencyFormatter } from "../helpers";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Table = ({ expenses, showCategory = false, showLess = true }) => {
  // console.log("expenses", expenses);

  const [showLessState, setShowLessState] = useState(showLess);
  let list;
  if (showLessState) {
    list = expenses.slice(0, 8);
  } else {
    list = expenses;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            {["name", "amount", "date", showCategory ? "category" : ""].map(
              (item, index) => {
                return <td key={index}>{item}</td>;
              }
            )}
          </tr>
        </thead>

        <tbody>
          {list.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{currencyFormatter(expense.value)}</td>
                <td>{timeFormatter(expense.createAt)}</td>
                {showCategory && (
                  <td>
                    <Link
                      to={getItems("budgets", "id", expense.budgetID)[0].id}
                      style={{
                        "--accent": getItems(
                          "budgets",
                          "id",
                          expense.budgetID
                        )[0].color,
                      }}
                    >
                      {getItems("budgets", "id", expense.budgetID)[0].name}
                    </Link>
                  </td>
                )}
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
      {showLessState && (
        <div onClick={() => setShowLessState(false)}>Show More</div>
      )}
    </div>
  );
};

export default Table;
