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
        age: 52,
    },
    {
        name: "Random2",
        age: 59,
    },
];
const filterByPeoples = (arr, property, value) => {
    arr.filter((item) => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(users, "name", "zaid");
