var fs = require('fs');
fs.writeFile('./你好.md', '大家好,我是node.js', function (error) {
    if (error) {
        console.log('文件写入失败了');
        console.log(error);
        return
    }
    console.log('文件写入成功');
})