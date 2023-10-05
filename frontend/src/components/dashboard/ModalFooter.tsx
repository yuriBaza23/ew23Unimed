import { User } from "@/utils/types";

type ModalFooterProps = {
  user: User;
};

const ModalFooter = ({ user }: ModalFooterProps) => {
  return (
    <div>
      <h1 className="text-xl">Todos os serviços de {user.name}:</h1>
    </div>
  );
};

export default ModalFooter;
