import { Client, diagnostics, users, illnesses } from "@/utils/types";
import { format } from "date-fns";
import { Separator } from "../ui/separator";

type ModalFooterProps = {
  user: Client;
};

const ModalFooter = ({ user }: ModalFooterProps) => {
  const diagnosticsUser = diagnostics.filter((d) => d.patientId === user.id);

  return (
    <div className="flex flex-col w-full gap-2">
      <h1 className="text-xl text-center">Todos os serviços de {user.name}:</h1>
      <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded">
        {diagnosticsUser.map((d, index) => (
          <div key={index}>
            <div className="flex gap-4 h-full">
              <h1 className="text-lg">Serviço {index + 1}:</h1>
              <Separator orientation="vertical" className="h-6 bg-gray-400" />
              <h1 className="text-lg">
                Data: {format(new Date(d.dateOfService), "dd/MM/yyyy")}
              </h1>
              <Separator orientation="vertical" className="h-6 bg-gray-400" />
              <h1 className="text-lg">Diagnóstico:</h1>
              <Separator orientation="vertical" className="h-6 bg-gray-400" />
              <h1 className="text-lg">{d.service}</h1>
            </div>
            {index !== diagnosticsUser.length - 1 && (
              <Separator className="mt-2 bg-gray-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalFooter;
