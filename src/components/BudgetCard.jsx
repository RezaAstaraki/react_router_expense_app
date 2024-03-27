import React from "react";
import { calculateSpentByBudget, currencyFormatter } from "../helpers";

const BudgetCard = ({ budget }) => {
  const { name, value, id, color, createAt } = budget;

  const spent = calculateSpentByBudget(id);

  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h2 className="h3">{name}</h2>
        <p>{currencyFormatter(value)} Budgeted</p>
      </div>
      <progress max={value} color={color} value={spent}>
        {((100 * spent) / value).toFixed(0)}'%'
      </progress>
      <div className="progress-text">
        <small>{currencyFormatter(spent)} spent</small>
        <small>{currencyFormatter(value - spent)} remaining</small>
      </div>
    </div>
  );
};

export default BudgetCard;
