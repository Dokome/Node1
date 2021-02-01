const http = require('http');
const serverHandle = require('../app');
const PORT = 8000;



const app = http.createServer(serverHandle);
app.listen(PORT);

console.log('server is running');