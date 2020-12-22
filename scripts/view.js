import { $, CROSS_HEX, CROSS_ITEM_CLASSNAME } from './config.js';

/**
 * Markup creating functions
 */

function readExpenseInputValues() {
  // Read expense data from the DOM and store it into an object
  const expenseName = $('.input-name').value.trim();
  const expenseDate = $('.input-date').value; // format mm-dd-yyyy
  const expenseAmount = $('.input-amount').value;

  const expense = {
    name: expenseName,
    date: expenseDate,
    amount: expenseAmount
  }

  return expense;
}

function showTable() {
  // Selects the table element
  const table = $('.expense-table');

  // Retrieves the table's list of classes and put them in an array
  let tableClasses = Object.values(table.classList);

  // Show the previously hidden table
  if (tableClasses.includes('hidden')) {
    table.classList.remove('hidden');
  }
}

function hideTable() {
  // Selects the table element
  const table = $('.expense-table');

  // Retrieves the table's list of classes and put them in an array
  let tableClasses = Object.values(table.classList);

  // Hides the previously shown table
  if (!tableClasses.includes('hidden')) {
    table.classList.add('hidden');
  }
}

// Ga perlu
// function createTableMarkup() {
//   // Mirip function createListItem Optimizy g deng

// }


/**
 * DOM append functions
 */
function createTableRowItem(expense, expenseList, controlRemoveTR) {
  // Append expense to expenseList first before creating tr.

  // Select table body element
  const tableBody = $('.table-body');

  // Create a table row
  const tr = document.createElement('tr');
  // pake config.js sabi ni
  tr.setAttribute('class', 'table-row');
  tr.setAttribute('id', `table-row-${expenseList.length}`)
  

  // Create table data for table row
  const tdName = document.createElement('td');
  const textName = document.createTextNode(expense.name);
  tdName.appendChild(textName);

  const tdDate = document.createElement('td');
  const textDate = document.createTextNode(expense.date);
  tdDate.appendChild(textDate);

  const tdAmount = document.createElement('td');
  const textAmount = document.createTextNode(expense.amount);
  tdAmount.appendChild(textAmount);

  // Add onclick method for tdRemove's button
  const tdRemove = document.createElement('td');
  const cross = document.createElement('button');
  cross.innerHTML = CROSS_HEX;
  cross.setAttribute('class', CROSS_ITEM_CLASSNAME);
  cross.setAttribute('id', `cross-${expenseList.length}`);
  cross.onclick = controlRemoveTR;
  tdRemove.appendChild(cross);
  // this = button element, go up twice to retrieve tr's id.

  // Append all table data to table row
  [tdName, tdDate, tdAmount, tdRemove].forEach(td => {
    tr.appendChild(td);
  })

  // Add the row to tableBody
  tableBody.appendChild(tr);

}

function deleteTableRowItem(event, expenseList) {
  // If table row data === 1, toggle table to hidden
  // The function will recognize which tr to delete by looking at the id of the 'x' button and grab the id of it's parent element (tr) by using .parentNode().id

  // Retrieves the target element's id (button id)
  const id = event.currentTarget.id;

  // Select the delete (cross) button
  const deleteBtn = document.getElementById(id);

  // Traverse up the node tree twice to reach tr
  const tr = deleteBtn.parentNode.parentNode;

  // Store the expense name so we can delete it from our data structure later
  const tdName = tr.childNodes[0];
  const expenseName = tdName.innerText;

  // Remove the table row 
  tr.parentNode.removeChild(tr);

  // 
  const expense;
  // Iterate expenseList array
  for (let exp of expenseList) {
    if (exp.name === expenseName) {
      expense = expense.name;
    }
  }

  // Gets the index of expense in expenseList
  try {
    const expenseIndex = tdName.indexOf(expense)
  } catch (err) {
    console.log(err);
  }

  // Remove the task from expenseList --> may create another function later?
  expenseList.splice(expenseIndex, 1)
}

function resetInputBox() {
  // Reset the content of input box on the DOM
  ['.input-name', '.input-date', '.input-amount'].forEach(selector => {
    $(selector).value = '';
  })
}

function checkIfInputIsFilled(event) {
  const selectors = ['.input-name', '.input-date', '.input-amount'];

  for (selector of selectors ) {
    const inputBoxValue = $(selector).value;
    if (!inputBoxValue) {
      // If any of the input box value is empty, return false
      alert('Please input the neccessary data.');
      return false;
    }
  }
  // If none of the inputs are empty, return true.
  return true;
}


export { readExpenseInputValues, createTableMarkup, createTableRowItem, deleteTableRowItem, resetInputBox, checkIfInputIsFilled };



// Note
// Callback functions from button event listeners => this = button element