timeInterval = setInterval(function () {
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
  var currentTime = moment().hours();
  console.log(currentTime);
  var timesArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  console.log(timesArray);
  console.log(timesArray[1]);
  for (var i = 0; i < timesArray.length; i++) {
    if (currentTime > timesArray[i]) {
      //so we are in the future
      $("#" + timesArray[i]).addClass("future")
    } else if (currentTime === timesArray[i]) {
      $("#" + timesArray[i]).addClass("present")
    }
    else {
      $("#" + timesArray[i]).addClass("past")
    }
  }

// $("#saveData8").on("click",storeData8);
// // $("#saveData9").on("click",storeData9);
// // $("#saveData10").on("click",storeData10);
// // $("#saveData11").on("click",storeData11);
// // $("#saveData12").on("click",storeData12);
// // $("#saveData13").on("click",storeData13);
// // $("#saveData14").on("click",storeData14);
// // $("#saveData15").on("click",storeData15);
// // $("#saveData16").on("click",storeData16);
// // $("#saveData17").on("click",storeData17);
// // dataValu8 =localStorage.getItem("storage8")
// $("#description8").val(localStorage.getItem("storage8"))
// function storeData8 (){
//   var dataValu8 = $("#description8").val()
 
//   if(!dataValu8){
//     console.log("Error: Must enter a data to be able to save")
//   }
//   else{
//     localStorage.setItem("storage8", dataValu8);
//   }
  
// }


$(".container").on("click", function(event){
  
  if (event.target.matches("button")){
    $(".description").val(localStorage.getItem("storage"))
    var dataValu= $(".description").val()
    if (!dataValu){
      console.log("Error: Must enter a data to be able to save")
    }
    else{
      localStorage.setItem("storage", dataValu);
    }


  }
})









  //  function saveData (time){

//    console.log("saving data"+time)
   
//  }
//  onclick="saveData(12)" 