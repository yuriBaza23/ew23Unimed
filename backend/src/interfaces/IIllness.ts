export interface IIllness {
    id?: string;
    name: string;
    percentege?: string;
    cost?: string;
    averageAge?: string;
    womenPercentage?: string;
    metrics: any; //{"1":[0,1,5], "2":[0,2,3,4,5], "3":[0,1]}
    atributes: string[]; //{"alcoholFrequence", "gender"}
}

export interface IIllnessOutput {
    id: string;
    name: string;
    percentege: string | null;
    cost: string  | null;
    averageAge: string | null;
    womenPercentage: string | null;
    metrics: any;
    atributes: string[];
}