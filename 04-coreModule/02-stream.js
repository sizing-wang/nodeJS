
/*
// 自定义可写流
// process.stdout.write("hello");  // 代表控制台的可写流


const {Writable} = require("stream");

// const write = new Writable();
// write.write("world"); // The _write() method is not implemented

class CusTomStream extends Writable {
    _write (chunk, encoding, callback) {
        console.log(chunk);
        console.log(encoding);
        callback();
    }
}
const write = new CusTomStream();

write.write("world", () => {
    console.log("world ...");
});
write.on("finish", () => {
    console.log("world finish ...");
});
write.write("good", () => {
    console.log("good ..."); // 在end方法之前,可以多次调用
});
write.end("hello"); // 也可以传参
*/

// 自定义可读流
const {Readable} = require("stream");

// const read = new Readable();
// read.on("data", (chunk) => {
//     console.log(chunk); // The _read() method is not implemented
// })

class CusTomReadable extends Readable {
    constructor () {
        super();
        this.index = 0;
    }
    _read (chunk) {
        this.index ++;
        if (this.index < 5) {
            this.push(this.index + "");
            // console.log(chunk);
        }else {
            this.push(null);
        }
    }
}
const reader = new CusTomReadable();
/*
// 读取数据流程
// 1. 定义一个变量保存数据
let str = "";
// 2. 监听data事件获取数据
reader.on("data", (chunk) => {
    str += chunk;
});
// 3. 监听end事件获取数据完毕
reader.on("end", () => {
    console.log(str);
});
*/
// reader.pipe(process.stdout); // 将可读流的数据传递给可写流
process.stdin.on("data", (chunk) => {
    console.log(chunk);
});