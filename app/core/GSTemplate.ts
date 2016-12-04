import * as fs from 'fs';
import * as path from 'path';
import * as underscore from 'underscore';
import {Config} from '../configs/main';
import {GS} from './GS';

export class GSTemplate {

    private viewName: string = null;

    constructor(viewName: string) {
        this.viewName = viewName;
    }

    passParams(params: Object = {}): string {
        let template = underscore.template(this.getView());
        return template(params);
    }

    getView(): string {
        let stats: any = null;
        let viewPath: string;

        if (this.viewName[0] == '/') {
            viewPath = path.resolve(Config.basePath, 'views', this.viewName.slice(1) + '.html');
        } else {
            viewPath = path.resolve(Config.basePath, 'views', GS.app().controller, this.viewName + '.html');
        }

        try {
            stats = fs.lstatSync(viewPath);
        } catch (e) {
            throw new Error(`View ${viewPath} not found`);
        }


        if (!stats.isFile()) {
            throw new Error(`View ${this.viewName} not found`);
        }

        return fs.readFileSync(viewPath).toString();
    }

}