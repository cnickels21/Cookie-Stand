var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    cookiesPerHour: [],
    totalCookies: 0,
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            var hourlyCookies = Math.floor(this.setCustomers() * this.avgCookies);
            this.cookiesPerHour[i] = hourlyCookies;
            this.totalCookies += hourlyCookies;
        }
    }
};

seattle.cookPerHour();
var seattleUl = document.getElementById('store1');
for (i = 0; i < shopHours.length; i++) {
    var seattleLi = document.createElement('li');
    seattleLi.textContent = `${shopHours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
    seattleUl.appendChild(seattleLi);
};
var seattleTotal = document.createElement('li');
seattleTotal.textContent = `Total: ${seattle.totalCookies} cookies`;
seattleUl.appendChild(seattleTotal);

// End Seattle code

var tokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    cookiesPerHour: [],
    totalCookies: 0,
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            var hourlyCookies = Math.floor(this.setCustomers() * this.avgCookies);
            this.cookiesPerHour[i] = hourlyCookies;
            this.totalCookies += hourlyCookies;
        }
    }
};

tokyo.cookPerHour();
var tokyoUl = document.getElementById('store2');
for (i = 0; i < shopHours.length; i++) {
    var tokyoLi = document.createElement('li');
    tokyoLi.textContent = `${shopHours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
    tokyoUl.appendChild(tokyoLi);
};
var tokyoTotal = document.createElement('li');
tokyoTotal.textContent = `Total: ${tokyo.totalCookies} cookies`;
tokyoUl.appendChild(tokyoTotal);

// End Tokyo code

var dubai = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    cookiesPerHour: [],
    totalCookies: 0,
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            var hourlyCookies = Math.floor(this.setCustomers() * this.avgCookies);
            this.cookiesPerHour[i] = hourlyCookies;
            this.totalCookies += hourlyCookies;
        }
    }
};

dubai.cookPerHour();
var dubaiUl = document.getElementById('store3');
for (i = 0; i < shopHours.length; i++) {
    var dubaiLi = document.createElement('li');
    dubaiLi.textContent = `${shopHours[i]}: ${dubai.cookiesPerHour[i]} cookies`;
    dubaiUl.appendChild(dubaiLi);
};
var dubaiTotal = document.createElement('li');
dubaiTotal.textContent = `Total: ${dubai.totalCookies} cookies`;
dubaiUl.appendChild(dubaiTotal);

// End Dubai code

var paris = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    cookiesPerHour: [],
    totalCookies: 0,
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            var hourlyCookies = Math.floor(this.setCustomers() * this.avgCookies);
            this.cookiesPerHour[i] = hourlyCookies;
            this.totalCookies += hourlyCookies;
        }
    }
};

paris.cookPerHour();
var parisUl = document.getElementById('store4');
for (i = 0; i < shopHours.length; i++) {
    var parisLi = document.createElement('li');
    parisLi.textContent = `${shopHours[i]}: ${paris.cookiesPerHour[i]} cookies`;
    parisUl.appendChild(parisLi);
};
var parisTotal = document.createElement('li');
parisTotal.textContent = `Total: ${paris.totalCookies} cookies`;
parisUl.appendChild(parisTotal);

// End Paris code

var lima = {
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    cookiesPerHour: [],
    totalCookies: 0,
    setCustomers: function () {
        return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    cookPerHour: function () {
        for (i = 0; i < shopHours.length; i++) {
            var hourlyCookies = Math.floor(this.setCustomers() * this.avgCookies);
            this.cookiesPerHour[i] = hourlyCookies;
            this.totalCookies += hourlyCookies;
        }
    }
};

lima.cookPerHour();
var limaUl = document.getElementById('store5');
for (i = 0; i < shopHours.length; i++) {
    var limaLi = document.createElement('li');
    limaLi.textContent = `${shopHours[i]}: ${lima.cookiesPerHour[i]} cookies`;
    limaUl.appendChild(limaLi);
};
var limaTotal = document.createElement('li');
limaTotal.textContent = `Total: ${lima.totalCookies} cookies`;
limaUl.appendChild(limaTotal);

// End Lima code
