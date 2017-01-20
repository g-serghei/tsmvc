export interface Observer {
    notify(eventName:string, params: any);
}