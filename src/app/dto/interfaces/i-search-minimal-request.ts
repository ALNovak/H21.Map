
import { IPointMin } from "./i-point-min";
import { ISearchMinimal } from "./i-search-minimal";

export interface ISearchMinimalRequest {
    filter: ISearchMinimal;
    items: Array<IPointMin>;
    count: number;
}
