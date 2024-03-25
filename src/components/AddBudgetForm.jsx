import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <Form method="POST" className="grid-sm">
        <input type="hidden" name="_action" value={"addBudget"} />
        <label htmlFor="newBudget">Budget Name</label>
        <input
          type="text"
          name="newBudget"
          id="newBudget"
          placeholder="e.g., Groceries"
          required
        />
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            name="newBudgetAmount"
            id="newBudgetAmount"
            step={0.01}
            placeholder="e.g, 350$"
            required
            inputMode="decimal"
          />
        </div>
        <button type="submit" className="btn btn--dark">
          Create Budget
          <CurrencyDollarIcon width={20} />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
