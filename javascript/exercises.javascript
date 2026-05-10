// ==========================
// TASK 1
// ==========================
console.log(typeof 42);
console.log(typeof "42");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});

// ==========================
// TASK 2
// ==========================
const firstName = "Sara";
let myAge = 22;
let score = 0;
score = 100;
let bad = "bad";

// ==========================
// TASK 3
// ==========================
const name = "Sara";
const age = 20;
const grade = "B";
const isPassed = true;

console.log(`Student ${name}, age ${age}, got grade ${grade}. Passed: ${isPassed}`);

// ==========================
// TASK 4
// ==========================
const msg = "I love javascript programming";

console.log(msg.length);
console.log(msg.toUpperCase());
console.log(msg.slice(7, 17));
console.log(msg.includes("love"));

// ==========================
// TASK 5
// ==========================
console.log(0 == false);
console.log(0 === false);
console.log("1" == 1);
console.log("1" === 1);
console.log("" == false);
console.log(null == undefined);
console.log(null === undefined);

// ==========================
// TASK 6
// ==========================
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b);

// ==========================
// TASK 7
// ==========================
console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean([]));
console.log(Boolean(NaN));

// ==========================
// TASK 8
// ==========================
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
console.log(2 ** 3 * 2);
console.log(10 % 3 + 1);
console.log(5 + 3 > 7 && 4 !== 5);

// ==========================
// TASK 9
// ==========================
console.log(true && "hello");
console.log(false && "hello");
console.log(0 || "default");
console.log("value" || "default");
console.log(null ?? "fallback");

// ==========================
// TASK 10
// ==========================
const price = 120;
const quantity = 3;
const discountPercent = 10;

const subtotal = price * quantity;
const discount = subtotal * discountPercent / 100;
const total = subtotal - discount;

console.log(`subtotal: ${subtotal}`);
console.log(`discount: ${discount}`);
console.log(`total: ${total}`);

// ==========================
// TASK 11
// ==========================
let number = 17;

if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

// ==========================
// TASK 12
// ==========================
let x = 10;

x += 5;
x *= 2;
x -= 3;
x **= 2;
x %= 7;

console.log(x);

// ==========================
// TASK 13
// ==========================
const weight = 70;
const height = 1.75;

const bmi = weight / (height ** 2);

console.log(`BMI: ${bmi.toFixed(1)}`);

// ==========================
// TASK 14
// ==========================
const isLoggedIn = true;
const isAdmin = false;
const userAge = 20;

console.log(isLoggedIn && userAge >= 18);
console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || userAge >= 21);

// ==========================
// TASK 15
// ==========================
let light = "yellow";

if (light === "green") {
  console.log("Go!");
} else if (light === "yellow") {
  console.log("Slow down");
} else if (light === "red") {
  console.log("Stop!");
} else {
  console.log("Unknown signal");
}

// ==========================
// TASK 16
// ==========================
const age2 = 25;
const isMember = true;

if (age2 >= 18 && isMember) {
  console.log("Full access — welcome member!");
} else if (age2 >= 18 && !isMember) {
  console.log("Guest access — consider joining");
} else if (age2 < 18 && isMember) {
  console.log("Junior member access");
} else {
  console.log("No access");
}

// ==========================
// TASK 17
// ==========================
let msg2 = 10 > 5 ? "yes" : "no";

let fee = isMember ? 5 : 20;

let score2 = 70;
let label = score2 >= 50 ? "pass" : "fail";

console.log(msg2);
console.log(fee);
console.log(label);

// ==========================
// TASK 18
// ==========================
let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;

  default:
    console.log("Invalid month");
}

// ==========================
// TASK 19
// ==========================
let n = 15;

if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(n);
}

// ==========================
// TASK 20
// ==========================
let password = "Hello1!";

if (password.length < 6) {
  console.log("Weak");
} else if (password.length < 10) {
  console.log("Medium");
} else {
  console.log("Strong");
}

// ==========================
// TASK 21
// ==========================
const y = 5;

console.log(y > 3 && y < 10 ? "in range" : "out");
console.log(!!0);
console.log(!!"hello");
console.log(y === 5 || y === 10 ? "match" : "no");

// ==========================
// TASK 22
// ==========================
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

// ==========================
// TASK 23
// ==========================
for (let i = 1; i <= 10; i++) {
  console.log(`7 × ${i} = ${7 * i}`);
}

// ==========================
// TASK 24
// ==========================
let num = 1;

while (!(num % 6 === 0 && num % 8 === 0)) {
  num++;
}

console.log(num);

// ==========================
// TASK 25
// ==========================
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// ==========================
// TASK 26
// ==========================
let rockets = 5;

do {
  console.log(`${rockets}...`);
  rockets--;
} while (rockets > 0);

console.log("Blast off!");

// ==========================
// TASK 27
// ==========================
for (let n2 = 2; n2 <= 50; n2++) {
  let isPrime = true;

  for (let i = 2; i < n2; i++) {
    if (n2 % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(n2);
  }
}

// ==========================
// TASK 28
// ==========================
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}