import {Config} from '../configs/main';

export class GSRouter {

    private url: string = null;
    public controller: string = null;
    public action: string = null;
    public params: {[propertyName: string]: string} = {};

    constructor(url: string) {
        this.url = url;
        this.processUrl();
    }


    private processUrl() {
        let url: string = this.url;
        let paramsIndex = url.indexOf(';');
        let urlPath = url.substr(0, paramsIndex === -1 ? url.length : paramsIndex);
        let urlParams = paramsIndex === -1 ? null : url.substr(paramsIndex + 1);

        urlPath = urlPath.replace(/^[\/]+/, '');
        urlPath = urlPath.replace(/[\/]+$/, '');

        let urlElements: Array<string> = urlPath.split('/');

        if (!urlElements[0]) {
            urlElements[0] = Config.defaultController;
        }

        if (!urlElements[1]) {
            urlElements[1] = Config.defaultAction;
        }

        if (urlParams !== null) {
            let paramsTuple: Array<string> = urlParams.split(';');
            for (let i = 0; i < paramsTuple.length; i++) {
                let param = paramsTuple[i].split('=');
                this.params[param[0]] = param[0];
            }
        }

        this.controller = urlElements[0];
        this.action = urlElements[1];
    }
}