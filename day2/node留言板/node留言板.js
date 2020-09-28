var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')
var messageData = [
  {
    name: 'Tom',
    message: 'I think this is Good',
    date: '2018-9-29'
  },
  {
    name: 'Jerry',
    message: 'I su',
    date: '2018-9-29'
  },
]
http
  .createServer(function (req, res) {
    var urlObj = url.parse(req.url, true)
    var pathname = urlObj.pathname
    if (pathname === '/') {
      fs.readFile('./view/index.html', function (err, data) {
        if (err) {
          return res.end('404 not found')
        }
        var resultStr = template.render(data.toString(), { dataList: messageData })
        res.end(resultStr)
      })
    } else if (pathname.indexOf('/public/') === 0) {
      fs.readFile('.' + pathname, function (err, data) {
        if (err) {
          return res.end('404 not found')
        }
        res.end(data)
      })
    } else if (pathname === '/addMeg') {
      var addData = urlObj.query
      addData.date = '2020-8-19'
      messageData.unshift(addData)
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    } else {
      fs.readFile('./view' + pathname, function (err, data) {
        if (err) {
          return res.end('404 not found')
        }
        res.end(data)
      })
    }
  })
  .listen(3000, function () {
    console.log('running');
  })