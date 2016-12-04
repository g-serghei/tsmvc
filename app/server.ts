import * as http from 'http';
import * as st from 'st';
import {Config} from './configs/main';
import {GS} from './core/GS';

let mount = st({ path: Config.basePath + '/public', url: '/', cache: false, passthrough: true});
let server = http.createServer((req, res) => {
    mount(req, res, () => {
        GS.app().init(req, res);
    });
});

server.listen(8080);
