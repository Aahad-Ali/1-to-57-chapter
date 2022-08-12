// ======================= 1 chapter ===============================

let alt = "Thanks for your input!";
alert(alt);

// ======================= 2 chapter ===============================

let nationality;
nationality = "";
let names = "My name is mark" + "\n" + "My nationality is U.S.";
alert(names, nationality);


// ======================= 3 chapter ===============================

let originalNum = 23;
let addednum = 7;
let add = originalNum + addednum;
alert(add);


let originalNum2 = 90;
let originalNums = originalNum2 + 10;
alert(originalNums);

// ======================= 4 chapter ===============================

let legel = "Legel OR Illegel letiables" + "\n" + "\n" + "userResponse" + "\n" + "userResponseTime" + "\n" + "userResponseTimeLimit" + "\n" + "response";
alert(legel);


// ======================= 5 chapter ===============================


let popularNumber = 2 + 2;
alert(popularNumber);

let num = 10;
let anotherNum = 1;
let popularNumbers = num + anotherNum;
alert(popularNumbers);


// ======================= 6 chapter ===============================

let num1 = prompt("enter any num ruturen + 1");
let addNum = num1 + 1;
alert(addNum);

let num2 = 1;
let newNum = num2++;
alert(newNum);

let num3 = 1;
let newNum1 = num3--;
alert(newNum1);


// ======================= 7 chapter ===============================

let totalCost = 1 + (3 * 4);
alert(totalCost);

let totalCost1 = (1 + 3) * 4;
alert(totalCost1);

let resultOfComputation = (2 * 4) * 4 + 2;
alert(resultOfComputation);

let resultOfComputation1 = ((2 * 4) * 4) + 2;
alert(resultOfComputation1);

let resultOfComputation2 = (2 * 4) * (4 + 2);
alert(resultOfComputation2);

// ======================= 8 chapter ===============================



let message1 = "Thanks, ";
let banger1 = "!";
let userName1 = "Aahad";
let msg = message1 + userName1 + banger1;
alert(msg);

let message = "Thanks, ";
let banger = "!";
let userName = prompt("PLZ enter any msg ");
alert(message + userName + banger);

alert("2 plus 2 equals " + 2 + 2);

// ======================= 9 chapter ===============================

let question = "Your species?";
let defaultAnswer = "human";
let spec = prompt(question, defaultAnswer);

let numberOfCats = prompt("How many cats?");
let tooManyCats = numberOfCats + 1;
alert(tooManyCats);

// ======================= 10 chapter ===============================

let x = prompt("Which city you live?");
if (x === "karachi") {
    alert("Correct!");
}

let y = prompt("Which country you live? 'PLZ enter capital words");
if (y === "PAKISTAN") {
    // score++;
    userIQ = "genius";

    alert("Correct!" + "\n" + userIQ);
}

// ======================= 11 chapter ===============================

alert("VOTE casting Web App");
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let age = prompt("Enter your age");
if (age >= 18) {
    alert(firstName + " " + lastName + " " + "you are eligible to casting vote");
}
else {
    alert(firstName + " " + lastName + " " + "you are not eligible to casting vote");
}

// ======================= 12 chapter ===============================


let country =  prompt("Enter your country name")
let city = prompt("Enter the capital of PAKISTAN")
if (country === "pakistan") {
    alert("Correct!");
}
else if (city === "islamabad") {
    alert("correct");
}
else {
    alert("Incorrect");
}
