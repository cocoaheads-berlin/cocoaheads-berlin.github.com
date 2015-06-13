function third_wednesday_in_month(aDate) {
  // copy the aDate argument
  var date = new Date(aDate);
  // reset the date to the 1st
  date.setDate(1);
  // calculate the day of the 3rd wednesday in the given month
  var third_wednesday = (1 + (3 - date.getDay() + 7) % 7) + 14;
  date.setDate(third_wednesday);
  return date;
}

function next_meetup() {
  var span = document.getElementById("next_meetup");
  if (span) {
    span.style.display = "inline";
    var now = new Date();
    var date = third_wednesday_in_month(now);
    // check whether this month's meeting has already happened
    if (now.getDate() > date.getDate()) {
      // advance to next month
      var month = now.getMonth() + 1;
      if (month > 12) {
        // advance to next year
        month = 0;
        now.setYear(now.getYear() + 1);
      }
      now.setMonth(month);
      date = third_wednesday_in_month(now);
    }
    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var weekday = weekdays[3];
    var day = date.getDate();
    var month = date.getMonth(); // + 1;
    var year = date.getYear() + 1900;
    span.innerHTML = day + " " + monthnames[month] + " " + year;
  }
}
