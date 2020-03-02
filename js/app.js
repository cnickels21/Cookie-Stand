var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    cookiesPerHour: [],
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.setCustomers() * this.avgCookies);
        }
    }
};

var tokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    cookiesPerHour: [],
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.setCustomers() * this.avgCookies);
        }
    }
};

var dubai = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    cookiesPerHour: [],
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.setCustomers() * this.avgCookies);
        }
    }
};

var paris = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    cookiesPerHour: [],
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.setCustomers() * this.avgCookies);
        }
    }
};

var lima = {
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    cookiesPerHour: [],
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.setCustomers() * this.avgCookies);
        }
    }
};

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