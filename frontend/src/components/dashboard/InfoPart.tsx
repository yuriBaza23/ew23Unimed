import useCardIllness from "@/context/useCardIllness";
import { User } from "@/utils/types";

type InfoPartProps = {
  user: User;
};

const InfoPart = ({ user }: InfoPartProps) => {
  const { changeIllness } = useCardIllness();
  return (
    <div className="min-w-fit">
      <h1 className="text-lg">Nome: {user.name}</h1>
      <h1 className="text-lg">Idade: {user.age}</h1>
      <div className="mt-2 text-black">
        <h1 className="text-xl">Outros Diagnosticos:</h1>
        <div className="flex flex-col gap-1">
          {user.diagnoses.map((illness, index) => (
            <div
              key={index}
              className="text-xl flex justify-center hover:cursor-pointer"
              onClick={() => changeIllness(illness)}
            >
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
