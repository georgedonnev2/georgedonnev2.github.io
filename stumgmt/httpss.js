const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // 第二个参数为 true，表示解析查询字符串

    // 检查请求方法和 URL 路径
    if (req.method === 'GET' && parsedUrl.pathname === '/ping') {
        // 设置响应头部，内容类型为 JSON
        res.setHeader('Content-Type', 'application/json');

        // 获取查询参数
        const queryParams = parsedUrl.query;

        console.log('queryParams: ', queryParams)
        console.log('type of queryParams: ', typeof(queryParams))

        // 将查询参数转为 JSON 字符串
        const response = JSON.stringify(queryParams);

        // 返回状态码 200 和查询参数
        res.writeHead(200);
        res.end(response);
    } else {
        // 对于非 `/ping` 或非 GET 请求，返回 404 Not Found
        res.writeHead(404);
        res.end('Resource not found');
    }
});

// 服务器监听 8080 端口
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080/');
});