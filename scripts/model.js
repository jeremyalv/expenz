let expenseList = [];

function storeExpenseData(expense) {
  // Append Expense data to expenseList
  expenseList.push(expense);
}

function expenseListIsEmpty() {
  // Check whether expenseList is empty or not
  return expenseList.length === 0;
}

function retrieveExpenseData(item) {
  // Get item's index 
  const itemIndex = expenseList.indexOf(item);

  // If the item isn't on expenseList. do nothing
  if (itemIndex === -1) return;
  
  // Read the expense data from expenseList
  const expense = expenseList[itemIndex];

  return expense;
}

export { expenseList, storeExpenseData, expenseListIsEmpty, retrieveExpenseData };