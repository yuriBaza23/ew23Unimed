import { Illness, User, selectColor } from "@/utils/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import useCardIllness from "@/context/useCardIllness";

type IllnessPartProps = {
  user: User;
  illness: Illness;
  changeIllness: (illness: string) => void;
};

const IllnessPart = ({ user, changeIllness, illness }: IllnessPartProps) => {
  const rate = user.diagnoses.filter((d) => d.illness === illness.name)[0]
    .illnessRate;

  const {illness: illnessName} = useCardIllness();

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
                Porcentagem de risco do paciente em conter a doença{" "}
                {illness.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <h1 className="text-lg">Diagnosticado desde: Date</h1>
      <div className="mt-2">
        <h1 className="text-lg text-black">
          {"->"} Diagnosticado de acordo com:
        </h1>
      </div>
    </div>
  );
};

export default IllnessPart;
