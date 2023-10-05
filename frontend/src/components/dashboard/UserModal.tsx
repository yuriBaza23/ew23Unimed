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
import ModalFooter from "./ModalFooter";

type UserModalProps = {
  user: User;
  illness: Illness;
};

const UserModal = ({ user, illness }: UserModalProps) => {
  return (
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl mb-2">
          Dados do beneficiário
        </DialogTitle>
        <DialogDescription>
          <div className="flex h-full gap-4">
            <InfoPart user={user}/>
            <Separator orientation="vertical" className="bg-gray-300 h-full" />
            <IllnessPart
              user={user}
              changeIllness={() => {}}
              illness={illness}
            />
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className=" justify-center flex items-center w-full">
        <ModalFooter user={user} />
      </DialogFooter>
    </DialogContent>
  );
};

export default UserModal;
