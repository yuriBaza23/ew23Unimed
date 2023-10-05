import MainAccordion from "@/components/dashboard/Accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  const illnesses = [
    "Renal crônica",
    "Diabetes",
    "Dpoc",
    "Obesidade",
    "Psquiatricas",
    "Cerebrovascular",
    "Hipertensão",
    "Cardiovasculares",
    "Neoplasias",
  ];

  return (
    <div className="w-full flex flex-col bg-white gap-1">
      <h1 className="text-4xl p-4 bg-gray-200 font-mono pl-8">
        Dados Epidemiológicos Gerais
      </h1>
      <ScrollArea className="h-full bg-gray-200">
        <div className="w-full  gap-10 p-8 flex flex-col">
          {illnesses.map((illness, index) => (
            <MainAccordion
              key={index}
              illness={{
                description: "",
                localPercentage: 20,
                name: illness,
              }}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
