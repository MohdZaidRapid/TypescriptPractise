"use strict";
// function
const func = (n, m, l) => {
    if (typeof l == "undefined")
        return n * m;
    return n * m * l;
};
func(25, 23);
