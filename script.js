const http = require('http');
const fs = require('fs');
const port = 3010;

let log = 'You are now in FS file system';

// Append to file asynchronously when the server starts
fs.appendFile('mynewfile1.txt', `${log}\n`, (err) => {
    if (err) {
        console.error(' 404 Error appending to file:', err);
    } else {
        console.log('Appended to file:', log);
    }
});

// Read file and log content
fs.readFile('mynewfile1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(' 404 Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});

const server = http.createServer((req, res) => {
    if (req.url === '/') { 
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to the home page</h1>');
    } else if (req.url === '/About') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to the About page</h1>');
    } else if (req.url === '/Contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Contact with 911</h1>');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404 page not found</h1>');
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
