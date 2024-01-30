"use strict";
// Class and objects
// class Product implements ProductType {
//   public name: string;
//   public price: number;
//   public stock: number;
//   public id: string = String(Math.random() * 1000);
//   constructor(name: string, price: number, stock: number) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//   }
// }
class Product {
    //   private lol: boolean = true;
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const product1 = new Product("Macbook", 20000, 20);
console.log(product1.getId());
