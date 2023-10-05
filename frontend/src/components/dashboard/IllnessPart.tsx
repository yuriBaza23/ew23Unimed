import { Illness, User } from "@/utils/types";

type IllnessPartProps = {
  user: User;
  illness: Illness;
  changeIllness: (illness: string) => void;
};

const IllnessPart = ({ user, changeIllness, illness }: IllnessPartProps) => {
  return (
    <div className="w-full flex">
      <div className="flex">
        <h1 className="text-xl">{illness.name}</h1>
        <h1 className="text-xl">
          {`Estado 
          ${
            user.diagnoses.filter((d) => d.illness === illness.name)[0]
              .illnessRate
          }%`}
        </h1>
      </div>
    </div>
  );
};

export default IllnessPart;
