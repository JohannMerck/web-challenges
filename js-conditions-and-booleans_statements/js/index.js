console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd

const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 5000000;

if (numberOfHotdogs < 5) {
  console.log("2 Euro bitte");
} else if (numberOfHotdogs <= 5) {
  console.log("1,50 Euro bitte");
} else if (numberOfHotdogs <= 100) {
  console.log("1 Euro bitte");
} else if (numberOfHotdogs >= 1000000) {
  console.log("10 Cent bitte");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting

const userName = "Esraa";
const coachName = "Esraa";

const greeting =
  "Hello " + (userName === coachName ? "coach" : "not my coach") + "!";

console.log(greeting);
