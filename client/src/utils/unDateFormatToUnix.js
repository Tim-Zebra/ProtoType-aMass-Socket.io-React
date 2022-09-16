// Takes in the string exported by dateFormat.JS and converts it into a unix time stamp
module.exports = (oldDate, timezoneOffSet) => {
  // create month object
  // [month, day, year, 'at', time, am/pm ]
  let unixTimeStringArray = oldDate.split(' ');

  // newUnixTime at 0 = January 1st 1970
  let newUnixTime = 0;

  // create month object. In 'days' value of days that have passed
  const months = {
    Jan: 0,
    Feb: 31,
    Mar: 59,
    Apr: 90,
    May: 120,
    Jun: 151,
    Jul: 181,
    Aug: 212,
    Sep: 243,
    Oct: 273,
    Nov: 304,
    Dec: 334,
  };

  // Milliseconds values per minute, hour, day, month, year
  // Format: 1 year = 31557600000 milliseconds
  const value = {
    minute: 60000,
    hour: 3600000,
    day: 86400000,
    year : 31557600000,
  }

  // Adds based on year value unixTimeStringArray[2]
  let year = parseInt(unixTimeStringArray[2]);
  // Added 56648 to compensate for integer rounding which results ~ 8 hours missing. Integer compensates appropriately for both 2000 and 2022
  newUnixTime += (value.year * (year - 1970));


  // Adds based on month value unixTimeStringArray[0]
  // Converts any month length to short case. Eg. January = Jan, Janu = Jan, Jan=Jan
  let month = unixTimeStringArray[0].split('').splice(0,3).join('');
  let monthValue = months[month];
  newUnixTime += (value.day * monthValue);

  // Accounts for current year being a leap year. Adds 1 day to the current time if the current year is a leap year
  if(year % 4 === 0) {
    newUnixTime += value.day;
  }

  // Adds based on day value unixTimeStringArray[1]. Subtract 1 as unixcode already has 1 day (ie. Similar to months where january = 0)
  newUnixTime += (value.day * (parseInt(unixTimeStringArray[1])-1));

  // Adds based on hours/minutes value unixTimeStringArray[4].
  // Time value accounts for am and pm unixTimeStringArray[5]. If pm then +12 hours.
  let timeAmPm = unixTimeStringArray[5].toLowerCase();
  // Extrapolates minutes and hours
  let hoursMinutesArray = unixTimeStringArray[4].split(':');
  // hours + 5 accounts for time zone as -6 GMT
  let hours = parseInt(hoursMinutesArray[0]) + timezoneOffSet;
  let minutes = parseInt(hoursMinutesArray[1]);

  // Accounts for midnight
  if(hours === 12 && timeAmPm === 'am') {
    hours = 0;
  }

  // Accounts for PM
  if(timeAmPm === 'pm') {
    hours += 12;
  }

  newUnixTime += (value.hour * hours);
  newUnixTime += (value.minute * minutes);

  return newUnixTime;
};
