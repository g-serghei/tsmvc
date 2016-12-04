import {GSRouter} from "./GSRouter";
import * as controllers from '../controllers';

export class GS {

    private static instance: GS = null;
    private request: any = null;
    private response: any = null;
    private router: GSRouter = null;

    public static app(): GS {
        if (GS.instance === null) {
            GS.instance = new GS();
        }

        return GS.instance;
    }

    init(req, res) {
        this.request = req;
        this.response = res;
        this.router = new GSRouter(this.request.url);
        this.callAction();
    }

    callAction(): void {
        let controllerName = this.router.controller[0].toUpperCase() + this.router.controller.substr(1) + 'Controller';
        let actionName = 'action' + this.router.action[0].toUpperCase() + this.router.action.substr(1);

        try {
            let controller = new controllers[controllerName]();
            controller[actionName]();
        } catch (e) {
            console.log(e);
        }
    }

    getResponse() {
        return this.response;
    }

    getRequest() {
        return this.request;
    }
}