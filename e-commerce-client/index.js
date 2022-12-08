const prompt = require('prompt-sync')({sigint: true});
const {
    default: axios
} = require('axios');

const baseUrl = 'http://localhost:3000'

getData = async function(type) {
    try {
        const getResponse = await axios.get(`${baseUrl}/${type}`)
        return getResponse.data.data;
    } catch (err) {
        console.error(err);
        return [];
    }
}

let products = [];
let discounts = [];
let shoppingCartProducts = [];

const promptProductsDisplay = async function() {
    let productDisplay = '\nEnter a product number to add to shopping cart or enter `S` to view your cart:\n';
    let i = 1;

    for (const product of products) {
        productDisplay = productDisplay + `${i}. ${product.name} - \$${product.price}\n`;
        i++;
    }

    productDisplay = productDisplay + `S. Go to shopping cart\n`;

    console.log(productDisplay);
    const command = prompt('Input: ');
    
    if (command == 0 || (/^\d+$/.test(command) && +command > products.length) || (!(/^\d+$/.test(command)) && command !== 'S')) {
        console.log('\nInvalid input! Try again.\n')
        promptProductsDisplay();
    } else {
        if (command != 'S') {
            const product = addProductToShoppingCart(command);
            console.log(`\nProduct (${product.name}) successfully added to shopping cart!\n`);
            promptProductsDisplay();
        } else {
            promptShoppingCartDisplay();
        }
    }       
}

const promptShoppingCartDisplay = async function() {
    let shoppingCartDisplay = '\nProducts in Shopping Cart:\n';
    let totalPrice = 0;
    let appliedDiscount;
    let i = 1;

    for (const product of shoppingCartProducts) {
        shoppingCartDisplay = shoppingCartDisplay + `${i}. ${product.name} - \$${product.price}\n`;
        totalPrice = totalPrice + (+product.price);
        i++;
    }

    for (const discount of discounts) {
        if (totalPrice > discount.price) {
            appliedDiscount = discount;
        }
    }

    if (appliedDiscount) {
        shoppingCartDisplay = shoppingCartDisplay + `\nDiscount Applied: ${appliedDiscount.discountPercentage} off on total greater than ${appliedDiscount.price}`;
        totalPrice = (totalPrice - (totalPrice * (+appliedDiscount.discountPercentage/100))).toFixed(2);
    }

    shoppingCartDisplay = shoppingCartDisplay + `\nTOTAL: \$${totalPrice}\n`;

    console.log(shoppingCartDisplay);
    const command = prompt('Press any key to go back to products page.');
    promptProductsDisplay();
}

const addProductToShoppingCart = function(productNumber) {
    const product = products[productNumber-1];
    shoppingCartProducts.push(product);

    return product;
}

const start = async function() {
    products = await getData('products');
    discounts = await getData('discounts');

    promptProductsDisplay();
}

start();