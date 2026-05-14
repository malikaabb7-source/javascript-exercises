// STEP 1 — Create the initial list
let students = ["Dania", "Omar", "Lina", "Rami"];

// STEP 2 — Add a new student to the end
students.push("Sara");

// STEP 3 — Add a new student to the beginning
students.unshift("Adam");

// STEP 4 — Update a name
students[students.indexOf("Lina")] = "Lamar";

// STEP 5 — Remove the last student
let removedLast = students.pop();

// STEP 6 — Remove the first student
let removedFirst = students.shift();

// STEP 7 — Check if a name exists
let hasRami = students.includes("Rami");

// STEP 8 — Find the position of a student
let omarIndex = students.indexOf("Omar");

// STEP 9 — Create a new group
let groupA = students.slice(0, 2);

// STEP 10 — Merge groups
let groupB = ["Nour", "Tala"];

let allGroups = groupA.concat(groupB);

// STEP 11 — Create a readable text version
let groupString = allGroups.join(" | ");

// STEP 12 — Sort alphabetically
students.sort();

// STEP 13 — Reverse the order
students.reverse();

// STEP 14 — Modify a list using a single command
let seats = [1, 2, 3, 4, 5];

seats.splice(1, 3, "Reserved", "Reserved", "Reserved");

let reservedSeats = seats;

// STEP 15 — Convert an array to text
let studentsString = students.join(", ");

// STEP 16 — Final Output
console.log(students);
console.log(removedLast);
console.log(removedFirst);
console.log(hasRami);
console.log(omarIndex);
console.log(groupA);
console.log(allGroups);
console.log(groupString);
console.log(reservedSeats);
console.log(studentsString);
