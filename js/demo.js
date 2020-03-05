function handleFormSubmitted(event) {
    var nameInput = document.getElementById('store-name');
    var nameValue = nameInput.value;
    var minimumInput = document.getElementById('min-cust');
    var minValue = minimumInput.value;
    var maximumInput = document.getElementById('max-cust');
    var maxValue = maximumInput.value;
    var averageCookInput = document.getElementById('avg-cookie');
    var averageValue = averageCookInput.value;
    var newPet = new Store(nameValue, minValue, maxValue, averageValue);
}

var formElement = document.getElementById('new-Store');
formElement.addEventListener('submit', handleFormSubmitted);

/* Which element do you need
Which event are you listening for
What code runs on event */

Store.allStores.push(this);
