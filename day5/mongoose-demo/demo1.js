var mongoose = require('mongoose')
var Schema = mongoose.Schema
// 1.连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动创建出来
mongoose.connect('mongodb://localhost/itcast')

// 2.设计文档结构
var userSchema = new Schema({
    username: {
        type: String,
        required: true   //必须有
    },
    password: {
        type: String,
        required: true   //必须有
    },
    email: {
        type: String,
    }
})

// 3.将文档结构发布为模型
//   mongoose.moedl 方法就是用来将一个架构发布为 model
//   第一个参数：传入一个单数的大写名词字符串用来表示你的数据库名称
//               mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//               例如这里的 User 最终会变为 users 集合名称
//   第二个参数：架构 Schema
var User = mongoose.model('User', userSchema)
// 4.当我们有了模型构造函数之后，就可以使用和这个构造函数 对user 集合中的数据进行操作了

// 新增数据
/* var admin = new User({
    username: 'zhangsan',
    password: '123456',
    email: 'admin@admin.com'
})

admin.save(function (err, ret) {
    if (err) {
        console.log('保存失败')
    } else {
        console.log('保存成功')
        console.log(ret)
    }
}) */

// 查询数据

// 查询所有
/* User.find(function (err, ret) {
    if (err) {
        console.log('查询失败')
    } else {
        console.log(ret);
    }
}) */
// 根据条件查询
/* User.find({
    username: 'zhangsan'
}, function (err, ret) {
    if (err) {
        console.log('查询失败')
    } else {
        console.log(ret);
    }
}) */

// 删除数据
/* User.remove({
    username: 'admin'
}, function (err, ret) {
    if (err) {
        console.log('删除失败')
    } else {
        console.log(ret);
    }
}) */

/* User.findByIdAndRemove('5f41d9e7e5e3ae37ccb33324', function (err, ret) {
    if (err) {
        console.log('删除失败')
    } else {
        console.log(ret);
    }
}) */

// 更新数据
User.findByIdAndUpdate('5f41d9ff2acdaf586c763a94', {
    password: '123456789'
}, function (err, ret) {
    if (err) {
        console.log('更新失败')
    } else {
        console.log(ret);
    }
})