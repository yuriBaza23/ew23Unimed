import { Illness, User, selectColor } from "@/utils/types";

type UserCardProps = {
  user: User;
  illness: Illness;
};

const UserCard = ({ user, illness }: UserCardProps) => {
  const percentage = user.diagnoses
    .filter((diagnose) => diagnose.illness === illness.name)
    .map((diagnose) => diagnose.illnessRate);
  return (
    <div
      className={`flex flex-col gap-2 p-3 w-fit rounded bg-white hover:bg-green-50`}
    >
      <h1 className="p-0 m-0">{user.name}</h1>
      <div
        className={`${selectColor(
          percentage.length > 0 ? percentage[0] : 0
        )} p-1 rounded`}  
      >
        Diagnostico - {percentage.length > 0 ? percentage[0] : 0}%
      </div>
    </div>
  );
};

export default UserCard;
