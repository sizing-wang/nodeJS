// 创建一个简单服务器
const http = require("05-http");
const server = http.createServer((req, res) => {
    // req => request 可读流
    // res => response 可写流
    console.log(req.url);
    console.log(req.method);
    res.write("hello world");
    res.end("ok");
});
server.listen("3000", "127.0.0.1", () => {
    console.log("sever running is 127.0.0.1");
});

