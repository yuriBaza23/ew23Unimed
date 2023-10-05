import { Illness, User, selectColor } from "@/utils/types";
import { Dialog, DialogTrigger } from "../ui/dialog";
import UserModal from "../dashboard/UserModal";

type UserCardProps = {
  user: User;
  illness: Illness;
};

const UserCard = ({ user, illness }: UserCardProps) => {
  const percentage = user.diagnoses
    .filter((diagnose) => diagnose.illness === illness.name)
    .map((diagnose) => diagnose.illnessRate);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`flex flex-col gap-2 p-3 w-fit rounded bg-white hover:bg-green-50 hover:cursor-pointer`}
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
      </DialogTrigger>
      <UserModal user={user} illness={illness} />
    </Dialog>
  );
};

export default UserCard;
