"use strict";
// Generics
const users = [
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
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(users, "name", "zaid");
const filteredPeopleByAge = filterByPeoples(users, "age", 21);
// age: 12, name: "zaid"
console.log(filteredPeopleByName);
