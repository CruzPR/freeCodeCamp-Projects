"use strict";
(function (){
    // Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.
    // Only change code below this line
    var a = 5;
    var b = 10;
    var c = "I am a";
    // Only change code above this line

    a = a + 1;
    b = b + 5;
    c = c + " String!";

    // Modify the existing declarations and assignments so their names use camelCase.
    // Do not create any new variables.
    // Variable declarations
    var studlyCapVar;
    var properCamelCase;
    var titleCaseOver;

    // Variable assignments
    studlyCapVar = 10;
    properCamelCase = "A String";
    titleCaseOver = 9000;

    // Update the code so it only uses the let keyword.
    let catName = "Oliver";
    let catSound = "Meow!";

    // Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices.
    const FCC = "freeCodeCamp"; // Change this line
    let fact = "is cool!"; // Change this line
    fact  = "is awesome!";
    console.log(FCC, fact); // Change this line

    // Change the 0 so that sum will equal 20.
    const sum = 10 + 10;
    // Change the 0 so the difference is 12.
    const difference = 45 - 33;
    // Change the 0 so that product will equal 80.
    const product = 8 * 10;
    // Change the 0 so that the quotient is equal to 2.
    const quotient = 66 / 33;
    // Change the code to use the ++ operator on myVar.
    let myVar = 87;
    // Only change code below this line
    myVar++;
    // Change the code to use the -- operator on myVar.
    let myVar = 11;
    // Only change code below this line
    myVar--;
    // Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
    const ourDecimal = 5.7;
    // Only change code below this line
    let myDecimal = 5.7;
    // Change the 0.0 so that product will equal 5.0.
    const product = 2.0 * 2.5;
    // Change the 0.0 so that quotient will equal to 2.2.
    const quotient = 4.4 / 2.0; // Change this line
    // Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
    const remainder = 11 % 3;
    // Convert the assignments for a, b, and c to use the += operator.
    let a = 3;
    let b = 17;
    let c = 12;
    // Only change code below this line
    a += 12;
    b += 9;
    c += 7;
    // Convert the assignments for a, b, and c to use the -= operator.
    let a = 11;
    let b = 9;
    let c = 3;
    // Only change code below this line
    a -= 6;
    b -= 15;
    c -= 1;
    // Convert the assignments for a, b, and c to use the *= operator.
    let a = 5;
    let b = 12;
    let c = 4.6;
    // Only change code below this line
    a *= 5;
    b *= 3;
    c *= 10;
    // Convert the assignments for a, b, and c to use the /= operator.
    let a = 48;
    let b = 108;
    let c = 33;
    // Only change code below this line
    a /= 12;
    b /= 4;
    c /= 11;
    // Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
    const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
    console.log(myStr);
    /*
    Change the provided string to a string with single quotes at the beginning and end and no escape characters.
    Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.
    */
    const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
   /* Assign the following three lines of text into the single variable myStr using escape sequences.
        FirstLine
    \SecondLine
        ThirdLine
    */
    const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
    // Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.
    const myStr = "This is the start." + " This is the end."; // Change this line
    /* Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.*/
    let myStr = "This is the first sentence. ";
    myStr += "This is the second sentence.";
    // Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!
    // Only change code below this line
    const myName = "Carlos";
    const myStr = "My name is " +myName+ " and I am well!";
    // Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
    // Change code below this line
    const someAdjective = "the best!";
    let myStr = "Learning to code is ";
    myStr += someAdjective;
    // Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.
    // Setup
    let lastNameLength = 0;
    const lastName = "Lovelace";
    // Only change code below this line
    lastNameLength = lastName.length;
    // Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
    // Setup
    let firstLetterOfLastName = "";
    const lastName = "Lovelace";
    // Only change code below this line
    firstLetterOfLastName = lastName[0]; // Change this line
    // Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
    // Setup
    let myStr = "Jello World";
    // Only change code below this line
    myStr = "Hello World"; // Change this line
    // Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
    // Setup
    const lastName = "Lovelace";
    // Only change code below this line
    const thirdLetterOfLastName = lastName[2]; // Change this line
    // Use bracket notation to find the last character in the lastName variable.
    // Setup
    const lastName = "Lovelace";
    // Only change code below this line
    const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
    // Use bracket notation to find the second-to-last character in the lastName string.
    // Setup
    const lastName = "Lovelace";
    // Only change code below this line
    const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
    // In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
    // You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.
    // You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.
    const myNoun = "dog";
    const myAdjective = "big";
    const myVerb = "ran";
    const myAdverb = "quickly";
    // Only change code below this line
    const wordBlanks = "My " +myNoun+ " bit a " +myAdjective+ " bone and then he " +myVerb+ " away " +myAdverb+"."; // Change this line
    // Only change code above this line
    // Modify the new array myArray so that it contains both a string and a number (in that order).
    // Only change code below this line
    const myArray = ["Carlos", 34];
    // Create a nested array called myArray.
    // Only change code below this line
    const myArray = [["Carlos", 34],["Sibel", 37]];
    // Create a variable called myData and set it to equal the first value of myArray using bracket notation.
    const myArray = [50, 60, 70];
    var myData = myArray[0];
    // Modify the data stored at index 0 of myArray to a value of 45.
    // Setup
    const myArray = [18, 64, 99];
    myArray[0] = 45;
    // Only change code below this line
    // Using bracket notation select an element from myArray such that myData is equal to 8.
    const myArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14],
    ];
    const myData = myArray[2][1];
    // Push ["dog", 3] onto the end of the myArray variable.
    // Setup
    const myArray = [["John", 23], ["cat", 2]];
    // Only change code below this line
    myArray.push(["dog", 3]);
    // Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
    // Setup
    const myArray = [["John", 23], ["cat", 2]];
    // Only change code below this line
    var removedFromMyArray = myArray.pop();
    // Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
    // Setup
    const myArray = [["John", 23], ["dog", 3]];
    // Only change code below this line
    var removedFromMyArray = myArray.shift();
    // Add ["Paul", 35] to the beginning of the myArray variable using unshift().
    // Setup
    const myArray = [["John", 23], ["dog", 3]];
    myArray.shift();
    // Only change code below this line
    myArray.unshift(["Paul", 35]);
    /*
    Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
    The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
     */
    const myList = [
        ["Carlos", 34],
        ["Sibel", 37],
        ["Gery", 35],
        ["Armando", 33],
        ["Norman", 34]];
    // Create a function called reusableFunction which prints the string Hi World to the dev console.
    // Call the function.

        function reusableFunction (){
            console.log("Hi World");
        }
        reusableFunction();

    // Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
    // Call the function with two numbers as arguments.

    function functionWithArgs(num1,num2) {
        console.log(num1 + num2);
    }
    functionWithArgs(1,3);

    // Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

    function timesFive(num) {
        return num * 5;
    }
    timesFive(5);

    // Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
    // Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.

    // Declare the myGlobal variable below this line
    let myGlobal = 10;

    function fun1() {
        // Assign 5 to oopsGlobal Here
        oopsGlobal = 5;
    }

// Only change code above this line

    function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
            output += "myGlobal: " + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
            output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
    }







































































})();