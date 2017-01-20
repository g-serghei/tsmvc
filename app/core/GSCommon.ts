import {Observer} from "./observer/Observer";

export class GSCommon {

    private observers: {[eventName: string]: Array<Observer>} = {};


    /**
     * Notify all observers by event and pass params to them
     * @param eventName
     * @param params
     */
    notifyObservers(eventName: string, params: any = null) {
        if (!this.observers.hasOwnProperty(eventName) || this.observers[eventName].length == 0) return;
        this.observers[eventName].forEach((observer: Observer) => {
            observer.notify(eventName, params);
        })
    }


    /**
     * Register observer which will be notified on passed event
     * @param eventName
     * @param observer
     */
    registerObserver(eventName: string, observer: Observer) {
        if (!this.observers.hasOwnProperty(eventName)) {
            this.observers[eventName] = [];
        }

        this.observers[eventName].push(observer);
    }


    /**
     * Unregister observer
     * @param eventName
     * @param observer
     */
    unregisterObserver(eventName: string, observer: Observer) {
        if (!this.observers[eventName]) return;
        let index: number = this.observers[eventName].indexOf(observer);
        this.observers[eventName].splice(index, 1);
    }

}