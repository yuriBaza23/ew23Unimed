import { IIllness } from "../interfaces/IIllness";
import { createUUID } from "../utils/createUUID";

export class Illness {
    private readonly _id: string;
    private readonly _name: string;
    private _percentege?: string;
    private _cost?: string;
    private _averageAge?: string;
    private _atributes: string[];
    private _womenPercentage?: string;
    private _metrics?: any;

    private constructor(props: IIllness) {
        this._id = props.id || createUUID();
        this._name = props.name;
        this._atributes = props.atributes;
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
            atributes: this._atributes,
            averageAge: this._averageAge,
            womenPercentage: this._womenPercentage,
        }
    }
}