timeInterval = setInterval(function () {
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
  var currentTime = moment().hours();
  console.log(currentTime);
  var timesArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  console.log(timesArray);
  console.log(timesArray[1]);
 for ( var i =0; i<timesArray.length; i++){
   if (currentTime > timesArray[i]){
     //so we are in the future
     $("#8").addClass("future")
   } else if (currentTime === timesArray[i]){
    $("#8").addClass("present")
   }
   else{
    $("#8").addClass("past")
   }
 }
// var currentTimeUnix = moment().unix() // turn in to unix
// var timesArray = ["08AM", "09AM", "10AM", "11AM", "12AM", "01PM", "02PM", "03PM", "04PM", "05PM"]
// for (var i = 0; i < timesArray.length; i++) {
//   if (currentTimeUnix > moment()){
//     //if currentTime is greater than e.g Sep 25th 8AM then make red
//   } else {
//     // make green
//   }
// }
var mo = parseInt("10")
console.log(mo)