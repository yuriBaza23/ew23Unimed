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

  porcentage?: { id: string; name: string; value: number }[];
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
  if (percentage < 55) {
    return "bg-green-400";
  } else if (percentage < 95) {
    return "bg-yellow-300";
  } else {
    return "bg-red-400";
  }
};

export const addresses = [
  {
    city: "IRETAMA",
    patientId: "1",
    state: "PR",
    id: "1",
  },
  {
    city: "CAMPO MOURAO",
    patientId: "2",
    state: "PR",
    id: "2",
  },
] as Address[];

// export const diagnostics = [
//   {
//     addressId: "1",
//     dateOfService: new Date("2021-01-01"),
//     id: "1",
//     illnessId: "1",
//     patientId: "1",
//     service: "Consulta",
//     serviceId: "1",
//     updatedAt: new Date("2021-01-01"),
//     porcentage: [
//       {
//         illId: "1",
//         value: 10,
//       },
//       {
//         illId: "2",
//         value: 20,
//       },
//       {
//         illId: "3",
//         value: 30,
//       },
//     ],
//   },
//   {
//     addressId: "2",
//     dateOfService: new Date("2021-01-01"),
//     id: "2",
//     illnessId: "2",
//     patientId: "2",
//     service: "Consulta",
//     serviceId: "1",
//     updatedAt: new Date("2021-01-01"),
//     porcentage: [
//       {
//         illId: "1",
//         value: 10,
//       },
//       {
//         illId: "2",
//         value: 20,
//       },
//       {
//         illId: "3",
//         value: 30,
//       },
//     ],
//   },
//   {
//     addressId: "2",
//     dateOfService: new Date("2021-01-01"),
//     id: "3",
//     illnessId: "2",
//     patientId: "3",
//     service: "Consulta",
//     serviceId: "1",
//     updatedAt: new Date("2021-01-01"),
//     porcentage: [
//       {
//         illId: "1",
//         value: 10,
//       },
//       {
//         illId: "2",
//         value: 70,
//       },
//       {
//         illId: "3",
//         value: 98,
//       },
//     ],
//   },
//   {
//     addressId: "1",
//     dateOfService: new Date("2021-01-01"),
//     id: "4",
//     illnessId: "3",
//     patientId: "4",
//     service: "Consulta",
//     serviceId: "1",
//     updatedAt: new Date("2021-01-01"),
//     porcentage: [
//       {
//         illId: "1",
//         value: 10,
//       },
//       {
//         illId: "2",
//         value: 20,
//       },
//       {
//         illId: "3",
//         value: 98,
//       },
//     ],
//   },
//   {
//     addressId: "1",
//     dateOfService: new Date("2021-01-01"),
//     id: "4",
//     illnessId: "1",
//     patientId: "4",
//     service: "Consulta",
//     serviceId: "1",
//     updatedAt: new Date("2021-01-01"),
//     porcentage: [
//       {
//         illId: "1",
//         value: 10,
//       },
//       {
//         illId: "2",
//         value: 20,
//       },
//       {
//         illId: "3",
//         value: 30,
//       },
//     ],
//   },
// ] as Diagnose[];

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

export const diagnostics = [
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "fb3ef933-6595-497f-a6e1-d97b00c31dd6",
    addressId: "1",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Consulta em consultório (no horário normal ou preestabelecido)",
    dateOfService: "2023-10-05T00:00:00.000Z" as any,
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        name: "Neoplasias",
        value: 98,
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 10,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 70,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z" as any,
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "fb3ef933-6595-497f-a6e1-d97b00c31dd6",
    addressId: "1",
    illnessId: "9723efa0-2ecf-4547-ab0a-636df023de0a",
    serviceId: "183639",
    service: "Hemograma com contagem de plaquetas ou frações (eritrograma, leucograma, plaquetas)",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        name: "Neoplasias",
        value: 98,
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 70,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 10,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "fb3ef933-6595-497f-a6e1-d97b00c31dd6",
    addressId: "2",
    illnessId: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        name: "Neoplasias",
        value: 10,
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 70,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 97,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },

  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "72622e4b-7dd7-4203-be50-244fb8e65c06",
    addressId: "1",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Consulta em consultório (no horário normal ou preestabelecido)",
    dateOfService: "2023-10-05T00:00:00.000Z" as any,
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        name: "Neoplasias",
        value: 70,
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 15,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z" as any,
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "72622e4b-7dd7-4203-be50-244fb8e65c06",
    addressId: "1",
    illnessId: "9723efa0-2ecf-4547-ab0a-636df023de0a",
    serviceId: "183639",
    service: "Hemograma com contagem de plaquetas ou frações (eritrograma, leucograma, plaquetas)",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        name: "Neoplasias",
        value: 10,
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 70,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 97,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "72622e4b-7dd7-4203-be50-244fb8e65c06",
    addressId: "2",
    illnessId: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        name: "Neoplasias",
        value: 98,
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 70,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 10,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },

  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "6e3cedd7-1f0e-4b25-aace-67ed4ab200b7",
    addressId: "1",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Consulta em consultório (no horário normal ou preestabelecido)",
    dateOfService: "2023-10-05T00:00:00.000Z" as any,
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        name: "Neoplasias",
        value: 10,
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 15,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z" as any,
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "6e3cedd7-1f0e-4b25-aace-67ed4ab200b7",
    addressId: "1",
    illnessId: "9723efa0-2ecf-4547-ab0a-636df023de0a",
    serviceId: "183639",
    service: "Hemograma com contagem de plaquetas ou frações (eritrograma, leucograma, plaquetas)",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        name: "Neoplasias",
        value: 70,
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 97,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        value: 10,
        name: "Renal cronica",
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "6e3cedd7-1f0e-4b25-aace-67ed4ab200b7",
    addressId: "2",
    illnessId: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        value: 10,
        name: "Neoplasias",
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 70,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },



  
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "f78342f0-0f60-4881-9a93-d88f9f4c5d4c",
    addressId: "2",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        value: 10,
        name: "Neoplasias",
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 70,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "aeacc6a2-fc36-4073-8116-c1898be4e51f",
    addressId: "2",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        value: 10,
        name: "Neoplasias",
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 70,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "bd752228-ac24-4cdf-b353-1ea0635b7260",
    addressId: "2",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        value: 10,
        name: "Neoplasias",
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 70,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "e680ecfb-c020-4065-93a7-4df1a8cdfe1c",
    addressId: "2",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        value: 10,
        name: "Neoplasias",
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 70,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "cfd79802-c64a-421c-b3e8-c59153f6b929",
    addressId: "2",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        value: 10,
        name: "Neoplasias",
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 70,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "6e3cedd7-1f0e-4b25-aace-67ed4ab200b7",
    addressId: "2",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        value: 10,
        name: "Neoplasias",
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 70,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },
  {
    id: "1c736fd4-6156-4dcc-b1c1-5282df499475",
    patientId: "efa5e3f6-343d-4e5d-bb8b-e7178b98c290",
    addressId: "2",
    illnessId: "d7429b27-aa96-4f35-b842-58d6e149c69a",
    serviceId: "183639",
    service: "Vitamina B12 - pesquisa e/ou dosagem",
    dateOfService: "2023-10-05T00:00:00.000Z",
    porcentage: [
      {
        id: "d7429b27-aa96-4f35-b842-58d6e149c69a",
        value: 10,
        name: "Neoplasias",
      },
      {
        id: "9723efa0-2ecf-4547-ab0a-636df023de0a",
        name: "Diabetes",
        value: 98,
      },
      {
        id: "f8148b10-14d2-4a2b-8560-64f0a22fa8cb",
        name: "Renal cronica",
        value: 70,
      },
    ],
    updatedAt: "2023-10-05T15:00:36.591Z",
  },  
] as Diagnose[];
