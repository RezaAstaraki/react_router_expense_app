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
