import React from "react";

const BudgetCard = ({ budget }) => {
  const { name, value, id, color, createAt } = budget;

  return (
    <div>
      <h2 className="h3">{name}</h2>
      <label htmlFor="file">Downloading progress:</label>
      {/* <progress max={100} color={color} value={20} /> */}
      <progress id="file" value="90" max="100" color="blue" />
    </div>
  );
};

export default BudgetCard;
