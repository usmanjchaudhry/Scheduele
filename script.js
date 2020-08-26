//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//These are all the variables that will be used throughout the script
var row1 = $("#row1");
var row2 = $("#row2");
var row3 = $("#row3");
var row4 = $("#row4");
var row5 = $("#row5");
var row6 = $("#row6");
var row7 = $("#row7");
var row8 = $("#row8");
var row9 = $("#row9");

var saveBtn = $(".saveBtn");
var textBox = $(".time-block");
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//This where we get the date to appear on the jumbotron at the top of the page.
$(document).ready(function () {
  var currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentDate);
  var currentTime = moment().format("H");
});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//This is where the rows change color depending on the time of day
var changeColors = function () {

  var now = moment().hour();// we are going to use this variable to compare the current time in order to change the colors

  textBox.each(function (index, element) {//The color stays green unless any of these rules are met, if they are met then the color is changed from green to whatever color needed
    element = $(element);
    if (now > element.attr("data-time")) {
      element.addClass("past").removeClass("future");
    } else if (now == element.attr("data-time")) {
      element.addClass("present").removeClass("future");
    }
  });
};
setInterval(changeColors, 100);//This sets the function to be updated every tenth of a second
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//retreives the users data by getting the value of whatever is in each row and parsing it to create a javascript object with it
retreiveUserInput();

function retreiveUserInput() {
  var userRow1 = localStorage.getItem("row1");// saving the value of row 1 into a var called userRow1
  $("#row1").val(JSON.parse(userRow1));

  var userRow2 = localStorage.getItem("row2");
  $("#row2").val(JSON.parse(userRow2));

  var userRow3 = localStorage.getItem("row3");
  $("#row3").val(JSON.parse(userRow3));

  var userRow4 = localStorage.getItem("row4");
  $("#row4").val(JSON.parse(userRow4));

  var userRow5 = localStorage.getItem("row5");
  $("#row5").val(JSON.parse(userRow5));

  var userRow6 = localStorage.getItem("row6");
  $("#row6").val(JSON.parse(userRow6));

  var userRow7 = localStorage.getItem("row7");
  $("#row7").val(JSON.parse(userRow7));

  var userRow8 = localStorage.getItem("row8");
  $("#row8").val(JSON.parse(userRow8));

  var userRow9 = localStorage.getItem("row9");
  $("#row9").val(JSON.parse(userRow9));
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//if statment in case each row has a null object will return 
  if (
    userRow1 &&
    userRow2 &&
    userRow3 &&
    userRow4 &&
    userRow5 &&
    userRow6 &&
    userRow7 &&
    userRow8 &&
    userRow9 === null
  ) {
    return;
  }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//taking the text content from each row and storing it into the var userRow
  row1.textContent = userRow1;
  row2.textContent = userRow2;
  row3.textContent = userRow3;
  row4.textContent = userRow4;
  row5.textContent = userRow5;
  row6.textContent = userRow6;
  row7.textContent = userRow7;
  row8.textContent = userRow8;
  row9.textContent = userRow9;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//what happens when u click save button.
saveBtn.on("click", function (event) {
  event.preventDefault();
  var input1 = $("#row1").val();
  localStorage.setItem("row1", JSON.stringify(input1));

  var input2 = $("#row2").val();
  localStorage.setItem("row2", JSON.stringify(input2));

  var input3 = $("#row3").val();
  localStorage.setItem("row3", JSON.stringify(input3));

  var input4 = $("#row4").val();
  localStorage.setItem("row4", JSON.stringify(input4));

  var input5 = $("#row5").val();
  localStorage.setItem("row5", JSON.stringify(input5));

  var input6 = $("#row6").val();
  localStorage.setItem("row6", JSON.stringify(input6));

  var input7 = $("#row7").val();
  localStorage.setItem("row7", JSON.stringify(input7));

  var input8 = $("#row8").val();
  localStorage.setItem("row8", JSON.stringify(input8));

  var input9 = $("#row9").val();
  localStorage.setItem("row9", JSON.stringify(input9));

  retreiveUserInput();
});
