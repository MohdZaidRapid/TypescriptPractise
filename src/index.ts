// Generics

// const func = <T>(n: T): T => {
//   return n;
// };

// const ans = func(20);
// const ans2 = func("20");
// const ans3 = func(true);

// type Person = {
//   name: string;
//   age: number;
// };

// const func = <T>(n: T): T => {
//   return n;
// };

// const person1: Person = {
//   name: "zaid",
//   age: 109,
// };
// const ans = func<Person>(person1);

// const arr: number[] = [];
// const arr2: Array<number> = [];

// const func = <T, U>(n: T, o: U):{n:T,o:U} => {
//   return { n, o };
// };

// const ans = func<number, string>(20, "LOL");
// ans.

// type Person = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user: Person = {
//   name: "zaid",
//   age: 109,
// };

// const user2: Person2 = {
//   name: "zaid",
//   age: 109,
//   email: "zaid@gmail.com",
// };

// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const ans = func<
//   Person,
//   Person2
//   //   {
//   //     name: string;
//   //     age: number;
//   //     email: string;
//   //   }
// >(user, user2);

type Person = {
  name: string;
  age: number;
};

const users: Person[] = [
  {
    name: "zaid",
    age: 12,
  },
  {
    name: "zaid1",
    age: 21,
  },
  {
    name: "Random",
    age: 21,
  },
  {
    name: "Random2",
    age: 59,
  },
];

// const filterByPeoples = (arr: [], property: any, value: any) => {
//   arr.filter((item) => item[property] === value);
// };

const filterByPeoples = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((item) => item[property] === value);
};

const filteredPeopleByName = filterByPeoples(users, "name", "zaid");
const filteredPeopleByAge = filterByPeoples(users, "age", 21);

// age: 12, name: "zaid"
console.log(filteredPeopleByName);
