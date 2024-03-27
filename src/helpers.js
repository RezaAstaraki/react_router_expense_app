export const wait = async (min = 0, max = 2000) => {
  const timeOut = Math.random() * max + min;
  return new Promise((res) => setTimeout(res, timeOut));
};

const generateRandomColor = () => {
  const existingBudgetsLenght = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetsLenght * 34} 65% 50%`;
};

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteItem = (key) => {
  localStorage.removeItem(key);
};

export const addBudget = (name, amount) => {
  const newBudget = {
    name: name,
    value: +amount,
    id: crypto.randomUUID(),
    color: generateRandomColor(),
    createAt: Date.now(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newBudget])
  );
};

export const addExpense = (name, amount, budgetID) => {
  const newExpense = {
    name: name,
    value: +amount,
    id: crypto.randomUUID(),
    budgetID: budgetID,
    createAt: Date.now(),
  };

  const existingExpenses = fetchData("expenses") ?? [];

  localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newExpense])
  );
  return newExpense;
};

export const getItems = (category, key, value) => {
  const data = fetchData(category);
  const res = data?.filter((item) => item[key] === value);
  return res;
};

//total spent by budget
export const calculateSpentByBudget = (budgetID) => {
  const expenses = getItems("expenses", "budgetID", budgetID);
  let sum = 0;
  if (!expenses) return 0;
  expenses.forEach((expense) => {
    sum += expense.value;
  });
  // console.log("sum", sum);
  // const budgetSpent = expenses.reduce((acc, expense) => {
  //   console.log("expense", expense);
  //   console.log("acc", acc);
  //   acc += expense.value;
  // }, 0);
  // console.log("budgetSpent", budgetSpent);
  return sum;
};

//formatter
export const timeFormatter = (t) => {
  const date = new Date(t);
  return date.toLocaleString();
};

export const currencyFormatter = (number) => {
  // Round to two decimal places (optional)
  const rounded = number.toFixed(2);

  // Extract the first two digits (integer part)
  const dollars = rounded.slice(0, 2);

  // Combine and return with dollar sign
  return `$${dollars}${rounded.slice(2)}`;
};
