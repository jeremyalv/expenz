import { $, ENTER_KEYCODE, ADD_EXPENSE_CLASSNAME } from './config.js';
import * as model from './model.js';
import * as view from './view.js';

/**
 * Controller functions
 */
function controlAddExpense(event) {
  // Check inputs: If not all inputs are filled, do nothing.
  if (!view.checkIfInputIsFilled()) return;

  if (event.target.classList.contains(ADD_EXPENSE_CLASSNAME) || event.keyCode ? event.keyCode === ENTER_KEYCODE : false) {
    // Read expense from input box
    const expense = view.readExpenseInputValues();
    
    // Append expense to expenseList
    model.storeExpenseData(expense);

    // Resets the values on the input box
    view.resetInputBox();
  }
}

// This might not be needed.
// function controlAddExpenseEnter(event) {
//   // Check inputs: If not all inputs are filled, do nothing.
//   if (!view.checkIfInputIsFilled()) return;

//   if (event.keyCode === ENTER_KEYCODE) {
//     // Read expense from input box
//     const expense = view.readExpenseInputValues();
    
//     // Append expense to expenseList
//     model.storeExpenseData(expense);

//     // Resets the values on the input box
//     view.resetInputBox();
//   }
// }

function controlDeleteExpense() {
  // Deletes expense from expenseList and deletes the element from the DOM when 'x' is clicked.
  


}

function init() {
  // Event listeners
}

// Run the app
// init();