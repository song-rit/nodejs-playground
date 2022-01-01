const http = require('http');

const hostname = '127.0.0.1'
const port = 2022

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end('Happy New Year 2022 & สวัสดีปีใหม่ 2565\nหวังว่าจะปีที่ดีนะ แต่ที่แน่ๆ น่าจะเป็นปีที่เหนื่อยกว่าทุกปี 555 ยังไงก็ขอแค่ให้มันสนุกกว่าทุกปีก็พอ ^_^\n')

})

server.listen(port, hostname, () => {
    console.log(`Server running at https//${hostname}:${port}/`)
})