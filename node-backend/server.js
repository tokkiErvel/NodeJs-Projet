const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('je suis arrivé !')
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});