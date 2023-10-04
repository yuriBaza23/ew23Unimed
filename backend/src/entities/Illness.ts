import { IClient } from "../interfaces/IClient";
import { IIllness } from "../interfaces/IIllness";

export class Illness {
    private readonly _id: string;
    private _percentege?: number;
    private _cost?: string;
    private _averageAge?: string;
    private _womenPercentage?: number;
    private _diseasedClients?: IClient[];

    constructor(props: IIllness) {
        this._id = props.id;
    }

}