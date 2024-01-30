// Class and objects

// classes

// class Plater extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
// }

// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   getMyPower = () => this.power;
// }

// class Player {
//   public readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power: number
//   ) {
//     this.id = String(Math.random() * 1000);
//   }

//   get getMyHeight(): number {
//     return this.height;
//   }

//   set changeHeight(val: number) {
//     this.height = val;
//   }
// }

// const anas = new Player(100, 150, 23);
// // console.log(anas.weight);
// console.log(anas.getMyHeight);
// anas.changeHeight = 500;
// console.log(anas.getMyHeight);
// console.log(anas.getMyPower());
// console.log(anas.id);

interface ProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
//   getId: () => string;
}

interface GiveId {
  getId: () => string;
}

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

class Product implements ProductType, GiveId {
  private id: string = String(Math.random() * 1000);
  //   private lol: boolean = true;
  constructor(
    public name: string,
    public price: number,
    public stock: number
  ) {}
  getId = () => this.id;
}

const product1 = new Product("Macbook", 20000, 20);
console.log(product1.getId());
