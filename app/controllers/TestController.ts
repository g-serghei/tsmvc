import {GSController} from '../core/GSController';

export class TestController extends GSController {

    public actionIndex() {
        this.render('index', {
            name: 'Serghei'
        });
    }

}