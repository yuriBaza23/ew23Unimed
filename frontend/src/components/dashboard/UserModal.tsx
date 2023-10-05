import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Illness, User } from "@/utils/types";
import InfoPart from "./InfoPart";
import IllnessPart from "./IllnessPart";
import { Separator } from "../ui/separator";

type UserModalProps = {
  user: User;
  illness: Illness;
};

const UserModal = ({ user , illness}: UserModalProps) => {
  return (
    <DialogContent >
      <DialogHeader>
        <DialogTitle>Dados do beneficiário</DialogTitle>
        <DialogDescription>
          <div className="flex h-full gap-4">
            <InfoPart user={user} changeIllness={() => {}} />
            <Separator orientation="vertical" className="bg-gray-300 h-full" />
            <IllnessPart user={user} changeIllness={() => {}} illness={illness} />
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className=" justify-center flex items-center w-full">
        Array
      </DialogFooter>
    </DialogContent>
  );
};

export default UserModal;
