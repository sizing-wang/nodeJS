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
    /*
    路由: 根据不同的请求地址,处理不同的逻辑
    m => model(模型) c => controller(控制器) v => view(视图)
    约定:
        以/static/开始的路由就是请求静态资源
        具体路由规则: Controller/action/xx/yy

    */

    if (pathName.startsWith("/static/")) {// 处理静态资源
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
    }else if (pathName == "/favicon.ico") {
        return;
    }else {
        // 处理具体路由
        const paths = pathName.split("/");
        const controller = paths[1] || "Index";
        const action = paths[2] || "index";
        const args = paths.splice(3);
        const mode = require(path.normalize(__dirname + "/Controller/" + controller));
        try {
            mode[action] && mode[action](...[req, res].concat(args)); // 参数传递
        }catch (err) {
            res.setHeader("content-type", "text/html; charset= utf-8");
            res.statusCode = 404;
            res.end("<h1>请求地址失败</h1>");
        }


    }

    /*
    if (pathName === "/" || pathName === "/Index.html") {
        // 请求首页
        const fileName = path.normalize(__dirname + "/Index.html");
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
*/


});
server.listen("3000", "127.0.0.1", () => {
    console.log("sever running is in http://127.0.0.1:3000 ");
});