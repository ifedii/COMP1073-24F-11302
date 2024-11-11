class Smoothie {
    constructor(flavor, size, addons, quantity, customerName, email) {
        this.flavor = flavor;
        this.size = size;
        this.addons = addons;
        this.quantity = quantity;
        this.customerName = customerName;
        this.email = email;
    }

    // Method to generate a description of the smoothie order
    getDescription() {
        let addonsDescription = this.addons.length > 0 ? this.addons.join(", ") : "No add-ons";
        return `
            <h2>Your Smoothie Order Summary</h2>
            <p><strong>Thank you, ${this.customerName}!</strong> Here’s your smoothie order:</p>
            <ul>
                <li><strong>Flavor:</strong> ${this.flavor}</li>
                <li><strong>Size:</strong> ${this.size}</li>
                <li><strong>Add-ons:</strong> ${addonsDescription}</li>
                <li><strong>Quantity:</strong> ${this.quantity}</li>
            </ul>
            <p>We’ll send a confirmation to <strong>${this.email}</strong>.</p>
        `;
    }
}

document.getElementById("smoothieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const flavor = document.getElementById("flavor").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const customerName = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Get selected add-ons
    const addons = Array.from(document.querySelectorAll("input[name='addons']:checked"))
        .map(addon => addon.value);
    
    //Create a Smoothie object
    const smoothieOrder = new Smoothie(flavor, size, addons, quantity, customerName, email);

    // Display the smoothie order description
    const orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = smoothieOrder.getDescription();
    orderSummary.style.display = "block";
});