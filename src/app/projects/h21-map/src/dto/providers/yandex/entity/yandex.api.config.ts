import { IApiConfig } from "../../../interfaces/i-api-settings";

export class YandexApiConfig implements IApiConfig {
    name: string;
    url: string;
    key: string;
    language: string;
    version: string;
    callback:string;

    constructor() {
        this.key = '',
            this.url = 'https://api-maps.yandex.ru',
            this.language = 'en_US',
            this.version = '2.1.72',
            this.callback ='APILoaded'
    }
}