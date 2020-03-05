// Arrays to be used multiple times are defined

var shopHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var eachHour = [];

var allStores = [];

// <thead> element is built here

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

// Constructor object is built here

function Store(storeName, minCustomer, maxCustomer, avgCookies) {
    this.storeName = storeName;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesPerHour = [];
    this.totalCookies = 0;
    this.stuffedCookies = this.saleQuantity();
    this.storeCreation = this.render();
    allStores.push(this);
};

// stuffedCookies method is stated here

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

// Table data rules for rendering are stated here

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

// New objects built manually

var seattle = new Store('Seattle', 23, 65, 6.3);

var tokyo = new Store('Tokyo', 3, 24, 1.2);

var dubai = new Store('Dubai', 11, 38, 3.7);

var paris = new Store('Paris', 20, 38, 2.3);

var lima = new Store('Lima', 2, 26, 4.6);

// <tfoot> data is defined here

function totalFooter() {
    var updateFooter = document.getElementById('hourly-totals');
    if (updateFooter) {
        updateFooter.parentNode.removeChild(updateFooter);
    }
    var tableFoot = document.createElement('tfoot');
    tableFoot.setAttribute('id', 'hourly-totals');
    var cookieTable = document.getElementById('cookie-table');
    cookieTable.appendChild(tableFoot);
    var hourlyTotals = document.getElementById('hourly-totals');
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
    cookieTable.appendChild(hourlyTotals);
};
totalFooter();

// Event for form submission

function handleFormSubmitted(event) {
    event.preventDefault();
    var nameInput = document.getElementById('store-name');
    var nameValue = nameInput.value;
    var minimumInput = document.getElementById('min-cust');
    var minValue = minimumInput.value;
    var maximumInput = document.getElementById('max-cust');
    var maxValue = maximumInput.value;
    var averageCookInput = document.getElementById('avg-cookie');
    var averageValue = averageCookInput.value;
    var newStore = new Store(nameValue, minValue, maxValue, averageValue);
    totalFooter();
}

var formElement = document.getElementById('new-Store');
formElement.addEventListener('submit', handleFormSubmitted);