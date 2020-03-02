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


// Display the values of each array as unordered lists in the browser

