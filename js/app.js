var shopHours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7]

function randomCus(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var seattle = {
    minCustomer: 23,
    maxCustomer: 65,
    customerPerHour: 0,
    avgCookies: 6.3,
    setCustomers: function() {
        this.customerPerHour = randomCus(this.minCustomer, this.maxCustomer);
    }
};
seattle.setCustomers();

var tokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    customerPerHour: 0,
    avgCookies: 1.2,
    setCustomers: function() {
        this.customerPerHour = randomCus(this.minCustomer, this.maxCustomer);
    }
};
tokyo.setCustomers();

var dubai = {
    minCustomer: 11,
    maxCustomer: 38,
    customerPerHour: 0,
    avgCookies: 3.7,
    setCustomers: function() {
        this.customerPerHour = randomCus(this.minCustomer, this.maxCustomer);
    }
};
dubai.setCustomers();

var paris = {
    minCustomer: 20,
    maxCustomer: 38,
    customerPerHour: 0,
    avgCookies: 2.3,
    setCustomers: function() {
        this.customerPerHour = randomCus(this.minCustomer, this.maxCustomer);
    }
};
paris.setCustomers();

var lima = {
    minCustomer: 2,
    maxCustomer: 16,
    customerPerHour: 0,
    avgCookies: 4.6,
    setCustomers: function() {
        this.customerPerHour = randomCus(this.minCustomer, this.maxCustomer);
    }
};
lima.setCustomers();

// Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6