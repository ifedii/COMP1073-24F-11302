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
    
    // Collect form data (you can later send it to a server or save it locally)
    const formData = new FormData(this);
    let newToyCar = new ToyCar();

    // For demonstration, logging the data to console
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
        newToyCar[key] = value;
    }

    console.log(newToyCar);

    // Example: Display a message or save the data
    alert('Inventory saved successfully!');
    
    // Optionally, reset the form after saving
    // this.reset();
});