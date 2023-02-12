// week 2 JavaScript Loop


//Let's play a Game:This is an advanced problem!
//Rules of this Game:
//The game will consist of 100 turns. On an even turn (if the number of turns is even), you gain 5 points. On an odd turn (if the number of turns is odd), you gain 3 points. If ever your score is equal to 125, you are reset back to 25 points. This will only be allowed to happen once (use the variable pointsReset to keep track of this). The game ends when either of the following two conditions is true:
//1. you are able to make it through 100 turns
//2. you reach more than 290 points, whichever comes first.
//Using a for loop, and the two already declared variables points and pointsReset, create the game.
var points = 0;
var pointsReset = false; 
 
for(var i = 0; i < 100 && points < 290; i++){
    if(points == 125 && pointsReset === false){
        points = 25;
        pointsReset = true;
    } else if(i % 2 === 0){
        points = points + 5;
    } else {
        points = points + 3;
    }
    
    console.log("Turns: " + i + " Score: " + points)
}

// If number of iterations is known, which loop is recommended?
// answer is /FOR.





//For Loop 1 to 100:
//Write a for loop that loops from 1 to 100. If the iteration count is even, print the iteration count and " foo" using console.log()
for (let i = 1; i <= 100; i++) {
   if (i % 2 === 0) {
     console.log(i + " foo");
   }
}
//Margaret wants to count backwards from 1000 to 0. Which loop can help her accomplish this?
//answer is for, do/while, while 




//ab tahte zelow  3 kulom hade aynet melse alom

//For Loop:
//Write a for loop that prints every third number from 0 up to and including 99, using console.log()
 for (let i = 0; i <= 99; i += 3) {
   console.log(i);
}

//OR

for(var i = 0; i <= 99; i++){
   if(i % 3 === 0){
       console.log(i);
   }
}

//OR
//Will the following code accomplish the same task?
var i = 0;
do{
   if (i % 3 === 0){
      console.log(i);
   }
   i++;
}
while (i <= 99)






//For Loop 0 to x:
//Write a for loop that prints the numbers 0 to x using console.log() x is an already declared variable and has been initialized for you based on user input.
var x;
for ( var i = 0; i <= x; ++i ) {
   console.log(i);
}
//By using i++, the increment operator increments and returns the value before incrementing.
//answer is ture.






//While Loop:
//Check to see if the already declared variable userNumber is between 1 and 100. If it is, create a while loop that prints all integers starting with userNumber and ending with 100. If not, print "Your number was not between 1 and 100." Use console.log() to print all requested information to the console.
var userNumber;
if (userNumber >= 1 && userNumber <= 100) {
   var i = userNumber;
   while (i <= 100) {
     console.log(i);
     i++;
   }
 } else {
   console.log("Your number was not between 1 and 100.");
 }
//If the number of iterations is unknown, you should use a for loop.
// answer is False.



var countdown;
if (countdown >= 3 && countdown <= 10) {
   while (countdown >= 1) {
     console.log(countdown + "...");
     countdown--;
   }
   console.log("We have lift off!");
 } else {
   console.log("We have lift off!");
}
 
//OR
if (countdown <= 10 && countdown >= 3) {
   while (countdown >= 1) {
       console.log(countdown + "...");
       countdown--;
   }
}

console.log("We have lift off!");


// What happens if your forget to add an increment or decrement operator in a while loop?
//Answer is You will create an infinite loop.



/*Multiplication Table:
Using the already declared variable num, create a for loop that prints out a multiplication table for num from 1 through 10 as follows using console.log()*/
var num = 1;
for (let i = 0; i <= 10; i++){
   console.log(num + " x " + i + " = " + (num * i));  
}
//*What happens if the condition is always true in a while loop?
//answer is = it will loop infinitely.





/*Fill Up A Bowl With Rice:
Using the supplied variables requiredCupsOfRice and currentCupsOfRice, create a loop of your choice that will add cups of rice to a bowl. When asked to print, use console.log()

currentCupsOfRice in this example is already declared and initialized to zero (0), and will represent the current number of cups of rice in the bowl, which will get incremented to indicate that you have added a cup of rice to the bowl. Each time a cup of rice is added, print the following:
           "The bowl contains " + currentCupsOfRice + " cups of rice." Once the number of cups called for has been reached, print the following:
          "We have enough rice!" Note: we don't need to know if the bowl is empty.
Don't forget to include the punctuation in the information that is printed.*/

var requiredCupsOfRice = 4;
var currentCupsOfRice = 0;

while (currentCupsOfRice < requiredCupsOfRice) {
  currentCupsOfRice++;
  console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");
}
console.log("We have enough rice!");

//Would the following block of code give us the same outcome?

/* do {console.log('The bowl contains' + currentCupsOfRice++ +'cups of rice.');
} while (currentCupsOfRice !== requiredCupsOfRice);
console.log ('We have enoug rice!'); 
Why this option is correct: NO
Because the increment operator (++) is postfix , or after the currentCupsOfRice, this block of code will print from 0 to one less than the required number of cups. If we move the increment operator to the front, this will work just the same.*/
