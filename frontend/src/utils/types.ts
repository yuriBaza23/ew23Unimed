export type Illness = {
  name: string;
  description: string;
  localPercentage: number;
};

export type Diagnose = {
  userId: string;
  illness: string;
  illnessRate: number;
  resetDate: Date | string;
};

export type User = {
  name: string;
  age: number;
  diagnoses: Diagnose[];
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

export const users = [
  {
    name: "calvo",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 40,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 20,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 98 ,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 20,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 98,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 20,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 20,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 20,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
  {
    name: "João",
    age: 20,
    diagnoses: [
      {
        illness: "Diabetes",
        illnessRate: 80,
        resetDate: "2021-10-10",
        userId: "1",
      },
      {
        name: "João",
        age: 20,
        diagnoses: [
          {
            illness: "Diabetes",
            illnessRate: 80,
            resetDate: "2021-10-10",
            userId: "1",
          },
          {
            illness: "Covid-19",
            illnessRate: 96,
            resetDate: "2021-10-10",
            userId: "1",
          },
        ],
      },
      {
        name: "João",
        age: 20,
        diagnoses: [
          {
            illness: "Diabetes",
            illnessRate: 80,
            resetDate: "2021-10-10",
            userId: "1",
          },
          {
            illness: "Covid-19",
            illnessRate: 96,
            resetDate: "2021-10-10",
            userId: "1",
          },
        ],
      },
      {
        name: "João",
        age: 20,
        diagnoses: [
          {
            illness: "Diabetes",
            illnessRate: 80,
            resetDate: "2021-10-10",
            userId: "1",
          },
          {
            illness: "Covid-19",
            illnessRate: 96,
            resetDate: "2021-10-10",
            userId: "1",
          },
        ],
      },
      {
        name: "João",
        age: 20,
        diagnoses: [
          {
            illness: "Diabetes",
            illnessRate: 80,
            resetDate: "2021-10-10",
            userId: "1",
          },
          {
            illness: "Covid-19",
            illnessRate: 96,
            resetDate: "2021-10-10",
            userId: "1",
          },
        ],
      },
      {
        name: "João",
        age: 20,
        diagnoses: [
          {
            illness: "Diabetes",
            illnessRate: 80,
            resetDate: "2021-10-10",
            userId: "1",
          },
          {
            illness: "Covid-19",
            illnessRate: 96,
            resetDate: "2021-10-10",
            userId: "1",
          },
        ],
      },
      {
        name: "João",
        age: 20,
        diagnoses: [
          {
            illness: "Diabetes",
            illnessRate: 80,
            resetDate: "2021-10-10",
            userId: "1",
          },
          {
            illness: "Covid-19",
            illnessRate: 96,
            resetDate: "2021-10-10",
            userId: "1",
          },
        ],
      },
      {
        name: "João",
        age: 20,
        diagnoses: [
          {
            illness: "Diabetes",
            illnessRate: 80,
            resetDate: "2021-10-10",
            userId: "1",
          },
          {
            illness: "Covid-19",
            illnessRate: 96,
            resetDate: "2021-10-10",
            userId: "1",
          },
        ],
      },
      {
        illness: "Covid-19",
        illnessRate: 96,
        resetDate: "2021-10-10",
        userId: "1",
      },
    ],
  },
] as User[];