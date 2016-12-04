import {GSController} from '../core/GSController';

export class TestController extends GSController {

    public actionIndex() {
        this.renderPartial('index', {
            name: 'Serghei'
        });
    }

}