var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')
var app = express()

app.engine('html', require('express-art-template'))
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
// 配置 body-parser 中间件（插件） 这一步要放在app.use(router)的前面
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)
app.listen(3000, function () {
    console.log('running.....')
})