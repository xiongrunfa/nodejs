var fs = require('fs')
var express = require('express')
var student = require('./students.js')
const students = require('./students.js')

// 1.创建一个路由容器
var router = express.Router()
// 2.把路由都挂载到 router 路由容器中
router.get('/students', function (req, res) {
    // fs.readFile 第二个可选参数 设置utf8 可以将从文件读取的二进制数据转换为字符串
    /* fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('server err')
        }
        res.render('index.html', {
            students: JSON.parse(data).students
        })
    }) */
    student.find(function (err, students) {
        if (err) {
            return res.status(500).send('server err')
        }
        res.render('index.html', {
            students: students
        })
    })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})
router.post('/students/new', function (req, res) {
    new student(req.body).save(function (err) {
        if (err) {
            return res.status(500).send('server err')
        }
        res.redirect('/students')
    })
})
router.get('/students/edit', function (req, res) {
    student.findById(req.query.id.replace(/"/g, ''), function (err, student) {
        if (err) {
            return res.status(500).send('server err')
        }
        res.render('edit.html', {
            student: student
        })
    })
})
router.post('/students/edit', function (req, res) {
    student.findByIdAndUpdate(req.body.id.replace(/"/g, ''), req.body, function (err) {
        if (err) {
            return res.status(500).send('server err')
        }
        res.redirect('/students')
    })
})
router.get('/students/delete', function (req, res) {
    student.findByIdAndRemove(req.query.id.replace(/"/g, ''), function (err) {
        if (err) {
            return res.status(500).send('server err')
        }
        res.redirect('/students')
    })
})

module.exports = router