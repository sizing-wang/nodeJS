const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("./resource/mime.json");
// 处理静态资源
const server = http.createServer((req, res) => {
    // 使用的绝对路径
    const fileUrl = req.url;
    const fileName = path.normalize(__dirname + fileUrl);
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.setHeader("content-type", "text/html;charset= utf-8");
            res.statusCode = 404;
            res.end("<h1>请求地址失败</h1>")
        }else {
            // 根据请求的文件, 决定不同的文档类型
            // 根据文档的后缀名, 设置类型
            // html   text/html
            // css    text/css
            // js     text/javascript
            // path.extname() 方法 可以获取文件的后缀名
            const extname = path.extname(fileUrl);
            const mimeType = mime[extname];
            // console.log(mimeType);
            res.setHeader("content-type", mimeType + ";charset= utf-8");
            res.end(data);
        }
    })


});
server.listen("3000", "127.0.0.1", () => {
    console.log("sever running is in http://127.0.0.1:3000 ");
});