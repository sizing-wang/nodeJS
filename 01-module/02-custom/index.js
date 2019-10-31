// 自定义模块步骤
// 1. 安装自定义的包
// 2. 引入自定义的包
// const $ = require("jquery");
// 3. 使用自定义的包
// console.log($ + "");
// console.log(module.paths);
/*
1. 在目录node_modules下的文件或者包,例如用npm安装的模块
2. 自定义模块的加载路径可以通过module.paths查看
*/

// 核心模块的优先级高于自定义模块
const fs = require("fs");
console.log(fs);