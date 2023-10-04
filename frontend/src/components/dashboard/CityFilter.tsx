import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CityFilter = () => {
  const cities = [
    "ARARUNA ",
    "BARBOSA FERRAZ",
    "BOA ESPERANCA",
    "CAMPO MOURAO",
    "CORUMBATAI DO SUL",
    "ENGENHEIRO BELTRAO",
    "FAROL",
    "FENIX",
    "IRETAMA",
    "LUIZIANA",
    "MAMBORE",
    "PEABIRU",
    "QUINTA DO SOL",
    "RONCADOR",
  ];
  const [hasFilter, setHasFilter] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cities[3]);

  return (
    <div className="flex space-x-2 items-center">
      <Checkbox
        id="terms"
        onCheckedChange={() => setHasFilter(!hasFilter)}
        checked={hasFilter}
      />
      <label
        htmlFor="terms"
        className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
      >
        Filtrar por cidade
        <Select onValueChange={(value) => setSelectedCity(value)}>
          <SelectTrigger className="w-fit bg-gray-100" disabled={!hasFilter}>
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city, index) => (
              <SelectItem key={index} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>
    </div>
  );
};

export default CityFilter;
