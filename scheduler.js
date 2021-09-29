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
      $("#" + timesArray[i]).addClass("past")
    } else if (currentTime === timesArray[i]) {
      $("#" + timesArray[i]).addClass("present")
    }
    else {
      $("#" + timesArray[i]).addClass("future")
    }
  }

$("#saveData8").on("click",storeData8);
$("#saveData9").on("click",storeData9);
$("#saveData10").on("click",storeData10);
$("#saveData11").on("click",storeData11);
$("#saveData12").on("click",storeData12);
$("#saveData13").on("click",storeData13);
$("#saveData14").on("click",storeData14);
$("#saveData15").on("click",storeData15);
$("#saveData16").on("click",storeData16);
$("#saveData17").on("click",storeData17);
dataValu8 =localStorage.getItem("storage8")
$("#description8").val(JSON.parse(localStorage.getItem("storage8")))
function storeData8 (){
  var dataValu8 = $("#description8").val()
 
  if(!dataValu8){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage8", JSON.stringify(dataValu8));
  }
}

dataValu9 =localStorage.getItem("storage9")
$("#description9").val(JSON.parse(localStorage.getItem("storage9")))
function storeData9 (){
  var dataValu9 = $("#description9").val()
 
  if(!dataValu9){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage9", JSON.stringify(dataValu9));
  }
}

dataValu10 =localStorage.getItem("storage10")
$("#description10").val(JSON.parse(localStorage.getItem("storage10")))
function storeData10 (){
  var dataValu10 = $("#description10").val()
 
  if(!dataValu10){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage10", JSON.stringify(dataValu10));
  }
}

dataValu11 =localStorage.getItem("storage11")
$("#description11").val(JSON.parse(localStorage.getItem("storage11")))
function storeData11 (){
  var dataValu11 = $("#description11").val()
 
  if(!dataValu11){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage11", JSON.stringify(dataValu11));
  }
}

dataValu12 =localStorage.getItem("storage12")
$("#description12").val(JSON.parse(localStorage.getItem("storage12")))
function storeData12 (){
  var dataValu12 = $("#description12").val()
 
  if(!dataValu12){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage12", JSON.stringify(dataValu12));
  }
}

dataValu13 =localStorage.getItem("storage13")
$("#description13").val(JSON.parse(localStorage.getItem("storage13")))
function storeData13 (){
  var dataValu13 = $("#description13").val()
 
  if(!dataValu13){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage13", JSON.stringify(dataValu13));
  }
}

dataValu12 =localStorage.getItem("storage14")
$("#description14").val(JSON.parse(localStorage.getItem("storage14")))
function storeData14 (){
  var dataValu14 = $("#description14").val()
 
  if(!dataValu14){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage14", JSON.stringify(dataValu14));
  }
}


dataValu15 =localStorage.getItem("storage15")
$("#description15").val(JSON.parse(localStorage.getItem("storage15")))
function storeData15 (){
  var dataValu15 = $("#description15").val()
 
  if(!dataValu15){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage15", JSON.stringify(dataValu15));
  }
}


dataValu16 =localStorage.getItem("storage16")
$("#description16").val(JSON.parse(localStorage.getItem("storage16")))
function storeData16 (){
  var dataValu16 = $("#description16").val()
 
  if(!dataValu16){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage16", JSON.stringify(dataValu16));
  }
}
dataValu17 =localStorage.getItem("storage17")
$("#description17").val(JSON.parse(localStorage.getItem("storage17")))
function storeData17 (){
  var dataValu17 = $("#description17").val()
 
  if(!dataValu17){
    console.log("Error: Must enter a data to be able to save")
  }
  else{
    localStorage.setItem("storage17", JSON.stringify(dataValu17));
  }
}
// Working on another way to store data 
// $(".description").val(localStorage.getItem("storage"))

// $(".container").on("click", function(event){
  
//   if (event.target.matches("button")){
    
//     var dataValu= $(".description").val()
//     if (!dataValu){
//       console.log("Error: Must enter a data to be able to save")
//     }
//     else{
//       localStorage.setItem("storage", dataValu);
//     }


//   }
// })

