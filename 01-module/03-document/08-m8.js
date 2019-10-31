
// const m5 = require("./05-nodeJS-exports");
// console.log(m5);
// const m9 = require("./09-m9.json");
// console.log(m9);
const m9 = require("./09-m9.js");
console.log(m9);
/*
 模块加载规则:
	首先按照模块的文件名进行查找
	如果没有找到,则会在模块名称后面加上.js后缀进行查找
	如果还没有找到,则会在模块名称后面加上.json后缀进行查找
	如果还没有找到,则会在模块名称后面加上.node 后缀进行查找
	如果还没有找到,则会报错
*/