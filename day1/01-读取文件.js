// 1.使用require 方法加载 fs 核心模块
var fs = require('fs');
// 2.读取文件
// 读取成功
//      data 返回数据
//      error 返回 null
//读取失败
//      data 返回 undefind
//      error 返回 错误对象 
fs.readFile('./hello.txt', function (error, data) {
    // console.log(data);
    // <Buffer e4 bd a0 e5 a5 bd 2c 6e 6f 64 65 2e 6a 73>   文件中储存的是二进制数据  直接打印出来的是十六进制数据 
    // 我们需要把数据转换成字符串
    if (error) {
        console.log("读取失败了");
        return
    }
    console.log(data.toString());
})