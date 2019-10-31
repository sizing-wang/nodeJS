/*
 概念:
	Node中的event没有默认行为和事件冒泡
	const EventEmitter = require('events');//返回的是一个类
	通常我们需要继承EventEmitter类来实现事件
	大多数 Node.js 核心对象都继承事件类
*/
/*
// 引入 events 模块
const eventEmitter = require("events");
// 生成event实例对象
const emitter = new eventEmitter();
// 监听事件
emitter.on("test", function () {
    console.log("bind test ...");
});
// 触发事件
emitter.emit("test");
*/

// 第二种方式 (推荐)
// 引入 events 模块
/*
const eventEmitter = require("events");
class emitter extends eventEmitter{
    sayHello (){
        console.log("hello nodeJS");
    }
}
// 生成event实例对象
const myEmitter = new emitter();
// 监听事件
myEmitter.on("test", function () {
    console.log("bind test111 ...");
});
// 触发事件
myEmitter.emit("test");
myEmitter.sayHello();
 */


/*
监听事件注意点:
	1. emitter.addListener和emitter.on(eventName, listener)是同一个方法
	2. 一个EventEmitter对象默认最大可以有10个监听,可以通过emitter.setMaxListeners(n)来设置最大监听数
	3. 和浏览器端的事件不同,监听函数的第一个参数就是触发时传入的参数而不是event对象

触发事件注意点:
	1. 和浏览器端的事件不同,传入参数不用数组而是参数列表
	2. 当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会被同步地调用。
*/
// 监听事件的方式:
const eventEmitter = require("events");
class myEmitter extends eventEmitter {} // 继承 'events' 的方法
const emitter = new myEmitter(); // 生成 "events" 实例对象

/*
emitter.on("test", () => {
    console.log("on1 ...");
});
emitter.on("test", () => {
    console.log("on2 ...");
});
emitter.addListener("test", () => {
    console.log("addLitener1 ...");
});
emitter.addListener("test", () => {
    console.log("addLitener2 ...");
// });
emitter.once("test", () => {
    console.log("once1 ...");
});
emitter.once("test", () => {
    console.log("once2 ...");
});
emitter.emit("test"); // 只能触发一次
emitter.emit("test");
*/
emitter.setMaxListeners(20);
emitter.on("test", () => {
    console.log("on1 ...");
});
emitter.on("test", () => {
    console.log("on2 ...");
});
emitter.on("test", () => {
    console.log("on3 ...");
});
emitter.on("test", () => {
    console.log("on4 ...");
});
emitter.on("test", () => {
    console.log("on5 ...");
});
emitter.on("test", () => {
    console.log("on6 ...");
});
emitter.on("test", () => {
    console.log("on7 ...");
});
emitter.on("test", () => {
    console.log("on8 ...");
});
emitter.on("test", () => {
    console.log("on9 ...");
});
emitter.on("test", () => {
    console.log("on10 ...");
});
emitter.on("test", () => {
    console.log("on11 ...");
});
emitter.on("test1", () => {
    console.log("test1 ...");
});
emitter.emit("test", "test1");


