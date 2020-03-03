var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(storeName, minCustomer, maxCustomer, avgCookies) {
    this.storeName = storeName;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesPerHour = [];
    this.totalCookies = 0;
};

// Store.prototype.setCustomers = function () {
//     return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
// };

Store.prototype.saleQuantity = function () {
    for (var i = 0; i < shopHours.length; i++) {
        var customers = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
        var hourlyCookies = Math.floor(customers * this.avgCookies);
        this.cookiesPerHour[i] = hourlyCookies;
        this.totalCookies += hourlyCookies;
    }
};

Store.prototype.render = function () {
    console.log(this.cookiesPerHour);
    var storeTable = document.getElementById('store-table');
    var cityRow = document.createElement('tr');
    storeTable.appendChild(cityRow);
    var cityHeader = document.createElement('th');
    cityHeader.textContent = this.storeName;
    cityRow.appendChild(cityHeader);
    for (i = 0; i < this.cookiesPerHour.length; i++) {
        var hourlyCell = document.createElement('td');
        hourlyCell.textContent = this.cookiesPerHour[i];
        cityRow.appendChild(hourlyCell);
    };
    var cityTotal = document.createElement('td');
    cityTotal.textContent = this.totalCookies;
    cityRow.appendChild(cityTotal);
};



var seattle = new Store('Seattle', 23, 65, 6.3);
seattle.saleQuantity();

var tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.saleQuantity();

var dubai = new Store('Dubai', 11, 38, 3.7);
dubai.saleQuantity();

var paris = new Store('Paris', 20, 38, 2.3);
paris.saleQuantity();

var lima = new Store('Lima', 2, 26, 4.6);
lima.saleQuantity();


var allStores = [seattle, tokyo, dubai, paris, lima];
for (var j = 0; j < allStores.length; j++) {
    allStores[j].render();
    console.log(allStores[j]);
};


// STEPS TO ACCOMPLISH LAB
// render shopHours array into first table row + Daily Location Total
// Render Each city object as a specific row separately
// Totals row for each hour combining each citys hourly sales
