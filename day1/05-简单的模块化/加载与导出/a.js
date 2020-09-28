// require 方法有两个作用：
//  1.加载文件模块并执行里面的代码
// 2.拿到被加载文件模块导出的接口对象
// 每个文件模块中都提供了一个对象：exports
var exp = require('./b');
console.log(exp.foo);
console.log(exp.add(10, 33));