export interface IIllness {
    id?: string;
    name: string;
    percentege?: string;
    cost?: string;
    averageAge?: string;
    womenPercentage?: string;
    metrics: any;
}

export interface IIllnessOutput {
    id: string;
    name: string;
    percentege: string | null;
    cost: string  | null;
    averageAge: string | null;
    womenPercentage: string | null;
}