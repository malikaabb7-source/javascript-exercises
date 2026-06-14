const title = document.getElementById("mainTitle");
const description = document.querySelector(".description");
const featuresList = document.getElementById("features");
const link = document.getElementById("mainLink");

// Task 1
console.log(title.textContent);
console.log(description.innerHTML);

// Task 2
title.textContent = "Welcome to the Dashboard";
description.textContent =
  "Welcome! The dashboard is now ready and all features are available.";
description.classList.remove("hidden");

// Task 3
title.classList.add("highlight");

// Task 4
document.querySelectorAll(".feature").forEach(item => {
  if (item.textContent === "REMOVE ME") {
    item.remove();
  }
});

// Task 5
const h2 = document.createElement("h2");
h2.textContent = "Available Features";
featuresList.parentNode.insertBefore(h2, featuresList);

// Task 6
console.log(link.getAttribute("href"));
link.href = "https://example.com";
link.textContent = "Go to Dashboard";
