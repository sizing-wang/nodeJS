const fs = require("fs");
const ws = fs.createWriteStream("./01-test-txt", {flag: "a"});
// 打开可写流 => 书写流 => 完成书写 => 关闭可写流
ws.write("nihao");
ws.on('finish', () => {
    console.log("write file success ");
});
ws.write("nihao");
ws.end();
ws.on("close", () => {
    console.log("close file ... ");
})