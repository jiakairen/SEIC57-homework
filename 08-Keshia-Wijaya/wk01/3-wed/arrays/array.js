// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

// console.log (maxOfTwoNumbers (7,10));

// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a,b,c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else if (c > a && c > b) {
        return c;
    }
}
// console.log (maxOfThree (7,1,5));

// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const character = function (myVow) {
    if (myVow === "a") {
        console.log ("It is a vowel");
    }
    else if (myVow === "i") {
        console.log ("It is a vowel");
    }
    else if (myVow === "u") {
        console.log ("It is a vowel");
    }
    else if (myVow === "e") {
        console.log ("It is a vowel");
    }
    else if (myVow === "o") {
        console.log ("It is a vowel");
    }
    else {
        console.log ("It is not a vowel");
    }
}

character ("k");

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


