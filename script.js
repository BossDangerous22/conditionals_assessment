// Part 1

let userChoice, randomNumber, computerChoice;

userChoice = prompt("Enter 'heads' or 'tails':");

randomNumber = Math.floor(Math.random() * 2);

if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}

if (userChoice.toLowerCase() === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}


// Part 2

let birthYear, currentYear, age;

birthYear = parseInt(prompt("Enter your birth year:"));

currentYear = new Date().getFullYear();
age = currentYear - birthYear;

if (age > 21) {
    alert("You are old enough to drink in the US");
} else if (age === 21) {
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US");
}
