
const fs = require("fs");
const path = require("path");
const util = require("util");
const filePath = path.normalize(__dirname + "/../data/data.json");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);



// 异步读取文件数据
async function get () {
    // 获取文件数据
    const data = await readFile(filePath, {flag: "r", encoding: "utf-8"});
    // 返回文件数据
    const arr = JSON.parse(data);
    return arr;
}
async function add (task) {
    // 读取文件中的数据
    const data = await readFile(filePath, {flag: "r", encoding: "utf-8"});
    // 将文件中的字符串数据,转换为对象
    const arr = JSON.parse(data);
    // 生成任务对象,将其添加到数据中
    const obj = {
        id: Date.now().toString(),
        task: task
    };
    arr.push(obj);
    // 将文件中的对象数据,转换为字符串,并覆盖写入到数据文件中
    await writeFile(filePath, JSON.stringify(arr));
    // 返回任务对象
    return obj;
}

async function del (id) {
    // 读取文件数据
    const data = await readFile(filePath, {flag: "r", encoding: "utf-8"});
    // 将字符串的数据转换成对象
    const arr = JSON.parse(data);
    // 根据获取的数据,删除对应对象
    const newArray = arr.filter(item => {
        // 条件判断
        return item.id != id; // 返回不等于获取到的id的其他对应的对象
    });
    // 将剩余的对象数据,转换成字符串,并重新覆盖到文件中
    await writeFile(filePath, JSON.stringify(newArray));
}

// 导出模块
module.exports = {
    get,
    add,
    del
};