import { IApiConfig } from "../../../interfaces/i-api-settings";

export class GoogleApiConfig implements IApiConfig {
    name: string;
    url: string;
    key: string;
    language: string;
    version: string;
    callback:string;

    constructor() {
        this.key = 'AIzaSyC7bK1ihkGvGumGoL2_kMR7tiB1CylMuHo',
            this.url = 'https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing',
            this.language = 'en',
            this.version = '',
            this.callback='APILoaded'
    }
}