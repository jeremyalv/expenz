const $ = function (selector) {
  return document.querySelector(selector);
}
const ENTER_KEYCODE = 13;
const ADD_EXPENSE_CLASSNAME = 'btn-add-expense';
const CROSS_HEX = '&times;';
const CROSS_ITEM_CLASSNAME = 'btn-cross';
const DOLLAR_SIGN = '$';
// Tanda mata uang option

const MONTHS = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05':'May',
  '06':'June',
  '07':'July',
  '08':'August',
  '09':'September',
  '10':'October',
  '11':'November',
  '12':'December'
};
const MONTHS_START_AT = 5;

export { $, ENTER_KEYCODE, ADD_EXPENSE_CLASSNAME, CROSS_HEX, CROSS_ITEM_CLASSNAME, DOLLAR_SIGN, MONTHS, MONTHS_START_AT };