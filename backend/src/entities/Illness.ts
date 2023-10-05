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
    private _diseasedClients?: IClient[];
    private _illnessMetrics?: IMetrics[];

    private constructor(props: IIllness) {
        this._id = props.id || uuid();
        this._name = props.name;
        this._illnessMetrics = props.illnessMetrics;
        this._percentege = props.percentege
        this._cost = props.cost
        this._averageAge = props.averageAge
        this._womenPercentage = props.womenPercentage
        this._diseasedClients = props.diseasedClients
    }

    static create(props: IIllness): Illness {
        return new Illness(props);
    }

    public toJSON(): IIllness {
        return {
            id: this._id,
            name: this._name,
            illnessMetrics: this._illnessMetrics,
            percentege: this._percentege,
            cost: this._cost,
            averageAge: this._averageAge,
            womenPercentage: this._womenPercentage,
            diseasedClients: this._diseasedClients
        }
    }
}