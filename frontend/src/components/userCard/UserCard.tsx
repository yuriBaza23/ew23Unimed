import { Client, Illness, selectColor, diagnostics } from "@/utils/types";
import { Dialog, DialogTrigger } from "../ui/dialog";
import UserModal from "../dashboard/UserModal";
import useCardIllness from "@/context/useCardIllness";

type UserCardProps = {
  user: Client;
  illness: Illness;
};

const UserCard = ({ user, illness }: UserCardProps) => {
  const percentage = diagnostics
    .filter((d) => d.patientId === user.id && d.illnessId === illness.id)
    .map(
      (el) => el.porcentage?.filter((el) => el.illId === illness.id)[0].value
    );

  const { changeRate, changeIllness } = useCardIllness();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`flex flex-col gap-2 p-3 w-fit rounded bg-white hover:bg-green-50 hover:cursor-pointer`}
          onClick={() => {
            changeIllness(illness);
            changeRate(percentage as any);
          }}
        >
          <h1 className="p-0 m-0">{user.name}</h1>
          <div className={`${selectColor(percentage as any)} p-1 rounded`}>
            Fator de Risco - {percentage.length > 0 ? percentage[0] : 0}%
          </div>
        </div>
      </DialogTrigger>
      <UserModal user={user} illness={illness} />
    </Dialog>
  );
};

export default UserCard;
