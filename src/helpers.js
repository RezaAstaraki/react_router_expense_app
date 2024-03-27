export const wait = async (min = 0, max = 2000) => {
  const timeOut = Math.random() * max + min;
  console.log("timeOut", timeOut);
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
};

export const getItems = (category, key, value) => {
  const data = fetchData(category);

  const res = data.filter((item) => item[key] === value);
  return res;
};
