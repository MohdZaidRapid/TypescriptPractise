// function getFirstElement<T>(array: T[]) {
//   return array[0];
// }

// const numbers = [1, 2, 3];
// const firstNum = getFirstElement<number>(numbers);

// const strings = ["abc", "def", "ghi"];
// const firstString = getFirstElement(strings);
// console.log(firstNum, firstString);
// console.log(firstNum, firstString);

// const a = [1, 2, 3];

// a.map(() => {
//   return "sdf";
// });

// const map = new Map<string, number>();
// const map = new Map<string, number>([["sdf", 3]]);

// map.set("sfg", 3);

// type ApiResponse<Data extends object = { status: number }> = {
//   data: Data;
//   isError: boolean;
// };

// type UserResponse = ApiResponse<{ name: string; age: number }>;
// type BlogResponse = ApiResponse<{ title: string }>;
// type StatusResponse = ApiResponse<{ status: number }>;

// const responseUser: UserResponse = {
//   data: {
//     name: "kyle",
//     age: 24,
//   },
//   isError: false,
// };

// const responseBlog: BlogResponse = {
//   data: {
//     title: "kyle",
//   },
//   isError: false,
// };
// const responseStatus: ApiResponse<{ name: string }> = {
//   data: { name: "dsa" },

//   isError: false,
// };
// console.log("hello123");
const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);
identityThree("red");

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({});

function getSearchProducts<T>(products: T[]): T {
  // do some db operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do somt db operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, { connection: "", username: "", password: "" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
