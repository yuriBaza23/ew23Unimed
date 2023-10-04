"use client";

import { Illness, users } from "@/utils/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import UserCard from "../userCard/UserCard";
import AgeChart from "./AgeChart";
import GenderChart from "./GenderChart";
import { ScrollArea } from "../ui/scroll-area";
import CityFilter from "./CityFilter";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Checkbox } from "../ui/checkbox";

type MainAccordionProps = {
  illness: Illness;
};

const MainAccordion = ({ illness }: MainAccordionProps) => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [hasCalendar, setHasCalendar] = useState(false);

  return (
    <Accordion
      type="single"
      collapsible
      className="border-gray-400 border-l-2 border-b-2 rounded-sm px-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full flex text-lg">
          {`${illness.name} - ${illness.localPercentage}% de beneficiários locais`}
        </AccordionTrigger>
        <AccordionContent className="">
          <div>
            <div className="flex w-full items-center">
              <div className="flex flex-col gap-10 m-2 w-full">
                <div className="flex items-center gap-28">
                  <CityFilter />
                  <div>
                    <h1 className="text-lg ">
                      Valor estimado de custos: teste
                    </h1>
                  </div>
                </div>
                <div className="flex justify-around w-full h-80">
                  <div className="items-center flex flex-col">
                    <h1 className={`text-lg`}>Gráfico por faixa etária</h1>
                    <AgeChart />
                  </div>
                  <div className="items-center flex flex-col">
                    <h1 className={`text-lg`}>Relação de Gênero</h1>
                    <GenderChart />
                  </div>
                </div>
              </div>
              <div className="w-fit flex flex-col gap-4">
                <div className="flex gap-2">
                  <Checkbox
                    id="calendar"
                    onCheckedChange={() => setHasCalendar(!hasCalendar)}
                    checked={hasCalendar}
                  />
                  <label
                    htmlFor="calendar"
                    className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                  >
                    <h1>Filtrar por Data</h1>
                  </label>
                </div>
                <Calendar
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  modifiersClassNames={{
                    today: "bg-green-500",
                  }}
                  className="rounded-md border bg-gray-300"
                  disabled={
                    !hasCalendar
                      ? true
                      : (date) =>
                          date > new Date() || date < new Date(2020, 1, 1)
                  }
                />
              </div>
            </div>
            <ScrollArea className="">
              <div className={`flex gap-4 mt-10 flex-wrap max-h-52`}>
                {users
                  .filter((user) => {
                    return (
                      user.diagnoses.filter((diagnose) => {
                        return diagnose.illness === illness.name;
                      }).length > 0
                    );
                  })
                  .map((user, index) => (
                    <UserCard key={index} user={user} illness={illness} />
                  ))}
              </div>
            </ScrollArea>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MainAccordion;
