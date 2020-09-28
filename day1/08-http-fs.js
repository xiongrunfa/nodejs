var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function (req, res) {
    var url = req.url;
    if (url === '/') {
        fs.readFile('./resource/index.html', function (error, data) {
            if (error) {
                res.setHeader('content-type', 'text/plain;charset=utf-8');
                res.end('文件读取失败，请稍后重试')
            } else {
                // data里面的数据是二进制
                // res.end() 支持二进制和字符串型
                res.setHeader('content-type', 'text/html;charset=utf-8');
                res.end(data)
            }
        })
    } else if (url === '/long') {
        fs.readFile('./resource/long.jpg', function (error, data) {
            if (error) {
                res.setHeader('content-type', 'text/plain;charset=utf-8');
                res.end('文件读取失败，请稍后重试')
            } else {
                // data里面的数据是二进制
                // res.end() 支持二进制和字符串型
                //utf-8 是设置编码格式 图片不需要设置
                res.setHeader('content-type', 'image/jpeg');
                res.end(data)
            }
        })
    }
});
server.listen(5000, function () {
    console.log('server is running');
})