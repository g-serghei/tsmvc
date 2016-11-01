import * as http from 'http';

let server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello World');
});


server.listen(8080);