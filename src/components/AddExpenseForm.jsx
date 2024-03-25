import {
  ArrowPathIcon,
  CurrencyDollarIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import { useFetcher, Form } from "react-router-dom";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      formRef.current.focus();
    }
  }, []);
  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add New{" "}
        <span className="accent">
          {budgets.length === 1 &&
            `${budgets.map((budget, index) => budget.name)}`}
        </span>{" "}
        Expense
      </h2>
      <Form method="POST" className="grid-sm" ref={formRef}>
        <input type="hidden" name="_action" value="createExpense" />
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">Expense Name</label>
            <input
              ref={focusRef}
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g, Coffee"
              required
            />
            <div className="grid-xs">
              <label htmlFor="newExpenseAmount">Amount</label>
              <input
                type="number"
                name="newExpenseAmount"
                id="newExpenseAmount"
                step={0.01}
                placeholder="e.g, 3.5$"
                required
                inputMode="decimal"
              />
            </div>
            <div className="grid-xs" hidden={budgets.length === 1}>
              <label htmlFor="newExpenseBudget">Budget Category</label>
              <select name="newExpenseBudget" id="newExpenseBudget" required>
                {budgets
                  .sort((a, b) => a.createdAt - b.createdAt)
                  .map((budget) => {
                    return (
                      <>
                        <option key={budget.id} value={budget.id}>
                          {budget.name}
                        </option>
                      </>
                    );
                  })}
              </select>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn--dark"
            >
              {isSubmitting ? (
                <>
                  Submitting.....
                  <ArrowPathIcon width={20} />
                </>
              ) : (
                <>
                  Create Budget
                  <PlusCircleIcon width={20} />
                </>
              )}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddExpenseForm;
