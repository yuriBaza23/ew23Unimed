export type Address = {
  id?: string;
  city: string;
  state: string;
  patientId: string;
};

export type Admin = {
  name: string;
  password: string;
};

export type Diagnose = {
  id: string;
  patientId: string;
  addressId: string;
  illnessId: string;
  serviceId: string;
  service: string;
  dateOfService: Date;

  porcentage?: {
    illId: string;
    value: number;
  }[];
  address?: Address;
  updatedAt: Date;
};

export type Client = {
  id: string;
  name: string;
  age: string;
  peopleWhoLivesWith?: number;
  perCapitaIncome?: number;
  schooling?: string;
  hemodialysis?: boolean;
  DPOCHistory?: boolean;
  respiratoryProblem?: boolean;
  healthyEating?: boolean;
  anxiety?: string;
  emotionalLackOfControl?: string;
  insomnia?: string;
  gender?: string;
  alcoholFrequence?: string;
  smokingFrequence?: string;
  workoutFrequence?: string;
  historicOfCancer?: string;
  historicOfDiabetes?: string;
  historicOfObesity?: string;
};

export type Metrics = {
  question: string;
  value: number;
  illnessId: string;
};

export type Illness = {
  id: string;
  name: string;
  percentege: string | null;
  cost: string | null;
  averageAge: string | null;
  womenPercentage: string | null;
  metrics: any;
  atributes: string[];
};

export type Service = {
  id: string;
  code: string;
  date: Date;
  professional: string;
  description: string;
  cost: string;
  patientId: string;
};

export const selectColor = (percentage: number) => {
  if (percentage < 30) {
    return "bg-blue-400";
  } else if (percentage < 55) {
    return "bg-green-500";
  } else if (percentage < 95) {
    return "bg-yellow-400";
  } else {
    return "bg-red-500";
  }
};

export const diagnostics = [
  {
    addressId: "1",
    dateOfService: new Date("2021-01-01"),
    id: "1",
    illnessId: "1",
    patientId: "1",
    service: "Consulta",
    serviceId: "1",
    updatedAt: new Date("2021-01-01"),
    porcentage: [
      {
        illId: "1",
        value: 10,
      },
      {
        illId: "2",
        value: 20,
      },
      {
        illId: "3",
        value: 30,
      },
    ],
  },
  {
    addressId: "1",
    dateOfService: new Date("2021-01-01"),
    id: "2",
    illnessId: "2",
    patientId: "2",
    service: "Consulta",
    serviceId: "1",
    updatedAt: new Date("2021-01-01"),
    porcentage: [
      {
        illId: "1",
        value: 10,
      },
      {
        illId: "2",
        value: 20,
      },
      {
        illId: "3",
        value: 30,
      },
    ],
  },
  {
    addressId: "1",
    dateOfService: new Date("2021-01-01"),
    id: "3",
    illnessId: "2",
    patientId: "3",
    service: "Consulta",
    serviceId: "1",
    updatedAt: new Date("2021-01-01"),
    porcentage: [
      {
        illId: "1",
        value: 10,
      },
      {
        illId: "2",
        value: 70,
      },
      {
        illId: "3",
        value: 98,
      },
    ],
  },
  {
    addressId: "1",
    dateOfService: new Date("2021-01-01"),
    id: "4",
    illnessId: "3",
    patientId: "4",
    service: "Consulta",
    serviceId: "1",
    updatedAt: new Date("2021-01-01"),
    porcentage: [
      {
        illId: "1",
        value: 10,
      },
      {
        illId: "2",
        value: 20,
      },
      {
        illId: "3",
        value: 98,
      },
    ],
  },
  {
    addressId: "1",
    dateOfService: new Date("2021-01-01"),
    id: "4",
    illnessId: "1",
    patientId: "4",
    service: "Consulta",
    serviceId: "1",
    updatedAt: new Date("2021-01-01"),
    porcentage: [
      {
        illId: "1",
        value: 10,
      },
      {
        illId: "2",
        value: 20,
      },
      {
        illId: "3",
        value: 30,
      },
    ],
  },
] as Diagnose[];

export const illnesses = [
  {
    id: "1",
    name: "Diabetes",
    percentege: "80",
    cost: "R$ 1.000,00",
    averageAge: "50",
    womenPercentage: "500",
    metrics: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    atributes: [
      "idade",
      "sexo",
      "renda",
      "escolaridade",
      "tabagismo",
      "alcoolismo",
      "atividade fisica",
      "ansiedade",
      "insônia",
      "alimentação saudável",
    ],
  },
  {
    id: "2",
    name: "Renal cronica",
    percentege: "80",
    cost: "R$ 1.000,00",
    averageAge: "50",
    womenPercentage: "500",
    metrics: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    atributes: [
      "idade",
      "sexo",
      "renda",
      "escolaridade",
      "tabagismo",
      "alcoolismo",
      "atividade fisica",
      "ansiedade",
      "insônia",
      "alimentação saudável",
    ],
  },
  {
    id: "3",
    name: "Doença 3",
    percentege: "80",
    cost: "R$ 1.000,00",
    averageAge: "50",
    womenPercentage: "500",
    metrics: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    atributes: [
      "idade",
      "sexo",
      "renda",
      "escolaridade",
      "tabagismo",
      "alcoolismo",
      "atividade fisica",
      "ansiedade",
      "insônia",
      "alimentação saudável",
    ],
  },
] as Illness[];

export const users = [
  {
    alcoholFrequence: "Nunca",
    anxiety: "Nunca",
    age: "20",
    DPOCHistory: false,
    emotionalLackOfControl: "Nunca",
    gender: "Masculino",
    healthyEating: true,
    hemodialysis: false,
    historicOfCancer: "Nunca",
    historicOfDiabetes: "Nunca",
    historicOfObesity: "Nunca",
    id: "1",
    insomnia: "Nunca",
    name: "João",
    peopleWhoLivesWith: 1,
    perCapitaIncome: 1000,
    respiratoryProblem: false,
    schooling: "Ensino Superior",
    smokingFrequence: "Nunca",
    workoutFrequence: "Nunca",
  },
  {
    alcoholFrequence: "Nunca",
    anxiety: "Nunca",
    age: "20",
    DPOCHistory: false,
    emotionalLackOfControl: "Nunca",
    gender: "Feminino",
    healthyEating: true,
    hemodialysis: false,
    historicOfCancer: "Nunca",
    historicOfDiabetes: "Nunca",
    historicOfObesity: "Nunca",
    id: "2",
    insomnia: "Nunca",
    name: "Wanessa",
    peopleWhoLivesWith: 1,
    perCapitaIncome: 1000,
    respiratoryProblem: false,
    schooling: "Ensino Superior",
    smokingFrequence: "Nunca",
    workoutFrequence: "Nunca",
  },
  {
    alcoholFrequence: "Nunca",
    anxiety: "Nunca",
    age: "20",
    DPOCHistory: false,
    emotionalLackOfControl: "Nunca",
    gender: "Feminino",
    healthyEating: true,
    hemodialysis: false,
    historicOfCancer: "Nunca",
    historicOfDiabetes: "Nunca",
    historicOfObesity: "Nunca",
    id: "3",
    insomnia: "Nunca",
    name: "Marcia",
    peopleWhoLivesWith: 1,
    perCapitaIncome: 1000,
    respiratoryProblem: false,
    schooling: "Ensino Superior",
    smokingFrequence: "Nunca",
    workoutFrequence: "Nunca",
  },
  {
    alcoholFrequence: "Nunca",
    anxiety: "Nunca",
    age: "20",
    DPOCHistory: false,
    emotionalLackOfControl: "Nunca",
    gender: "Masculino",
    healthyEating: true,
    hemodialysis: false,
    historicOfCancer: "Nunca",
    historicOfDiabetes: "Nunca",
    historicOfObesity: "Nunca",
    id: "4",
    insomnia: "Nunca",
    name: "Pedro",
    peopleWhoLivesWith: 1,
    perCapitaIncome: 1000,
    respiratoryProblem: false,
    schooling: "Ensino Superior",
    smokingFrequence: "Nunca",
    workoutFrequence: "Nunca",
  },
] as Client[];
