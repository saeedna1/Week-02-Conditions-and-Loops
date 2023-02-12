// Week 2 Boolean Operators



//Is it the Weekend?
//If the day is "Sunday" or "Saturday", using console.log() print true , otherwise, print false
//Note:The values should be of type boolean, not strings.
//The comparison operator we want to use is ===.
//The OR operator is ||. This is known as a double pipe. It is typed with the key directly above the enter (or return) key.
var day;
console.log(day === "Sunday" || day === "Saturday");


//What is the expected output?

var a = 2;
var b = 15;
var c = 9;
console.log (a >= b || a <= c && a + c > b);





//Grade Comparison:
//Did I pass? Determine if myGrade is passing. Using console.log(), print true if it is and false if not.
//Did I get an A? Also, determine if myGrade is an A. Using console.log(), print the result to the console, either true or false. (An A will be a grade of 90 or above).
//Note:To determine if myGrade is passing, it must be greater than or equal to >= passingGrade.
//To determine if myGrade is an A, it must be greater than or equal to >= 90.
let myGrade = 92;
let passingGrade = 70;

if (myGrade >= passingGrade) {
  console.log(true);
} else {
  console.log(false);
}

if (myGrade >= 90) {
  console.log(true);
} else {
  console.log(false);
}

//OR
console.log(myGrade >= passingGrade);
console.log(myGrade >= 90);


//What will the printed output be?
var num10 = 16;
var num20 = 52;
var num30 = 45;
console.log(num10 >= num20 && num30 > num20);




//Let's go on vacation!
//We can go if we have enough money for a plane ticket and we have vacation time. 
//Use the already declared variables money, planeTicket and vacationTime. 
//Determine if we can go, and print the result to the console using console.log().

var money1;
var planeTicket;
var vacationTime;
if (money1 >= planeTicket && vacationTime){
    console.log(true);
} else{
    console.log(false);
}

//OR
console.log (money1 >= planeTicket && vacationTime);

//What does the following expression equate to?
//true && (false || true)
//answer is true




//Not Equal:
//Determine if var1 is not equal to var2. Print the result to the console using console.log().
var var1;
var var2;
console.log(var1 != var2);



//What is the output of the following code block?
console.log(45 === "45");
//When using the Strict Equality (===), the data type and the value must be equal. A Number is not equal to String when using ===.
// answer is false