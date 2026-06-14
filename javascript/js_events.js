// Task 1
let likes = 0;

const likeBtn = document.getElementById("likeBtn");
const resetBtn = document.getElementById("resetBtn");
const likeCount = document.getElementById("likeCount");

likeBtn.addEventListener("click", () => {
    likes++;
    likeCount.textContent = `Likes: ${likes}`;
});

resetBtn.addEventListener("click", () => {
    likes = 0;
    likeCount.textContent = "Likes: 0";
});


// Task 2
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");

greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name) {
        greetMsg.textContent = `Hello, ${name}!`;
    } else {
        greetMsg.textContent = "Please enter your name first.";
    }

    nameInput.value = "";
    nameInput.focus();
});


// Task 3
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("input", () => {
    const text = liveInput.value;

    liveOutput.textContent = text === "" ? "Waiting..." : text;

    if (text.length > 20) {
        liveOutput.classList.add("long");
    } else {
        liveOutput.classList.remove("long");
    }
});


// Task 4
const keyInput = document.getElementById("keyInput");
const keyLog = document.getElementById("keyLog");

keyInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        keyInput.value = "";
        keyLog.textContent = "";
        return;
    }

    let output = "";

    if (e.ctrlKey) output += "Ctrl + ";
    if (e.shiftKey) output += "Shift + ";
    if (e.altKey) output += "Alt + ";

    output += e.key;
    keyLog.textContent = output;
});


// Task 5
const taskList = document.getElementById("taskList");

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.style.textDecoration =
            e.target.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    }
});

taskList.addEventListener("dblclick", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});


// Task 6
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.emailInput.value.trim();
    const subject = e.target.subjectInput.value.trim();

    if (!email || !subject) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "red";
    } else {
        formStatus.textContent = `Message sent to ${email}!`;
        formStatus.style.color = "green";

        e.target.emailInput.value = "";
        e.target.subjectInput.value = "";
    }
});
