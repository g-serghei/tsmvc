import {GS} from './GS';
import {GSTemplate} from './GSTemplate';

export class GSController {

    constructor() {

    }

    write(content: string): void {
        GS.app().getResponse().write(content);
    }

    end(content: string): void {
        GS.app().getResponse().end(content);
    }

    render(view: string, params: Object, ret: boolean = false): void {

    }

    renderPartial(view: string, params: Object = {}, ret: boolean = false): void|string {
        let template: GSTemplate = new GSTemplate(view);
        let templateContent = template.passParams(params);
        if (ret) {
            return templateContent;
        } else {
            GS.app().getResponse().writeHead(200, 'text/html');
            this.end(templateContent);
        }
    }

}