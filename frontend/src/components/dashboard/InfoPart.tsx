import { User } from "@/utils/types";

type InfoPartProps = {
  user: User;
  changeIllness: (illness: string) => void;
};

const InfoPart = ({ user }: InfoPartProps) => {
  return (
    <div className="w-full">
      <h1 className="text-lg">Nome: {user.name}</h1>
      <h1 className="text-lg">Idade: {user.age}</h1>
      <div className="mt-2">
        <h1 className="text-xl">Outros Diagnosticos:</h1>
        <div className="flex flex-col gap-1">
          {user.diagnoses.map((illness, index) => (
            <div key={index} className="text-xl flex justify-center">
              <h1 className="p-1 hover:bg-gray-200 rounded-full">
                - {illness.illness} {illness.illnessRate}% {"->"}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPart;
