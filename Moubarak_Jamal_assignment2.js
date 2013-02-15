//alert("JavaScript works!");

// Jamal Moubarak
// Project 2
// SDI 1302
// Function and Loops

//My variables
var timesOfDay = [2, 5, 9, 12, 2],
	people = ["Myself", "Clients", "Children"],
	actions = ["homework", "work", "sleep", "wakeup"];

// console.log("My " + people[2] + " told me to " + actions[3] + " at " + timesOfDay[4] + " 		pm");


// Function
var timesOfDay = function(firstNumber,secondNumber){
	var outcome = firstNumber/secondNumber;
	
	return outcome;
};


// Main code
var divOutcome = timesOfDay(10,5);

console.log("It's " + divOutcome + "am" + "... Should I do " + actions[0] + 
			" or should I go to sleep so I can");

			divOutcome = timesOfDay(18,2);
			console.log(actions[3] + " at " + divOutcome + 
			"am to get an early start in the morning? " + 
			actions[0] + " it is!");

// Boolean Function 
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
			
// Number Function
var snooze = 3;
while (snooze > 0) {
	console.log("I have " + snooze + " hours before I have to be up");
	snooze--;
};

console.log("It's noon... Time to get out of bed.");


/*
// Project1
// My variables
var people = "clients";
var alarm = "snooze button";
var sleep = true;
var calls = 5;
var kidsYelling = "joyfully yelling \"Daddy is awake\"";

// My outputs
console.log("It's 2am... " + "It is " + sleep + " I should go to sleep " + "so I can" + 
			" wake up to get an early start, " + "but I stay up doing homework until 5am.");
console.log("It's 9am... " + "Should I wake up" + " and go with only a couple hours of sleep" + 			" or hit the " + alarm + " and be refreshed?" + " Snooze button it is." );
console.log("I reach over and grab my phone, " + calls + " missed calls from clients.");

			
// My conditionals
if (sleep === true) {
	if (calls >= 5) {
		calls = calls + 30 - (5 * 5) * 1;
		console.log("If I have " + calls + 
					" missed calls from clients. " + 
					"I have to wake up right away. ");
	} else {
		console.log("I can sleep all day.");
	}
} else {
	console.log("They can wait" + " as I lay my head back down " + 
					"to get some more sleep" + " so I will be nice and refreshed " + 
					"to start my work day.")
}

// My outputs
console.log("It's noon... " + "My chilren are so happy to see me that they are " + kidsYelling + 			" so I spend a couple hours with them.");
console.log("It's 2pm... " + "I walk out the door to visit my " + people + 
			". It's midnight... It's 5am... " + 
			"Time to lay my head down so I can do it all over again tomorrow.");
*/