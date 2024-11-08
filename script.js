// Function to update the quantity and price dynamically
function incrementQuantity(itemId, pricePerUnit) {
    const quantityElement = document.getElementById(itemId);
    let quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = ++quantity;
    updatePrice(itemId, pricePerUnit, quantity);
    updateTotal();
}

function decrementQuantity(itemId, pricePerUnit) {
    const quantityElement = document.getElementById(itemId);
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantityElement.innerText = --quantity;
        updatePrice(itemId, pricePerUnit, quantity);
        updateTotal();
    }
}

// Update the price of an item based on its quantity
function updatePrice(itemId, pricePerUnit, quantity) {
    const priceElement = document.getElementById(itemId.replace('Qty', 'Price'));
    priceElement.innerText = (pricePerUnit * quantity).toFixed(2);
}

// Update the total, including tax and delivery
function updateTotal() {
    const cheeseBurgerTotal = parseFloat(document.getElementById('cheeseBurgerPrice').innerText);
    const pepperoniPizzaTotal = parseFloat(document.getElementById('pepperoniPizzaPrice').innerText);
    const sushiPlatterTotal = parseFloat(document.getElementById('sushiPlatterPrice').innerText);
    
    // Calculate subtotal (before tax and delivery charges)
    const subtotal = cheeseBurgerTotal + pepperoniPizzaTotal + sushiPlatterTotal;

    console.log('Subtotal:', subtotal);  // Debugging line

    // Tax and Delivery charges
    const tax = subtotal * 0.10; // 10% tax
    const deliveryCharges = 5.00; // Fixed delivery charge

    // Calculate total with tax and delivery
    const total = subtotal + tax + deliveryCharges;

    console.log('Tax:', tax);  // Debugging line
    console.log('Delivery Charges:', deliveryCharges);  // Debugging line
    console.log('Total:', total);  // Debugging line

    // Update the subtotal, tax, delivery, and total in the modal
    document.getElementById('subtotalPrice').innerText = subtotal.toFixed(2);
    document.getElementById('taxPrice').innerText = tax.toFixed(2);
    document.getElementById('deliveryCharges').innerText = deliveryCharges.toFixed(2);
    document.getElementById('totalPrice').innerText = total.toFixed(2);
}

const foodData = [
    {
        "food_name": "Spaghetti Carbonara",
        "food_price": 12.50,
        "food_description": "Spaghetti with creamy sauce, pancetta, and Parmesan cheese.",
        "restaurant_name": "Italiano Bistro",
        "image_url": "img/margherita.jpg"
    },
    {
        "food_name": "Beef Burger",
        "food_price": 10.00,
        "food_description": "Juicy beef patty with lettuce, tomato, cheese, and special sauce.",
        "restaurant_name": "Burger Joint",
        "image_url": "img/burger.jpg"
    },
    {
        "food_name": "Butter Chicken",
        "food_price": 13.00,
        "food_description": "Tender chicken in a creamy, spiced tomato sauce with naan bread.",
        "restaurant_name": "Taste of India",
        "image_url": "img/butterchicken.jpg"
    },
    {
        "food_name": "Beef Burger",
        "food_price": 10.00,
        "food_description": "Juicy beef patty with lettuce, tomato, cheese, and special sauce.",
        "restaurant_name": "Burger Joint",
        "image_url": "img/burger.jpg"
    },
    {
        "food_name": "Spaghetti Carbonara",
        "food_price": 12.50,
        "food_description": "Spaghetti with creamy sauce, pancetta, and Parmesan cheese.",
        "restaurant_name": "Italiano Bistro",
        "image_url": "img/margherita.jpg"
    },
    {
        "food_name": "Butter Chicken",
        "food_price": 13.00,
        "food_description": "Tender chicken in a creamy, spiced tomato sauce with naan bread.",
        "restaurant_name": "Taste of India",
        "image_url": "img/butterchicken.jpg"
    }
];

// Get the container where the food items will be added
const foodItemsContainer = document.getElementById('foodItemsContainer');

// Loop through the food data and generate HTML for each food item
foodData.forEach(item => {
    // Create a new card for each food item
    const foodCard = document.createElement('div');
    foodCard.classList.add('col-md-4');

    foodCard.innerHTML = `
        <div class="card food-card">
            <img src="${item.image_url}" class="card-img-top" alt="${item.food_name}">
            <div class="card-body">
                <h5 class="food-card-title">${item.food_name}</h5>
                <p class="food-card-price">$${item.food_price.toFixed(2)}</p>
                <p class="card-text">${item.food_description}</p>
                <p class="text-muted">From: ${item.restaurant_name}</p>
                <button class="btn btn-success">Add to Cart</button>
            </div>
        </div>
    `;

    // Append the card to the foodItemsContainer
    foodItemsContainer.appendChild(foodCard);
});
