function ToyCar() {
    // Initialize properties within the constructor
    this.sku = '';
    this.upc = '';
    this.carBrand = '';
    this.carModel = '';
    this.price = 0;
    this.color = '';
    this.ageRange = '';
    this.packaging = '';
    this.scale = '';
    this.vehicleType = '';
    this.quantity = 0;
    this.carDescription = '';
  }


// Handle form submission (save)
document.getElementById('toyCarDetails').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission (we'll handle it)
    
    // Collect form data
    const formData = new FormData(document.getElementById('toyCarDetails'));

    // Create a summary of the form data
    let confirmationText = '<ul>';
    for (let [key, value] of formData.entries()) {
        confirmationText += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    confirmationText += '</ul>';

    // Insert the data into the confirmation div
    document.getElementById('confirmationDetails').innerHTML = confirmationText;

    // Show the confirmation modal
    document.getElementById('confirmationModal').style.display = 'flex';
});

// Handle Confirm Button Click (Save the Data)
document.getElementById('confirmButton').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('toyCarDetails'));
    let newToyCar = new ToyCar();

    // Collect the form data into the newToyCar object
    for (let [key, value] of formData.entries()) {
        newToyCar[key] = value;
    }

    // save data to DB
    console.log(newToyCar);

    // Hide the modal after confirming
    document.getElementById('confirmationModal').style.display = 'none';

    // document.getElementById('toyCarDetails').reset();
    alert('Inventory saved successfully!');
});

// Handle Cancel Button Click (Close the Confirmation Modal)
document.getElementById('cancelButton').addEventListener('click', function() {
    // Hide the modal and keep the user on the form
    document.getElementById('confirmationModal').style.display = 'none';
});