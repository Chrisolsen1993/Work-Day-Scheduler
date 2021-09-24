timeInterval = setInterval(function () {
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);