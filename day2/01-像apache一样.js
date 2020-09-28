var http = require('http')
var fs = require('fs')
var server = http.createServer()
var wwwDir = 'C:/Users/donsaynoto熊/Desktop/node.js/day2/www'
server.on('request', function (req, res) {
    var url = req.url
    var filePath = '/index.html'
    if (url !== '/') {
        filePath = url
    }
    fs.readFile(wwwDir + filePath, function (err, data) {
        if (err) {
            return res.end('404 not found')
        }
        res.end(data)
    })
})
server.listen(3000, function () {
    console.log('running....');
})