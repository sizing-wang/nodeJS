
// console.log(exports); // {}
// console.log(module.exports); // {}

/*
const str = "hello";
const num = 20;
const fn = function () {
    console.log("fn ...");
};

exports.str = str;
exports.num = num;
exports.fn = fn;
 */

console.log("m5");
const str = "hello";
const num = 20;
const fn = function () {
    console.log("fn ...");
};
const obj = {
    name: "tom",
    age: 20
};
module.exports = {
    str,
    num,
    fn,
    obj
};




