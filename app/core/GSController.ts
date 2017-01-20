import {GS} from './GS';
import {GSTemplate} from './GSTemplate';
import {GSCommon} from "./GSCommon";

export class GSController extends GSCommon {

    public layout: string = 'main';


    write(content: string): void {
        this.notifyObservers('beforeWrite');
        GS.app().getResponse().write(content);
        this.notifyObservers('afterWrite');
    }

    end(content: string): void {
        this.notifyObservers('beforeEnd');
        GS.app().getResponse().end(content);
        this.notifyObservers('afterEnd');
    }

    render(view: string, params: Object, ret: boolean = false): void|string {
        this.notifyObservers('beforeRender');
        let templateParams: Object = {
            content: this.renderPartial(view, params, true)
        };

        if (ret) {
            return this.renderPartial('/layouts/main', templateParams, true);
        } else {
            this.renderPartial('/layouts/main', templateParams);
        }
        this.notifyObservers('afterRender');
    }

    renderPartial(view: string, params: Object = {}, ret: boolean = false): void|string {
        this.notifyObservers('beforeRenderPartial');
        let template: GSTemplate = new GSTemplate(view);
        let templateContent = template.passParams(params);
        if (ret) {
            return templateContent;
        } else {
            GS.app().getResponse().writeHead(200, 'text/html');
            this.end(templateContent);
        }
        this.notifyObservers('afterRenderPartial');
    }

}