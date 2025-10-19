// CUSTOMER DATA
const orders = [
  { id: 1, customer: "Alice", items: ["laptop", "mouse"], total: 1200, status: "pending" },
  { id: 2, customer: "Bob", items: ["phone"], total: 800, status: "completed" },
  { id: 3, customer: "Charlie", items: ["keyboard", "mouse"], total: 150, status: "pending" },
  { id: 4, customer: "David", items: ["monitor"], total: 300, status: "completed" },
  { id: 5, customer: "Eve", items: ["tablet"], total: 400, status: "pending" },
];

// TASKS

// BASIC OPERATIONS
// 1. Add a new order:

// 2. The order with ID 3 got canceled.
// Use splice() or filter() to remove it from the list.

// 3. Display the total number of orders.


// SEARCHING AND FILTERING
// 1. Find the first completed order.

// 2. Create a new array "pendingOrders" that contains only orders with status "pending".

// 3. Create a list of customers who bought a "mouse".
// → Use filter() + includes() on items.


// CALCULATIONS
// 1. Get the total sales amount (sum of all totals).

// 2. Check if all orders are completed.


// TRANSFORMING AND REPORTING
// 1. Create a new array "orderSummaries" that looks like:
// ["Alice ordered 2 items ($1200)", "Bob ordered 1 item ($800)", ...]
// → Use map()

// 2. Sort all orders by total amount (highest to lowest).

// 3. Create a string of all customer names separated by commas.


// REAL LIFE USE
// 1. You received a refund for all orders under $200.
// Use filter() to find them and forEach() to log:
// "Refund issued for <customer>".
