
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
// const fs = require("fs");
/*
//逐步操作
// 1. 打开文件
fs.open("./01-test-txt", "a", (err, fd) => {
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
// fs.writeFile("./01-test-txt", "html", {flag: "a"}, (err) => {
//     if (err) {
//         console.log("错误::: ", err);
//     }
// });

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
*/

// 同步读文件
// 逐步操作
/*
const fs = require("fs");
// 打开文件
const fd = fs.openSync("./01-test-txt");
// 读文件
const buf = Buffer.alloc(100);
fs.readSync(fd, buf, 0, 50, 0);
console.log(buf);
// 关闭文件
fs.closeSync(fd);
*/

// 合并操作
/*
const fs = require("fs");
const fd = fs.readFileSync("./01-test-txt", {flag: "r", encoding: "utf-8"});
console.log(fd);
 */

// 异步读文件
/*
// 逐步操作
const fs = require("fs");
// 打开文件
fs.open("./01-test-txt", (err, fd) => {
    if (err) {
        console.log("open file error");
    }else {
        // 读取文件
        const buf = Buffer.alloc(100);
        fs.read(fd, buf, 0, 50, 0, (err, bytesRead, buffer) => {
            if (err) {
                console.log("read file error");
            }else {
                console.log(buffer);
            }
            // 关闭文件
            fs.close(fd, (err) => {
                if (err) {
                    console.log("close file error");
                }
            });
        });
    }
});
 */

// 合并操作
const fs = require("fs");
const util = require("util");
/*
fs.readFile("./01-test-txt", {encoding: "utf-8"}, (err, data) => {
    if (err) {
        console.log("read file error ");
    }else {
        console.log(data);
    }
});
*/
const rs = util.promisify(fs.readFile);
console.log(rs + "");
rs("./01-test-txt", {encoding: "utf-8"})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });



