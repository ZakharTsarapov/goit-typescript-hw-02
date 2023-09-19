/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  restDay = "restDay",
  workDay = "workDay",
}

const day = {
  day: Days.workDay,
}

function isWeekend(day) {
  if(day.day === Days.workDay) {
    return true;
  }
}