class Smoothie {
    constructor(flavor, size, addons, quantity, customerName, email) {
        this.flavor = flavor;
        this.size = size;
        this.addons = addons;
        this.quantity = quantity;
        this.customerName = customerName;
        this.email = email;
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
});