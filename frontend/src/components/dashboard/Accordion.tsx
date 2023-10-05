"use client";

import {
  Illness,
  users as fakeUsers,
  diagnostics,
  addresses,
} from "@/utils/types";
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
import { Label } from "../ui/label";
import useUsers from "@/context/useUsers";

type MainAccordionProps = {
  illness: Illness;
};

const MainAccordion = ({ illness }: MainAccordionProps) => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [hasCalendar, setHasCalendar] = useState(false);
  const [city, setCity] = useState("");

  const { isError, isLoading, users } = useUsers();

  const userIds = diagnostics
    .filter((diagnose) => {
      return diagnose.illnessId === illness.id;
    })
    .map((el) => el.patientId);

  const userObj = users?.filter((user) => {
    return userIds.includes(user.id);
  });

  const diagnosticsObj = diagnostics
    .filter((diagnose) => {
      return diagnose.illnessId === illness.id;
    })
    .filter((diagnose) => {
      return (
        diagnose.addressId ===
        addresses.find((address) => address.city === city)?.id
      );
    });

  const userCity = users?.filter((user) => {
    return diagnosticsObj
      .map((diagnose) => diagnose.patientId)
      .includes(user.id);
  });

  const [filters, setFilters] = useState({
    green: false,
    yellow: false,
    red: false,
  });


  return (
    <Accordion
      type="single"
      collapsible
      className="border-gray-400 border-l-2 border-b-2 rounded-sm px-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full flex text-lg">
          {`${illness.name} - ${illness.percentege ? illness.percentege : 0}% de beneficiários locais`}
        </AccordionTrigger>
        <AccordionContent className="">
          <div>
            <div className="flex w-full items-center">
              <div className="flex flex-col gap-10 m-2 w-full">
                <div className="flex items-center gap-28">
                  <CityFilter
                    changeCity={(city) => setCity(city)}
                    city={city}
                  />
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
            <div className="flex p-4 bg-white w-fit gap-2 mt-10 rounded">
              <h1>Fitros de Risco:</h1>
              <div className="flex gap-10 items-center">
                <div className="flex gap-2">
                  <Checkbox
                    id="< 55"
                    onCheckedChange={() => {
                      setFilters({ ...filters, green: !filters.green });
                    }}
                    checked={filters.green}
                  />
                  <Label htmlFor="< 55">
                    Risco baixo{" "}
                    <span className="bg-green-400 rounded-full">{"(<55)"}</span>
                  </Label>
                </div>
                <div className="flex gap-2">
                  <Checkbox
                    id="< 95"
                    onCheckedChange={() => {
                      setFilters({ ...filters, yellow: !filters.yellow });
                    }}
                    checked={filters.yellow}
                  />
                  <Label htmlFor="< 95">
                    Risco moderado{" "}
                    <span className="bg-yellow-400 rounded-full">
                      {"(<95)"}
                    </span>
                  </Label>
                </div>
                <div className="flex gap-2">
                  <Checkbox
                    id="< 100>"
                    onCheckedChange={() => {
                      setFilters({ ...filters, red: !filters.red });
                    }}
                    checked={filters.red}
                  />
                  <Label htmlFor="< 100>">
                    Risco alto{" "}
                    <span className="bg-red-400 rounded-full">{"(<100)"}</span>
                  </Label>
                </div>
              </div>
            </div>
            <ScrollArea className="">
              <div className={`flex gap-4 mt-2 flex-wrap max-h-52`}>
                {city === ""
                  ? userObj?.map((user, index) => (
                      <UserCard key={index} user={user} illness={illness} />
                    ))
                  : userCity?.map((user, index) => (
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
