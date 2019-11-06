
const getData = require("../model/item.js");
const {get: getItem, add: addItem, del: delItem} = getData;
const swig = require("swig");
const path = require("path");
const querystring = require("querystring");



class Controller {

    // 请求首页
    index (req, res, ...args) {
        const fileName = path.normalize(__dirname + "/../view/Index.html");
        getItem()
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
    }
    // 请求添加路由
    add (req, res, ...args) {
        // 读取发送的数据
        let body = "";
        req.on("data", chunk => { // 成功时
            body += chunk;
        });
        req.on("end", () => { // 完成时
            // 根据参数信息,生成任务对象,写入到文件中
            const query = querystring.parse(body);
            addItem(query.task)
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

    }
    // 请求删除路由
    delete (req, res, ...args) {
        // 1. 获取数据
        const id = args[0];
        // 2.根据数据,删除文件中对应的数据
        delItem(id)
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
    }

}
module.exports = new Controller();