import { IApiConfig } from "../../../interfaces/i-api-settings";

export class BaiduApiConfig implements IApiConfig {
    name: string;
    url: string;
    key: string;
    language: string;
    version: string;
    callback: string;

    constructor() {
        this.key = 'fq2Bg4g7X0NVFZyRVsFpkxOjBGiIl9QA',
            this.url = 'https://api.map.baidu.com/api',
            this.language = 'ru_RU',
            this.version = '3.0',
            this.callback = 'APILoaded'
    }
}