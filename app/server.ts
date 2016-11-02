import * as http from 'http';

let server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello World');
});

// https://habrahabr.ru/post/314186/
server.listen(8080);
