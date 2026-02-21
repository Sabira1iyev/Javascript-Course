class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculteTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("shirt", 12.4);
const product2 = new Product("pants", 22.70);
const product3 = new Product("Underwear", 100.00);

product3.displayProduct();
// console.log("");
// product2.displayProduct();
// console.log("");
// product3.displayProduct();

const total = product3.calculteTotal(salesTax);
console.log(`total price (with tax): $${total.toFixed(2)}`);