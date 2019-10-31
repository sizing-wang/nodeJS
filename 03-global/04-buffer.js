
/*
 Buffer是用来存放二进制数据的容器:
 1. 控制台中输出的buffer,一个数字或者字母代表两个十六进制数
 2. 一个二进制的0 或者 1 代表了 1bit(位)
 3. 8bit(位) = 1B(字节) = 2个16进制数
 4. 1个英文字符 = 1B
 5. 1个汉字 = 3B
    1kb = 1024B
    1MB = 1024kb
    1GB = 1024MB
    1TB = 1024GB
*/

// Buffer.from() 用来将汉字,转换成Buffer数据
const buf1 = Buffer.from("棒");
// console.log(buf1); // <Buffer e6 a3 92>
// Buffer.alloc() 用来指定Buffer的长度, 可以指定值;
const buf2 = Buffer.alloc(10);
buf2[0] = 0xe6;
buf2[1] = 0xa3;
buf2[2] = 0x92;
// console.log(buf2);
// Buffer实例.toString() 用来将Buffer的数据转换成汉字
const buf3 = buf2.toString();
console.log(buf3);

