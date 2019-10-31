
const m5 = require("./05-nodeJS-exports.js");
const _m5 = require("./05-nodeJS-exports.js");
console.log(m5);
console.log(_m5);
/*
注意点:
	Node对所有加载过的模块对象都会缓存
	Node对二次加载的模块一律采用缓存优先
	核心模块的优先级高于自定义模块
*/