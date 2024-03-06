function getLastDayName() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const lastDayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
  return days[lastDayIndex];
}

function getLast7DaysNames() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const last7DaysNames = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - i
    );
    const dayName = days[day.getDay()];
    last7DaysNames.push(dayName);
  }
  return last7DaysNames;
}

function getLastMonthName() {
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
  const today = new Date();
  const lastMonthIndex = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
  return months[lastMonthIndex];
}

function getLastSixMonthsNames() {
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
  const today = new Date();
  const lastSixMonthsNames = [];
  for (let i = 0; i < 6; i++) {
    const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const monthName = months[month.getMonth()];
    lastSixMonthsNames.push(monthName);
  }
  return lastSixMonthsNames.reverse();
}

function getLast12MonthsNames() {
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
  const today = new Date();
  const last12MonthsNames = [];
  for (let i = 0; i < 12; i++) {
    const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const monthName = months[month.getMonth()];
    last12MonthsNames.push(monthName);
  }
  return last12MonthsNames.reverse();
}

module.exports = {
  getLastDayName,
  getLast7DaysNames,
  getLastMonthName,
  getLastSixMonthsNames,
  getLast12MonthsNames,
};
