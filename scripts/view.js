import { $, CROSS_HEX, CROSS_ITEM_CLASSNAME, DOLLAR_SIGN, MONTHS, MONTHS_START_AT } from './config.js';


function readExpenseInputValues() {
  // Read expense data from the DOM and store it into an object
  const expenseName = $('.input-name').value.trim();
  const expenseAmount = $('.input-amount').value;

  // Transforming the raw input to formatted data
  const expenseDateRaw = $('.input-date').value;
  const rawLength = expenseDateRaw.length;

  const day = expenseDateRaw.slice(rawLength - 2, rawLength);
  const month = MONTHS[expenseDateRaw.slice(MONTHS_START_AT, MONTHS_START_AT + 2)];
  const year = expenseDateRaw.slice(0, 4);

  const expenseDate = `${month} ${day}, ${year}`;

  const expense = {
    name: expenseName,
    date: expenseDate,
    amount: `${DOLLAR_SIGN} ${expenseAmount}`
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

/**
 * DOM append functions
 */
function createTableRowItem(expense, expenseList, controlRemoveTR) {
  // Append expense to expenseList first before creating tr.

  // Select table body element
  const tableBody = $('.table-body');

  // Create a table row
  const tr = document.createElement('tr');
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

  const span = document.createElement('span');
  span.setAttribute('class', 'span-close');
  span.setAttribute('aria-hidden', true);
  span.innerHTML = '&times;';

  cross.className = 'btn btn-close';
  cross.setAttribute('type', 'button');
  cross.setAttribute('aria-label', 'Close');
  cross.setAttribute('id', `cross-${expenseList.length}`);
  cross.onclick = controlRemoveTR;

  cross.appendChild(span);

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
  // The function will recognize which tr to delete by looking at the id of the 'x' button and grab the id of it's parent element (tr) by using .parentNode().id

  // If expenseList only contains one element, remove the expense and hide the table.
  const expenseCount = expenseList.length;

  // Hides table if said item is the only item in the list
  if (expenseCount === 0) {
    return;
  } else if (expenseCount === 1) {
    hideTable();
  }

  // Retrieves the target element's id (button id)
  const id = event.currentTarget.id;

  // Select the delete (cross) button
  const deleteBtn = document.getElementById(id);

  // Traverse up the node tree twice to reach tr
  const tr = deleteBtn.parentNode.parentNode;

  // Store the expense name so we can delete it from our data structure later
  const tdName = tr.childNodes[0];

  // Get the name by using .innerText
  const expenseName = tdName.innerText;

  // Remove the table row 
  tr.parentNode.removeChild(tr);

  // Storing the name of the expense
  let expenseObj;
  for (let exp of expenseList) {
    if (exp.name === expenseName) {
      // expenseObj is not the expenseName, but the expense Object that is stored in our DS (Array)
      expenseObj = exp;
      break;
    }
  }  
  // expenseObj is undefined --> we must declare expenseObj before the loop (thus using let). If we declare expenseObj inside the loop, for some reason we will receive a value of 'undefined' if we try to log it into the console later on.

  try {
    // Gets the index of expense in expenseList
    const expenseIndex = expenseList.indexOf(expenseObj)

    // Remove the task from expenseList --> may create another function later?
    expenseList.splice(expenseIndex, 1)
  } catch (err) {
    console.log(err);
  }

  console.log(expenseList);
}

function resetInputBox() {
  // Reset the content of input box on the DOM
  ['.input-name', '.input-date', '.input-amount'].forEach(selector => {
    $(selector).value = '';
  })
}

function checkIfInputIsFilled() {
  const selectors = ['.input-name', '.input-date', '.input-amount'];

  for (let selector of selectors) {
    const inputBoxValue = $(selector).value;
    if (!inputBoxValue) {
      // If any of the input box value is empty, return false
      alert('Please input the neccessary data.');

      // Move the cursor to the empty field for better user experience
      $(selector).focus()

      return false;
    }
  }
  // If none of the inputs are empty, return true.
  return true;
}


export { readExpenseInputValues, showTable, hideTable, createTableRowItem, deleteTableRowItem, resetInputBox, checkIfInputIsFilled };