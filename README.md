# getlastdatesname

This package provides functions to retrieve the names of the last day, last 7 days, last month, last six months, and last 12 months.

## Installation

You can install the `getlastdatesname` package via npm:

```bash
npm install getlastdatesname


Usage
const { getLastDayName, getLast7DaysNames, getLastMonthName, getLastSixMonthsNames, getLast12MonthsNames } = require('getlastdatesname');

console.log('Last Day Name:', getLastDayName());
console.log('Last 7 Days Names:', getLast7DaysNames());
console.log('Last Month Name:', getLastMonthName());
console.log('Last Six Months Names:', getLastSixMonthsNames());
console.log('Last 12 Months Names:', getLast12MonthsNames());

Functions
getLastDayName()
Returns the name of the last day.

getLast7DaysNames()
Returns an array containing the names of the last 7 days.

getLastMonthName()
Returns the name of the last month.

getLastSixMonthsNames()
Returns an array containing the names of the last six months.

getLast12MonthsNames()
Returns an array containing the names of the last 12 months.
