
const fs = require("fs");
const rs = fs.createReadStream("./01-test-txt", {encoding: "utf-8"});

// 打开可读流 => 读取流 => 读取完毕 => 关闭读取流
rs.on("data", (chunk) => {
    console.log(chunk);
});
rs.on("end", () => {
    console.log("read file end ... ");
});
rs.on("close", () => {
    console.log("read file close ... ");
});

