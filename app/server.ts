import * as http from 'http';
import {GS} from './core/GS';

let server = http.createServer((req, res) => {
    GS.app().init(req, res);
});

server.listen(8080);
