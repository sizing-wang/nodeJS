
// console.log(process);
// console.log(global.process);
// console.log(process === global.process); // true


// 根据传入的参数,创建css/img/js文件夹
// console.log(process.argv);

// 引入fs模块
const fs = require("fs");
// 获取文件夹名称
const fileName = process.argv[2];
// 创建文件夹
fs.mkdirSync("./" + fileName);



// console.log(process.env); // 属性返回包含用户环境的对象
// console.log(process.pid); // 属性返回进程的PID。

