import { $ } from './config.js';

let expensesList = [];

/**
 * Worker functions
 */
function storeExpenseData(expense) {
  // Append Expense data to expensesList
  expensesList.push(expense);
}

function expenseListIsEmpty() {
  // Check whether expenseList is empty or not
  return expensesList.length === 0;
}

function retrieveExpenseData(item) {
  // Get item's index 
  const itemIndex = expensesList.indexOf(item);

  // If the item isn't on expenseList. do nothing
  if (itemIndex === -1) return;
  
  // Read the expense data from expensesList
  const expense = expensesList[itemIndex];

  return expense;

}

function deleteExpenseData(item) {
  // Get item's index 
  const itemIndex = expensesList.indexOf(item);

  // If the item isn't on expenseList. do nothing
  if (itemIndex === -1) return;

  // Delete the expense from our data structure
  expensesList.splice(itemIndex, 1);
}

export { expensesList, storeExpenseData, expenseListIsEmpty, retrieveExpenseData, deleteExpenseData };