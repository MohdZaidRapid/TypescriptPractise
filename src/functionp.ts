// function

// type FuncType = (n: number, m: number, l?: number) => number | string;

// //
// const func: FuncType = (n, m, l) => {
//   if (typeof l == "undefined") return "L was not provided";
//   return n * m * l;
// };

// func(25, 23);

// function
// type FuncType = (n: number, m: number, l?: number) => number | string;

// const func = (n: number, m: number, l: number = 20) => {
//     //   if (typeof l == "undefined") return "L was not provided";
//     return n * m * l;
//   };
// //
// const func: FuncType = (n, m, l = 20) => {
// //   if (typeof l == "undefined") return "L was not provided";
//   return n * m * l;
// };

// func(25, 23);

// Rest operator
// type FuncType = (...m: number[]) => number[];
// const func: FuncType = (...m) => {
//   return m;
// };

// func(25, 25, 2, 525, 25, 25, 25, 25);

// type FuncType = (...m: number[]) => number[];
// function lol(n: number): number {
//   return 45;
// }

// type FuncType = (...m: number[]) => number;
// const lol: FuncType = function lol(n) {
//   return n;
// };

// func(25, 25, 2, 525, 25, 25, 25, 25);

// function with object

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }

// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product): void => {
// //   product.id = "sasas";
//   console.log(product);
// };

// const productOne: Product = {
//   name: "Lenovo",
//   stock: 46,
//   price: 9999,
//   photo: "sample",
//   id: "aksjaklsjkj",
// };

// getData(productOne);

// Never Type
const err = new Error();

const errorHandler = () => {
  throw new Error();
};
