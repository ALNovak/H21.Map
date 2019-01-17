import { IPointAddress } from "./i-address";
import { IPosition } from "./i-position";
import { IIcon } from "./i-icon";

export interface IPoint {
    title: string;
    name: string;
    photos: Array<IIcon>;
    address: IPointAddress;
    position: IPosition;
    id: string;
    googlePlaceId: string;
    type: string;
    source: string;
    subtype: string;
    provider: string;
}
