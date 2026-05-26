// --- 1. Create the Data ---

const menu = [
  { id: 1, name: "Burger", category: "Food", price: 35, available: true },
  { id: 2, name: "Pizza", category: "Food", price: 50, available: true },
  { id: 3, name: "Orange Juice", category: "Drink", price: 12, available: false },
  { id: 4, name: "Cola", category: "Drink", price: 8, available: true },
  { id: 5, name: "Ice Cream", category: "Dessert", price: 15, available: true },
  { id: 6, name: "Salad", category: "Food", price: 25, available: true },
  { id: 7, name: "Cheesecake", category: "Dessert", price: 30, available: false },
  { id: 8, name: "Pasta", category: "Food", price: 45, available: true }
];

const customer = {
  name: "Ahmad",
  budget: 100,
  isStudent: true
};

const order = [1, 4, 5]; // IDs of items the customer wants

// --- 2. Display the Menu ---

function displayMenu() {
  menu.forEach(item => {
    const status = item.available ? "Available" : "Not Available";
    console.log(`${item.id} - ${item.name} | ${item.category} | ${item.price} NIS | ${status}`);
  });
}

function getAvailableItems() {
  return menu.filter(item => item.available);
}

function findItemById(id) {
  const item = menu.find(item => item.id === id);
  return item ? item : "Item not found.";
}

// --- 3. Order Logic ---

function getOrderItems() {
  return order.map(id => menu.find(item => item.id === id));
}

function validateOrder() {
  for (let id of order) {
    const item = menu.find(i => i.id === id);
    if (!item) {
      console.log(`Item ID ${id}: This item does not exist.`);
      return false;
    }
    if (!item.available) {
      console.log(`Item ID ${id} (${item.name}): Sorry, this item is currently not available.`);
      return false;
    }
  }
  return true;
}

// --- 4. Payment and Discount ---

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

function applyDiscount(total) {
  let discountPercentage = 0;
  
  // Find the biggest applicable discount
  if (total > 150) {
    discountPercentage = 20;
  } else if (total > 100) {
    discountPercentage = 15;
  } else if (customer.isStudent) {
    discountPercentage = 10;
  }

  const discountAmount = (total * discountPercentage) / 100;
  const finalTotal = total - discountAmount;

  return {
    originalTotal: total,
    discountPercentage: discountPercentage,
    discountAmount: discountAmount,
    finalTotal: finalTotal
  };
}

function canCustomerPay(finalTotal) {
  return customer.budget >= finalTotal;
}

// --- 5. Print the Receipt ---

function printReceipt(items, discountInfo, paymentStatusBool) {
  console.log("========== RECEIPT ==========");
  console.log("Restaurant: JavaScript Burger House");
  console.log(`Customer: ${customer.name}`);
  console.log("Items:");
  
  items.forEach(item => {
    console.log(`- ${item.name}: ${item.price} NIS`);
  });
  
  console.log(`Original Total: ${discountInfo.originalTotal} NIS`);
  console.log(`Discount: ${discountInfo.discountPercentage}%`);
  console.log(`Discount Amount: ${discountInfo.discountAmount} NIS`);
  console.log(`Final Total: ${discountInfo.finalTotal} NIS`);
  console.log(`Customer Budget: ${customer.budget} NIS`);
  
  const statusStr = paymentStatusBool ? "Paid Successfully" : "Not Enough Money";
  console.log(`Payment Status: ${statusStr}`);
  console.log("=============================");
}

// --- 6. Main Program Flow ---

console.log("--- Menu ---");
displayMenu();

console.log("\n--- Available Items ---");
console.log(getAvailableItems());

console.log("\n--- Processing Order ---");
if (validateOrder()) {
  const orderedItemsObjects = getOrderItems();
  const total = calculateTotal(orderedItemsObjects);
  const discountDetails = applyDiscount(total);
  const isPaid = canCustomerPay(discountDetails.finalTotal);
  
  printReceipt(orderedItemsObjects, discountDetails, isPaid);
} else {
  console.log("Order failed validation. Please check your items.");
}
