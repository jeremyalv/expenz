const $ = function (selector) {
  return document.querySelector(selector);
}
const ENTER_KEYCODE = 13;
const ADD_EXPENSE_CLASSNAME = 'btn-add-expense';
const CROSS_HEX = '&#10006';
const CROSS_ITEM_CLASSNAME = 'table-data-cross';

export { $, ENTER_KEYCODE, ADD_EXPENSE_CLASSNAME, CROSS_HEX, CROSS_ITEM_CLASSNAME };