import useCardIllness from "@/context/useCardIllness";
import { Client, diagnostics, illnesses } from "@/utils/types";

type InfoPartProps = {
  user: Client;
};

const InfoPart = ({ user }: InfoPartProps) => {
  const { changeIllness, changeRate } = useCardIllness();

  const userDiagnostics = diagnostics
    .filter((d) => d.patientId === user.id)
    .map((d) => d.illnessId);

  const illness = illnesses.filter((i) => userDiagnostics.includes(i.id));

  return (
    <div className="min-w-fit">
      <h1 className="text-lg">Nome: {user.name}</h1>
      <h1 className="text-lg">Idade: {user.age}</h1>
      <div className="mt-2 text-black">
        <h1 className="text-xl">Outros Fatores de Risco:</h1>
        <div className="flex flex-col gap-1">
          {illness.map((illness, index) => (
            <div
              key={index}
              className="text-lg flex justify-center hover:cursor-pointer"
              onClick={() => {
                changeIllness(illness);
                changeRate(
                  diagnostics
                    .filter(
                      (d) =>
                        d.patientId === user.id && d.illnessId === illness.id
                    )[0]
                    .porcentage?.filter((el) => el.illId === illness.id)[0]
                    .value as number
                );
              }}
            >
              <h1 className="p-1 hover:bg-gray-200 rounded-full">
                - {illness.name}{" "}
                {
                  diagnostics
                    .filter(
                      (d) =>
                        d.patientId === user.id && d.illnessId === illness.id
                    )[0]
                    .porcentage?.filter((el) => el.illId === illness.id)[0]
                    .value
                }
                % {"->"}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPart;
