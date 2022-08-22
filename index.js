const http = require('http');

const host = "127.0.0.1";
const port = 9090;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html'});
    response.end("<h1>Iniciando en el Mundo de NodeJS</h1>");
})

server.listen(port, host, () => {
    console.log(`Server is running ar http://${host}:${port}`);
})