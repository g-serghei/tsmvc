import {GSController} from '../core/GSController';
import {Observer} from "../core/observer/Observer";

export class TestController extends GSController implements Observer {

    constructor() {
        super();
        this.registerObserver('beforeRender', this);
    }

    notify(eventName: string, params: any) {
        console.log(eventName, params);
    }

    public actionIndex() {
        this.render('index', {
            name: 'Serghei'
        });
    }

}