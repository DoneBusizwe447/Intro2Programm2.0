

// var myNumber = prompt("Enter your favorite day of the week!");
// var theResponse;
// switch (myNumber) {
//  case "Monday":
//  theResponse = "Ack!";
//  break;
//  case "Tuesday":
//  theResponse = "Taco day!";
//  break;
//  case "Wednesday":
//  theResponse = "Halfway there!";
//  break;
//  case "Thursday":
//  theResponse = "Its the new Friday!";
//  break;
//  case "Friday":
//  theResponse = "TGIF! Yeah!";
//  break;
//  case "Saturday":
//  theResponse = "What a day!";
//  break;
//  case "Sunday":
//  theResponse = "Sunday = Funday!";
//  break;
//  default:
//  theResponse = "I havent heard of that one!";
//  break;
// }
// alert (theResponse);

let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
let d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML  = d;
    todayDate.innerHTML = d.toDateString ();
}

function displayActivity() {
let dayOfWeek = d.getDay () ;
let youShould;
 switch (dayOfWeek) {
 case 0:
 youShould = "Take it easy. You've earned it.";
 break;
 case 1:
 youShould = "Gotta do what ya gotta do!";
 break;
 case 2:
 youShould = "Take time to smell the roses!";
 break;
  case 3:
 youShould = "Don't forget to eat breakfast!";
  break;
 case 4:
 youShould = "Learn something new today!";
 break;
 case 5:
 youShould = "Make a list of things you like to do.";
 break;
 case 6:
 youShould = "Do one thing from your list of things you like to do.";
 break;
 default:
 youShould = "Hmm. Something has gone wrong.";
 break;
 }
 // output the value of youShould into the thingToDo div
 document.getElementById("thingToDo").innerHTML = 
youShould;
}

    // todo: find out the day of the week.

    /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */
    
    // todo: output the value of youShould into the thingToDo div
