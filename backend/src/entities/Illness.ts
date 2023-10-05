import { uuid } from "uuidv4";
import { IClient } from "../interfaces/IClient";
import { IIllness } from "../interfaces/IIllness";
import { IMetrics } from "../interfaces/IMetrics";

export class Illness {
    private readonly _id: string;
    private readonly _name: string;
    private _percentege?: string;
    private _cost?: string;
    private _averageAge?: string;
    private _womenPercentage?: string;
    private _metrics?: IMetrics;

    private constructor(props: IIllness) {
        this._id = props.id || uuid();
        this._name = props.name;
        this._percentege = props.percentege;
        this._cost = props.cost;
        this._metrics = props.metrics;
        this._averageAge = props.averageAge;
        this._womenPercentage = props.womenPercentage;
    }

    static create(props: IIllness): Illness {
        return new Illness(props);
    }

    public toJSON(): IIllness {
        return {
            id: this._id,
            name: this._name,
            percentege: this._percentege,
            cost: this._cost,
            metrics: this._metrics,
            averageAge: this._averageAge,
            womenPercentage: this._womenPercentage,
        }
    }
}