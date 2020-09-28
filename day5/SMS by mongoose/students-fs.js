var fs = require('fs')
var dbpath = './db.json'

// 1.获取学生信息
exports.find = function (callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

exports.findByid = function (id, callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var ret = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null, ret)
    })
}
// 2.保存学生的信息
exports.save = function (student, callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbpath, fileData, function (err) {
            if (err) {
                return callback(err)
            } else {
                callback(null)
            }
        })
    })
}

// 3.根据id更新学生信息
exports.updataByid = function (student, callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        // 这里把表单传过来的id 统一转换为数字型
        student.id = parseInt(student.id)
        var ret = students.find(function (item) {
            return item.id === student.id
        })
        for (var key in student) {
            ret[key] = student[key]
        }
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbpath, fileData, function (err) {
            if (err) {
                return callback(err)
            } else {
                callback(null)
            }
        })
    })
}
// 4.根据id删除学生数据
exports.delete = function (id, callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var delIndex = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })
        students.splice(delIndex, 1)
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbpath, fileData, function (err) {
            if (err) {
                return callback(err)
            } else {
                callback(null)
            }
        })
    })
}
