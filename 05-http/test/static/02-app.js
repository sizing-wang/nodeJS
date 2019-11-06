const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("./resource/mime.json");
const url = require("url");
const getData = require("./model/item.js");
const {get, add, del} = getData;
const swig = require("swig");
const querystring = require("querystring");




const server = http.createServer((req, res) => {

    const filePath = req.url;
    const parse = url.parse(filePath, true); // 地址筛选处理
    const pathName = parse.pathname;
    if (pathName === "/" || pathName === "/Index.html") {
        const fileName = path.normalize(__dirname + "/Index.html");
        // 请求首页
        get()
            .then(result => {
                // 引入模板处理数据
                const template = swig.compileFile(fileName);
                const html = template({
                    data: result
                });
                res.setHeader("content-type", "text/html; charset= utf-8");
                res.end(html);
            })
            .catch(err => {
                res.setHeader("content-type", "text/html; charset= utf-8");
                res.statusCode = 404;
                res.end("<h1>请求地址失败</h1>");
            })
    }else if (pathName === "/add") { // 处理添加数据请求(post)
        // 读取发送的数据
        let body = "";
        req.on("data", chunk => { // 成功时
            body += chunk;
        });
        req.on("end", () => { // 完成时
            // 根据参数信息,生成任务对象,写入到文件中
            const query = querystring.parse(body);
            add(query.task)
                .then(data => {
                    // 获取数据成功返回到前台
                    res.end(JSON.stringify({
                        code: 0,
                        message: "添加数据成功",
                        data: data
                    }))
                })
                .catch(err => {
                    res.end(JSON.stringify({
                        code: 1,
                        message: "添加数据失败",
                        error: err
                    }))
                });
        })


    }else if (pathName === "/delete") { // 处理删除数据请求
        // 1. 获取数据
        const id = parse.query.id;
        // 2.根据数据,删除文件中对应的数据
        del(id)
            .then(data => {
                res.end(JSON.stringify({
                    code: 0,
                    massage: "删除数据失败"
                }))
            })
            .catch(err => {
                res.end(JSON.stringify({
                    code: 1,
                    massage: "删除数据失败",
                    error: err
                }))
            });

        res.end(JSON.stringify({
            code: 0
        }));
    }else {
        // 处理静态资源
        const fileName = path.normalize(__dirname + filePath);
        fs.readFile(fileName, (err, data) => {
            if (err) {
                res.setHeader("content-type", "text/html;charset= utf-8");
                res.statusCode = 404;
                res.end("<h1>请求地址失败</h1>")
            }else {
                const extname = path.extname(filePath);
                const mimeType = mime[extname];
                res.setHeader("content-type", mimeType + ";charset= utf-8");
                res.end(data);
            }
        })
    }


});
server.listen("3000", "127.0.0.1", () => {
    console.log("sever running is in http://127.0.0.1:3000 ");
});