import {GSRouter} from "./GSRouter";
import * as controllers from '../controllers';
import {GSDataBase} from "./GSDataBase";
import {GSCommon} from "./GSCommon";

export class GS extends GSCommon {

    private static instance: GS = null;
    private request: any = null;
    private response: any = null;
    private router: GSRouter = null;
    private db: GSDataBase = null;

    public controller: string = null;
    public action: string = null;


    /**
     * Get application singleton instance
     * @returns {GS}
     */
    public static app(): GS {
        if (GS.instance === null) {
            GS.instance = new GS();
        }

        return GS.instance;
    }


    /**
     * Init the framework with request and response objects
     * @param req
     * @param res
     */
    init(req, res) {
        this.request = req;
        this.response = res;
        this.router = new GSRouter(this.request.url);
        this.controller = this.router.controller;
        this.action = this.router.action;
        this.callAction();
    }


    /**
     * Get requested controller and action and call it
     */
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


    /**
     * Get database object
     * @returns {GSDataBase}
     */
    getDb() {
        return this.db;
    }


    /**
     * Get response object
     * @returns {any}
     */
    getResponse() {
        return this.response;
    }


    /**
     * Get request object
     * @returns {any}
     */
    getRequest() {
        return this.request;
    }
}