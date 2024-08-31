const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'src', 'index.html');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading index.html');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

