var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(minCustomer, maxCustomer, avgCookies) {
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.customers = this.setCustomers();
    this.cookiesPerHour = [];
    this.totalCookies = 0;
};

Store.prototype.setCustomers = function() {
	return Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + 	this.minCustomer);
};

Store.prototype.saleQuantity = function() {
	for (i = 0; i < shopHours.length; i++) {
		var hourlyCookies = Math.floor(this.customers * this. avgCookies);
		this.cookiesPerHour[i] = hourlyCookies;
		this.totalCookies += hourlyCookies;
	}
};

var seattle = new Store(23, 65, 6.3);
seattle.saleQuantity();
console.log(seattle);

var tokyo = new Store(3, 24, 1.2);
tokyo.saleQuantity();
console.log(tokyo);

var dubai = new Store(11, 38, 3.7);
dubai.saleQuantity();
console.log(dubai);

var paris = new Store(20, 38, 2.3);
paris.saleQuantity();
console.log(paris);

var lima = new Store(2, 26, 4.6);
lima.saleQuantity();
console.log(lima);

var allStores = [seattle, tokyo, dubai, paris, lima];

// TO BE USED FOR RENDERING

for (var i = 0; i < allStores.length; i++) {
	allStores[i].render();
};

// STEPS TO ACCOMPLISH LAB
// render shopHours array into first table row + Daily Location Total
// Render Each city object as a specific row separately
// Totals row for each hour combining each citys hourly sales






// var storeTable = document.getElementbyId('store-table');

// var cityRow = document.createElement('tr');