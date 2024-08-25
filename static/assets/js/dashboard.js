const orderTable = document.getElementById('orderTable');

// Function to generate a random order ID 
function generateOrderID() {
    return Math.floor(Math.random() * 100000); // 5-digit random number
}

// Function to generate a random date (within the past month)
function generateRandomDate() {
    const today = new Date();
    const oneMonthAgo = new Date(today.setDate(today.getDate() - 30)); 

    const randomTimestamp = oneMonthAgo.getTime() + Math.random() * (today.getTime() - oneMonthAgo.getTime());
    return new Date(randomTimestamp).toLocaleDateString();
}

// Array of possible statuses
const statuses = ['Shipped', 'In Transit', 'Delivered', 'Pending'];

// Function to generate dummy order data
function generateDummyData(numOrders) {
    const data = [];
    for (let i = 0; i < numOrders; i++) {
        data.push({
            orderID: generateOrderID(),
            date: generateRandomDate(),
            status: statuses[Math.floor(Math.random() * statuses.length)],
            customer: `Customer ${i + 1}`,  
            destination: `City ${i + 1}`, 
            trackingNumber: `TN-${generateOrderID()}`,
            dueDate: generateRandomDate(), 
            product: `Product ${i + 1}`,
            departureTime: new Date().toLocaleTimeString(),
            weight: `${Math.floor(Math.random() * 50) + 1} kg`,
        });
    }
    return data;
}

// Function to populate the table
function populateTable() {
    const tableBody = orderTable.querySelector('tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    orderData.forEach(order => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = order.orderID;
        row.insertCell().textContent = order.trackingNumber;
        row.insertCell().textContent = order.date;
        row.insertCell().textContent = order.dueDate;
        row.insertCell().textContent = order.status;
        row.insertCell().textContent = order.customer;
        row.insertCell().textContent = order.destination;
        row.insertCell().textContent = order.product;
        row.insertCell().textContent = order.departureTime;
        row.insertCell().textContent = order.weight;
    });
}

// Generate dummy data and populate the table
const orderData = generateDummyData(10);  // Generate 10 orders
populateTable(); 
