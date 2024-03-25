import { CurrencyDollarIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { Form, useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    formRef.current.reset();
    focusRef.current.focus();
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form method="POST" className="grid-sm" ref={formRef}>
        <input type="hidden" name="_action" value={"addBudget"} />
        <label htmlFor="newBudget">Budget Name</label>
        <input
          ref={focusRef}
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
        <button disabled={isSubmitting} type="submit" className="btn btn--dark">
          {isSubmitting ? (
            <>
              Submitting.....
              <ArrowPathIcon width={20} />
            </>
          ) : (
            <>
              Create Budget
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
