"use strict";
//document.getElementById("count-el").innerText = 5;

function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
countdown();

function numberFour() {
    console.log(4);
}
numberFour();

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sumOfLaps() {
    let totalTime = lap1 + lap2 + lap3;
    console.log(totalTime);
}
sumOfLaps();

let lapsCompleted = 0;

function lapsIncrement() {
    lapsCompleted += 1;
    console.log(lapsCompleted);
}
lapsIncrement();
lapsIncrement();
lapsIncrement();

let countEl = document.getElementById("count-el");
let count = 0;
    function increment() {
        count += 1;
        countEl.innerText = count;
    }

    function save() {
        console.log(count);
    }

let message = "You have three new notifications";
console.log(message);
let username = "Thor";
console.log(username);

let messageToUser = message + ", " + username + "!";
console.log(messageToUser);

let userName = "Carlos";
let greeting = "Hi, my name is ";
let myGreeting = greeting + userName;
console.log(myGreeting);

console.log(4 + 5); // 9
console.log("2" + "4"); // 24
console.log("5" + 2); // 51
console.log(100 + "100") // 100100

