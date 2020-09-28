// 1.引包
var express = require('express')
// 2.创建你的服务器应用程序
var app = express()
app.use('/public/', express.static('./public/'))
// 3.当服务器收到 get 请求 / 的时候，执行回调处理函数
app.get('/', function (req, res) {
    res.end('hello express!')
})

app.listen(3000, function () {
    console.log('app is running at port 3000');
})