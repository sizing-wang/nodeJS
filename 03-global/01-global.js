/*
作用域在模块内的变量:
	__dirname 当前模块的文件夹名
	__filename 当前模块文件的绝对路径
	module 当前的模块信息
	exports module.exports对象,用来导出模块
	require() 引入模块
*/
// console.log(__dirname); // E:\WKQ\LiYuIT\nodeJS\03-global
// console.log(__filename); // E:\WKQ\LiYuIT\nodeJS\03-global\01-global.js
// console.log(module); // 当前的模块信息
// console.log(exports); // {}
// console.log(module.exports); // {}
console.log(require);