import { Client, diagnostics, selectColor } from "@/utils/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import useCardIllness from "@/context/useCardIllness";
import { format } from "date-fns";

type IllnessPartProps = {
  user: Client;
  changeIllness: (illness: string) => void;
};

const IllnessPart = ({ user, changeIllness }: IllnessPartProps) => {
  const { illness, rate } = useCardIllness();

  const illnessDiagnostics = diagnostics.filter(
    (d) => d.patientId === user.id && d.illnessId === illness.id
  );

  console.log(illness)

  return (
    <div className="w-full">
      <div className="flex justify-between w-full text-black items-center">
        <h1 className="text-xl">{illness.name}</h1>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h1
                className={`text-xl text-white ${selectColor(
                  rate
                )} px-4 py-1 rounded-full hover:cursor-pointer`}
              >
                {`Estado 
          ${rate}%`}
              </h1>
            </TooltipTrigger>
            <TooltipContent>
              Porcentagem de risco do paciente em conter a doença {illness.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <h1 className="text-lg">
        Observado desde:{" "}
        {format(new Date(illnessDiagnostics[0]?.dateOfService), "dd/MM/yyyy")}
      </h1>
      <div className="mt-2">
        <h1 className="text-lg text-black">
          {"->"} Diagnosticado de acordo com:
        </h1>
      </div>
    </div>
  );
};

export default IllnessPart;
