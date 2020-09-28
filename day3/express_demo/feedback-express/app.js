var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use('/public/', express.static('./public/'))

// 配置使用 art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候 ，使用art-template 模板引擎
// 虽然外面这里不要加载 art-template 但是需要安装
// 原因在于 express-art-template 依赖于art-template
app.engine('html', require('express-art-template'))
// express 为 Response 响应对象提供了一个方法：render 
// render 方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
// res.render('html模板名',{模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录中查找
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放在 views 目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views',render函数的默认路径)

// 配置 body-parser 中间件（插件）
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var comments = [
    {
        name: 'Tom',
        message: 'I think this is Good',
        date: '2018-9-29'
    },
    {
        name: '张三',
        message: '今天天气好好',
        date: '2018-9-29'
    },
    {
        name: '李四',
        message: '今天太阳好大',
        date: '2018-9-29'
    }
]
app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    })
})

app.get('/addpage.html', function (req, res) {
    res.render('addpage.html')
})

/* app.get('/addMeg', function (req, res) {
    var dataObj = req.query
    dataObj.date = '2020-8-20'
    comments.unshift(dataObj)
    res.redirect('/')
}) */
app.post('/post', function (req, res) {
    var dataObj = req.body
    dataObj.date = '2020-8-20'
    comments.unshift(dataObj)
    res.redirect('/')
})
app.listen(3000, function () {
    console.log('running.....');
})