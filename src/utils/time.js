export const getISO = (dates, time) => {
  const date = new Date(dates);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const date_obj = new Date(year, month, day, time, 0);

  return date_obj.toISOString();
};

export const meetEnd = (startTime, min) => {
  const date_obj = new Date(startTime);
  date_obj.setMinutes(date_obj.getMinutes() + min);
  return date_obj.toISOString();
};

export const monthStrConvert = (month) => {
  const monthStr = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ];
  switch (month) {
    case 0:
      return monthStr[0];
    case 1:
      return monthStr[1];
    case 2:
      return monthStr[2];
    case 3:
      return monthStr[3];
    case 4:
      return monthStr[4];
    case 5:
      return monthStr[5];
    case 6:
      return monthStr[6];
    case 7:
      return monthStr[7];
    case 8:
      return monthStr[8];
    case 9:
      return monthStr[9];
    case 10:
      return monthStr[10];
    case 11:
      return monthStr[11];
    default:
      break;
  }
};
