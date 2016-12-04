import {GS} from './GS';

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

    renderPartial(view: string, params: Object, ret: boolean = false): void {

    }

}