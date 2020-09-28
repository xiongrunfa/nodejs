var fs = require('fs')

var template = require('art-template')

fs.readFile('./template.html', function (err, data) {
    if (err) {
        return console.log('读取文件失败')
    }
    var ret = template.render(data.toString(), {
        name: '周润发',
        age: '30',
        province: '香港',
        hobbies: ['唱歌', '赌牌', '演戏']
    })
    console.log(ret);
})
