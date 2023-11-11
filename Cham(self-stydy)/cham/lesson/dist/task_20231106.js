"use strict";
function timeForMilkAndCookies(years, months, dates) {
    let isChristmas = false;
    if (typeof years != "number" ||
        typeof months != "number" ||
        typeof dates != "number" ||
        years === 0 ||
        months === 0 ||
        dates === 0) {
        return "Enter number here, please!";
    }
    else if (years != 0 && months != 0 && dates != 0) {
        if (months === 11 && dates === 24) {
            return (isChristmas = true);
        }
    }
    return isChristmas;
}
class date {
    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
        this.year = year;
        this.month = month;
        this.date = date;
    }
    is_christmas() {
        if (typeof this.year != "number" ||
            typeof this.month != "number" ||
            typeof this.date != "number" ||
            this.year === 0 ||
            this.month === 0 ||
            this.date === 0) {
            return "Enter number here, please!";
        }
        switch (this.month) {
            case 11:
                if (this.date === 24) {
                    return true;
                }
                break;
            default:
                return false;
        }
    }
}
let Date1 = new date(2013, 11, 24);
console.log(Date1.is_christmas());
let Date2 = new date(3000, 12, 24);
console.log(Date2.is_christmas());
timeForMilkAndCookies(2013, 11, 13);
timeForMilkAndCookies(2013, 11, 24);
timeForMilkAndCookies(0, 11, 24);
timeForMilkAndCookies(2013, 0, 24);
timeForMilkAndCookies(2013, 11, 0);
timeForMilkAndCookies(1889, 11, 24);
timeForMilkAndCookies(1889, 1, 24);
