export class BaseController {

    private response: any = null;

    constructor(response: any) {
        this.response = response;
    }

    write(content: string): void {
        this.response.write(content);
    }

    end(content: string): void {
        this.response.end(content);
    }

    render(view: string, params: Object, ret: boolean = false): void {

    }

    renderPartial(view: string, params: Object, ret: boolean = false): void {

    }

}