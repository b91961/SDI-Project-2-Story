//alert("JavaScript works!");

// Jamal Moubarak
// Project 2
// SDI 1302
// Function and Loops

//My variables
var timesOfDay = [2, 5, 9, 12, 2],
	people = ["Myself", "Clients", "Children"],
	actions = ["homework", "work", "sleep", "wakeup"];

// Function
var timesOfDay = function(firstNumber,secondNumber){
	var outcome = firstNumber/secondNumber;
	
	return outcome;
};

var divOutcome = timesOfDay(10,5);

console.log("It's " + divOutcome + "am" + "... Should I do " + actions[0] + 
			" or should I go to sleep so I can");

			divOutcome = timesOfDay(18,2);
			console.log(actions[3] + " at " + divOutcome + 
			"am to get an early start in the morning? " + 
			actions[0] + " it is!");

// Function 
		var p = true, q = false, r = false;

// Given: (p ∧ q) ∨ r
	if ((p && q) || r) {
		console.log("I'll stay up and do some more " + actions[0] + "!");
		}else {
			console.log("It's 5am..." + " It is hard to keep my eyes open" + 
		" so I finally lay my head down to " + actions[2] + ".");
};

console.log("It's 9am... My alarm is annoyingly chirping, " + 
			"so I open my eyes, reach over and grab my phone to find " + 
			"5 missed calls from " + people[1] + ". " + "I tell " + people[0] + 
			" to hit snooze");
			
// Function
var snooze = 3;
while (snooze > 0) {
	console.log("I have " + snooze + " hours before I have to be up");
	snooze--;
};

console.log("It's noon... Time to get out of bed.");

// Function
var say = function(message) { console.log(message); };
say("My " + people[2] + " are so happy to see me awake, so I spend a couple hours with them");

// Function
var ending = ["It's", "2", "pm...", "I walk out the door", "clients", "missed calls"];
console.log (ending[0] + " " + ending[1] + " " + ending[2] + " " + ending[3] + 
			" trying to figureout what order to visit my " + 
			ending[4] + " in, which is usually by taking care of the client" + 
			" I have the most " + ending[5] + " from first." );

console.log ("It's midnight...")
console.log ("It's 5am...")








