import { $, ENTER_KEYCODE, ADD_EXPENSE_CLASSNAME, CROSS_ITEM_CLASSNAME } from './config.js';
import * as model from './model.js';
import * as view from './view.js';

// Worked properly
function controlAddExpense(event) {
  // If a click event or a keyup event on enter happens, run the function
  if (event.target.classList.contains(ADD_EXPENSE_CLASSNAME) || event.key === 'Enter') {
    // Check inputs: If not all inputs are filled, do nothing.
    if (!view.checkIfInputIsFilled()) return;

    // Read expense from input box
    const expense = view.readExpenseInputValues();
    
    // Append expense to expenseList
    model.storeExpenseData(expense);

    // Resets the values on the input box
    view.resetInputBox();


    // Create table row containing the added expense
    view.showTable();
    view.createTableRowItem(expense, model.expenseList, function(event) {
      // Add event parameter (passed from DOMEvent -> controlAddExpense -> Anonymous function -> view.deleteTableRowItem, if we didn't pass event to anon.fn, event.currentTarget will return null.
      // Adding functions with parameters as parameter by wrapping it inside an anonymous function
      view.deleteTableRowItem(event, model.expenseList);
    });
    console.log(model.expenseList);
  }
}
function init() {
  $('.btn-add-expense').addEventListener('click', controlAddExpense);
  $('.btn-clear-input').addEventListener('click', view.resetInputBox);
  document.querySelectorAll('.input').forEach(item => {
    item.addEventListener('keyup', controlAddExpense);
  })
}

// Run the app
window.onload = init;