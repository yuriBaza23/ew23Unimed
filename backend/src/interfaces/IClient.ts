export interface IClient {
    id: string;
    name: string;
    birthdate: Date;
    peopleWhoLivesWith: number;
    perCapitaIncome: number;
    schooling: string;
    hemodialysis: boolean;
    DPOCHistory: boolean;
    respiratoryProblem: boolean;
    healthyEating: boolean;
    anxiety: string;
    emotionalLackOfControl: string;
    insomnia: string;
    gender: string;
    alcoholFrequence: string;
    smokingFrequence: string;
    workoutFrequence: string;
    historicOfCancer: string;
    historicOfDiabetes: string;
    historicOfObesity: string;
}