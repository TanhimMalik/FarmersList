// Import Classes Here
class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true;
    }

    display() {
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
    }
}


class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product) {
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(i) {
        if (i >= 0 && i < this.products.length) {
            this.total -= this.products[i].price;
            this.products.splice(i, 1);
        }
    }
}


class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
    }

    addToOrderHistory(cart) {
        this.orderHistory.push(cart);
    }
}


class Auth {
    constructor() {
        this.customers = [];
    }

    register(name, email, shippingAddress) {
        const customer = new Customer(name, email, shippingAddress);
        this.customers.push(customer);
    }

    login(email) {
        return this.customers.find(customer => customer.email === email) || null;
    }
}

// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch (e) {

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch (e) {

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch (e) {

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch (e) {

}