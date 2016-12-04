import {Config} from './configs/main';
import * as http from 'http';
import * as controllers from './controllers';
import {TestController} from "./controllers/TestController";



let server = http.createServer((req, res) => {
    let url: string = req.url;
    url = url.replace(/^[\/]+/, '');
    url = url.replace(/[\/]+$/, '');

    let urlElements: Array<string> = url.split('/');

    if (!urlElements[0]) {
        urlElements[0] = Config.defaultController;
    }

    if (!urlElements[1]) {
        urlElements[1] = Config.defaultAction;
    }

    let controllerName: string = urlElements[0][0].toLocaleUpperCase() + urlElements[0].substr(1) + 'Controller';
    let actionName: string = 'action' + urlElements[1][0].toLocaleUpperCase() + urlElements[1].substr(1);

    if (controllers.hasOwnProperty(controllerName)) {
        console.log('found controller');
        let controller = new controllers[controllerName](res);

        try {
            controller[actionName]();
        } catch (e) {
            console.log(e);
        }
    }
});

server.listen(8080);