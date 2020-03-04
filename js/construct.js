var shopHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var eachHour = [];

(function () {
    var header = document.getElementById('daily-hours');
    var firstCell = document.createElement('th');
    firstCell.textContent = '';
    header.appendChild(firstCell);
    for (var i = 0; i < shopHours.length; i++) {
        var headerCells = document.createElement('th');
        headerCells.textContent = shopHours[i];
        header.appendChild(headerCells);
    }
    var dailyTotals = document.createElement('th');
    dailyTotals.textContent = 'Daily Location Total';
    header.appendChild(dailyTotals);
})();

function Store(storeName, minCustomer, maxCustomer, avgCookies) {
    this.storeName = storeName;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesPerHour = [];
    this.totalCookies = 0;
};

Store.prototype.saleQuantity = function () {
    
    for (var i = 0; i < shopHours.length; i++) {
        var customers = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
        var hourlyCookies = Math.floor(customers * this.avgCookies);
        this.cookiesPerHour[i] = hourlyCookies;
        this.totalCookies += hourlyCookies;
        if (eachHour[i]) {
            eachHour[i] += hourlyCookies;
        }
        else {
            eachHour[i] = hourlyCookies;
        }
    }
};

Store.prototype.render = function () {
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
    }
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
};

(function () {
    var hourlyTotals = document.getElementById('hourly-totals')
    var firstFoot = document.createElement('th');
    firstFoot.textContent = 'Total';
    hourlyTotals.appendChild(firstFoot);
    var grandTotal = 0;
    for (i = 0; i < eachHour.length; i++) {
        var footerTotals = document.createElement('td');
        footerTotals.textContent = eachHour[i];
        hourlyTotals.appendChild(footerTotals);
        grandTotal += eachHour[i];
    }
    var finalFoot = document.createElement('td');
    finalFoot.textContent = grandTotal;
    hourlyTotals.appendChild(finalFoot);
})();
