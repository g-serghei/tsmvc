import {BaseController} from '../components/BaseController';

export class TestController extends BaseController {

    public actionIndex() {
        this.end('Hi');
    }

}