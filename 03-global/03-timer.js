

setTimeout(function () {
    console.log("延迟定时器 ...");
}, 0);
console.log("同步程序 ...");
setInterval(function () {
    console.log("循环定时器 ...");
}, 2000);
setImmediate(function () {
    console.log("同步程序和延迟定时器执行完之后 再执行 ...");
});
process.nextTick(() => {
    console.log("同步程序执行完之后,立即执行 ...");
});