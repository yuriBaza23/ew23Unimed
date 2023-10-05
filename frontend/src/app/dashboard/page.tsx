import MainAccordion from "@/components/dashboard/Accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Illness } from "@/utils/types";

export default function Dashboard() {
  const illnesses = [
    { name: "Renal crônica" },
    { name: "Diabetes" },
    { name: "Dpoc" },
    { name: "Obesidade" },
    { name: "Psquiatricas" },
    { name: "Cerebrovascular" },
    { name: "Hipertensão" },
    { name: "Cardiovasculares" },
    { name: "Neoplasias" },
  ] as Illness[];

  return (
    <div className="w-full flex flex-col bg-white gap-1">
      <h1 className="text-4xl p-4 bg-gray-200 font-mono pl-8">
        Dados Epidemiológicos Gerais
      </h1>
      <ScrollArea className="h-full bg-gray-200">
        <div className="w-full  gap-10 p-8 flex flex-col">
          {illnesses.map((illness, index) => (
            <MainAccordion key={index} illness={illness} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
