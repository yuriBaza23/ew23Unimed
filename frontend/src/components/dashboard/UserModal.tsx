import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Client, Illness } from "@/utils/types";
import InfoPart from "./InfoPart";
import IllnessPart from "./IllnessPart";
import { Separator } from "../ui/separator";
import ModalFooter from "./ModalFooter";

type UserModalProps = {
  user: Client;
  illness: Illness;
};

const UserModal = ({ user, illness }: UserModalProps) => {
  return (
    <DialogContent className="max-w-7xl">
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
            />
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className=" flex items-center w-full h-full">
        <ModalFooter user={user} />
      </DialogFooter>
    </DialogContent>
  );
};

export default UserModal;
