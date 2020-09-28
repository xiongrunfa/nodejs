// http这个模块的职责就是帮你创建编写服务器的

// 1.加载 http 核心模块
var http = require('http');
// 2.使用 http.createServer() 方法创建一个web 服务器
var server = http.createServer();

// 当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数：回调处理函数
// request 请求事件处理函数，需要接收两个参数：
//   request 请求对象
//        请求对象可以获取客户端的一些请求信息，例如请求路径
//  response 响应对象
//         相应对象可以用来给客户端发送响应信息
server.on('request', function (request, response) {
    console.log('收到客服端的请求了,请求路径是：' + request.url);
    // response 对象有一个方法：write 可以用来给客户端发送响应数据
    // write 可以使用很多次 ，但是最后一定要用 end 来结束响应，否则客户端会一直等待
    /* response.write('hello');
    response.write(' node.js');
    response.end() */
    // response.end('hello node.js')
    var url = request.url;
    // 相应内容只能是二进制数据或者字符串
    var arr = [{
        "name": "大牛",
        "skill": "唱歌"
    }, {
        "name": "二牛",
        "skill": "跳舞"
    }, {
        "name": "三牛",
        "skill": "画画"
    }];
    response.setHeader('content-type', 'text/plain;charset=utf-8');
    if (url === '/') {
        response.end(JSON.stringify(arr))
    } else if (url === '/login') {
        response.end('login page')
    } else {
        response.end('404 not found')
    }
})

server.listen(3000, function () {
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来访问');
})