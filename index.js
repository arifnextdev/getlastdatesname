const today = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getLastDayName() {
  const lastDayIndex = (new Date().getDay() + 6) % 7;
  return days[lastDayIndex];
}

function getLastDaysNames(numDays = 7) {
  const lastDaysNames = [];
  for (let i = 0; i < numDays; i++) {
    const day = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - i
    );
    const dayName = days[day.getDay()];
    lastDaysNames.unshift(dayName);
  }
  return lastDaysNames;
}

function getLastMonthName() {
  const lastMonthIndex = (new Date().getMonth() + 11) % 12;
  return months[lastMonthIndex];
}

function getLastMonthsName(numMonths) {
  const lastMonthsNames = [];
  for (let i = 0; i < numMonths; i++) {
    const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const monthName = months[month.getMonth()];
    lastMonthsNames.unshift(monthName);
  }
  return lastMonthsNames;
}

module.exports = {
  getLastDayName,
  getLastMonthName,
  getLast7DaysName: () => getLastDaysNames(7),
  getLast6MonthsNames: () => getLastMonthsName(6),
  getLast12MonthsNames: () => getLastMonthsName(12),
};
