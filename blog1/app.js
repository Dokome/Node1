const http = require('http');


const app = http.createServer((req, res) => {
    res.end('hello world');
});


app.listen('8000');
console.log('server is running');