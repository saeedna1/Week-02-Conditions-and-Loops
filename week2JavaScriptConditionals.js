// Week 2 Javascript Conditionals

//Print The Smaller Number: 
//Write an if/else if statement that prints the smaller of the two given inputs, num1 and num2.If they are the same, using console.log() print "same"
if(2 < 3){
   console.log("2");
} else if (2 == 3){
    console.log("same");
}

let num1;
let num2;
 if(num1 == num2){
    console.log("same");
} else if (num1 < num2){
    console.log(num1);
} else {
    console.log(num2);
}

//What will print to the console if num1 = 5 and num2 = 5? answer is A
if(num1 == num2){
    console.log("A");
} else if (num1 >= num2){
    console.log("B"); 
} else {
    console.log("C");
}




//Number Comparison: 
//Create an if/else if statement that checks myNumber against num1 and based on which condition evaluates to true, print the following messages using console.log():
//num1 + " is smaller than my number, " + myNumber num1 + " is larger than my number, " + myNumber num1 + " is equal to my number, " + myNumber
let myNumber;

if (num1 < myNumber){
    console.log(num1 + " is smaller than my number, " + myNumber);

} else if (num1 > myNumber){
    console.log(num1 + " is larger than my number, " + myNumber);

} else {
    console.log(num1 + " is equal to my number, " + myNumber);
}





//What will print to the console if num1 = 3 and num2 = 5? the answer is C
if (num1 == num2){
    console.log("A");
} else if (num1 > num2){
    console.log("B");
} else {
    console.log("C");
}





//Day Of The Week: 
//Write a switch statement that checks the already declared variable numberOfDay and using console.log() prints the corresponding name of the day of the week.
//For example, if numberOfDay is equal to 1, "Sunday" will be printed to the console.
//If the numberOfDay is not between 1 and 7, print "The number of day is invalid."
//The word between is inclusive, so any number from 1 to 7 is a valid numberOfDay

let numberOfDay = 1;
switch(numberOfDay){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("The number of day is invalid.");
}


//If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
//answer is true.



//Can I Buy A Soda? 
//Write an if statement that checks to see if there is enough money to cover the cost of a soda. Use the already declared variables money and costOfSoda. Use console.log() to print one of the following results:
//If there is enough money to cover the cost of a soda, print "I can buy a soda!"
//If not, print "I need to earn some more money!"
let money;
let costOfSoda;
if(money >= costOfSoda){
    console.log("I can buy a soda!");
  } else {
    console.log("I need to earn some more money!");
  }

//The else statement only runs when the if statement evaluates to false. answer is True



//Old Enough To Drive? 
//Write an if statement that checks if the given age is greater than or equal to 16.
//If it is, set canDrive to true and using console.log() print its value to the console.
//Use the already declared variables of age and canDrive.
let canDrive = false;
let age = 16;
if(canDrive < age){
    canDrive = 16
    console.log("true");
}

//What will print to the console?
var num3 = 37;
if(num3){
    console.log("Parakeet");
} else {
    console.log("Parrot")
}




//What Is My Letter Grade? 
//Write a series of if/else if statements using the already declared variables numberGrade and letterGrade 
//that check the numberGrade and assign letterGrade to a string of the corresponding letter grade.
//Print the letter grade to the console using console.log().
var numberGrade = 90;
var letterGrade;

if(numberGrade >= 90){
    letterGrade = 'A';
} else if(numberGrade >= 80){
    letterGrade = 'B';
} else if(numberGrade >= 70){
    letterGrade = 'C';
} else if(numberGrade >= 60){
    letterGrade = 'D';
} else {
    letterGrade = 'F';
}
console.log(letterGrade);

//If the first if statement returns true, the program will skip the rest of the else if statements.
//answer is True.


//Print the Larger Number: 
//Write an if else/if statement that compares num1 to num2 and using console.log() prints the larger of the two. If they are equal, print "num1 is equal to num2"
var num4 = 1;
var num5 = 1;
if (num4 == num5) {
    console.log("num1 is equal to num2");
 } else if (num4 < num5) {
    console.log(num5);
 } else {
    console.log(num4);
 }

//Which conditional statement would be best if you want to check the value of a variable and it can only be 1 of 5 values?
//answer is Switch




//Nested If Statement: 
//Create a nested if statement (the second if statement will only run if the first one evaluates to true) that does the following:
//The first if statement will check to see if num1 is greater than or equal to num2 .
//If the first if statement evaluates to true, then check to see if num3 is greater than or equal to num4.

//Once you've created the nested if statement, add the following using console.log():
//If both conditions are true, print: "Both statements are true."
//If the first condition is true but the second is false, print: "The first statement is true, but the second is not."
//In all cases, after the outer if statement, print "Program ended."
//Note:Make sure the output of your code matches the requested output, including punctuation.

let num11 = 5;
let num22 = 10;
let num33 = 20;
let num44 = 15;

if (num11 >= num22) {
  if (num33 >= num44) {
    console.log("Both statements are true.");
  } else {
    console.log("The first statement is true, but the second is not.");
  }
}
console.log("Program ended.");

//What will be printed to the console?
if (45 > 45){
    console.log("PoodIes")   
} else {
    console.log("Labradors");
}




///Which Month Is It? 
//Write a switch statement to check the value of the already declared variable monthNumber and then when the match is made,
//using console.log() print out the name of that month in a string.
//Example: if the monthNumber is equal to 7, print out "July" to the console.
//If the monthNumber is not between 1 and 12, print out "Invalid Month" to the console.
//Note;For example, if the monthNumber is equal to 5, the console should print out "May". If the number is not 1 through 12, print out "Invalid Month".

var monthNumber = 1;
switch(monthNumber){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");             
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("invalid Monthe");       

}




//Equality Comparison: 
//Write an if statement that compares num1 to num2. If they are equal,
//use console.log() to print "num1 is equal to num2"
if(num1 == num2){
    console.log("num1 is equal to num2")
}

//If the condition in an if statement is false and there is no else
//statement present, the code within the if statement is skipped
// answer is True
