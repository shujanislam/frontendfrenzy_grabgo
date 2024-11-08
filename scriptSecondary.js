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
    },
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
    },
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
