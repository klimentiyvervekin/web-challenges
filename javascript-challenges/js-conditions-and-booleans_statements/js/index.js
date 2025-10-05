console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even Number");
} else {
  console.log("odd Number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let price;

if (numberOfHotdogs < 5) {
  price = numberOfHotdogs * 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  price = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  price = numberOfHotdogs * 0.5;
} else {
  price = numberOfHotdogs * 0.1;
}

console.log("Total price: " + price + " euros");

// Part 4: Daytime
const currentHour = 12;

let statement;

if (currentHour < 17) {
  statement = "Still need to learn...";
} else {
  statement = "Partytome!!!";
}

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coachName = "Brunhilde1984";

const greeting = "Hello " + (userName === coachName ? "Coach" : userName) + "!";

console.log(greeting);
