const http = require('http');
const port = 1337;

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.write('My server is running');
    res.end();
}).listen(port);










