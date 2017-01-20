import * as path from 'path';

export class Config {

    static basePath: string = path.resolve(__dirname, '..');
    static defaultController: string = 'Test';
    static defaultAction: string = 'index';
    static serverPort: number = 8080;

}
