"use strict";
function timeForMilkAndCookies(years, month, date) {
  if (!number) {
    return "Enter number here, please!";
  }
  if (years != 0) {
    let isChristmas = false;
    switch (month) {
      case 11:
        if (date === 24) {
          isChristmas = true;
        }
        break;
      default:
        isChristmas = false;
        break;
    }
    return isChristmas;
  }
}
timeForMilkAndCookies(2013, 11, 13);
timeForMilkAndCookies(2013, 11, 24);
