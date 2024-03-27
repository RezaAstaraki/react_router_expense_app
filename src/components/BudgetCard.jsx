import React from "react";

const BudgetCard = ({ budget }) => {
  const { name, value, id, color, createAt } = budget;

  return (
    <div>
      <h2 className="h3">{name}</h2>
      <progress max={100} color={color} value={20} />
      <progress id="file" value="90" max="100">
        {" "}
        32%{" "}
      </progress>
    </div>
  );
};

export default BudgetCard;
