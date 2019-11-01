
/*
// 同步写文件
// 引入fs模块
const fs = require("fs");


// 逐步操作:
// 打开文件
const fd = fs.openSync("./01-test-txt", "w");
// 书写内容
fs.writeSync(fd, "hello");
// 关闭并保存
fs.closeSync(fd);


// 合并操作
fs.writeFileSync("./01-test-txt", "world", {flag: "a"});
*/

// 异步写文件
const fs = require("fs");
/*
//逐步操作
// 1. 打开文件
fs.open("./01-test-txt", "a", (err) => {
    if (err) {
        console.log("open file error");
    }else {
        // 2. 写入内容
        fs.write(fd, "happy", (err) => {
            if (err) {
                console.log("write file error");
            }else {
                // 3. 保存并退出
                fs.close(fd, (err => {
                    if (err) {
                        console.log("close file error");
                    }
                }))
            }
        })
    }
});
 */
//合并操作
/*
fs.writeFile("./01-test-txt", "html", {flag: "a"}, (err) => {
    if (err) {
        console.log("错误::: ", err);
    }
});
*/
// 利用promise处理异步程序
const util = require("util");
const writeFile =  util.promisify(fs.writeFile);
writeFile("./01-test-txt", "CSS", {flag: "a"})
    .then(() => {
        console.log("write file success");
    })
    .catch(() => {
        console.log("write file err");
    });

