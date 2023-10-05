"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type dataProps = {};

type formProps = {
  id: number;
  name: string;
  values: string[];
};

export default function Home() {
  const [data, setData] = useState<dataProps>();

  const form = [
    {
      id: 1,
      name: "Qual a sua idade?",
      values: [
        "0 - 5",
        "6 - 14",
        "15 - 18",
        "18 - 24",
        "25 - 29",
        "30 - 39",
        "40 - 49",
        "50 - 59",
        "60 ou mais",
      ],
    },
    {
      id: 2,
      name: "Quantas pessoas moram com você?",
      values: ["0", "1", "2", "3", "4+"],
    },
    {
      id: 3,
      name: "Qual a sua renda per capita?",
      values: [
        "Menos de 1 salario minimo",
        "1 a 2 salários mínimos",
        "3 a 5 salários mínimos",
        "Mais de 5 salarios minimos",
      ],
    },
    {
      id: 4,
      name: "Qual seu nivel de escolaridade?",
      values: [
        "Ensino médio incompleto",
        "Ensino médio completo",
        "Ensino superior incompleto",
        "Ensino superior completo",
        "Pós-Graduado",
      ],
    },
    {
      id: 5,
      name: "Com qual frequência você consome bebidas alcóolicas?",
      values: ["Nunca", "Raramente", "Ás vezes", "Semanalmente", "Diariamente"],
    },
    {
      id: 6,
      name: "Com qual frequência você fuma?",
      values: ["Nunca", "Raramente", "Ás vezes", "Semanalmente", "Diariamente"],
    },
    {
      id: 7,
      name: "Com qual frequência realiza atividades fisicas?",
      values: ["Nunca", "Raramente", "Ás vezes", "Semanalmente", "Diariamente"],
    },
    {
      id: 8,
      name: "Possui histórico de câncer na família?",
      values: [
        "Sim, meus pais, irmãos ou filhos",
        "Sim, meus avós, tios ou primos",
        "Não",
      ],
    },
    {
      id: 9,
      name: "Possui histórico de diabetes na família?",
      values: [
        "Sim, meus pais, irmãos ou filhos",
        "Sim, meus avós, tios ou primos",
        "Não",
      ],
    },
    {
      id: 10,
      name: "Realiza ou já realizou alguma sessão de hemodiálise?",
      values: ["Sim", "Não"],
    },
    {
      id: 11,
      name: "Possui histórico de DPOC(Doença pulmonar obstrutiva crônica) na família?",
      values: [
        "Sim, meus pais, irmãos ou filhos",
        "Sim, meus avós, tios ou primos",
        "Não",
      ],
    },
    {
      id: 12,
      name: "Tem ou já teve algum problema respiratório grave?",
      values: ["Sim", "Não"],
    },
    {
      id: 13,
      name: "Consome muitos alimentos transgênicos ou industrializados no geral?",
      values: ["Sim", "Não"],
    },
    {
      id: 14,
      name: "Possui histórico Obesidade na família?",
      values: [
        "Sim, meus pais, irmãos ou filhos",
        "Sim, meus avós, tios ou primos",
        "Não",
      ],
    },
    {
      id: 15,
      name: "Costuma se sentir ansioso?",
      values: ["Nunca", "Raramente", "Ás vezes", "Semanalmente", "Diariamente"],
    },
    {
      id: 16,
      name: "Costuma ter situações de descontrole ou alteração emocional?",
      values: ["Nunca", "Raramente", "Ás vezes", "Semanalmente", "Diariamente"],
    },
    {
      id: 17,
      name: "Possui histórico de doenças cerebrovasculares na família?",
      values: [
        "Sim, meus pais, irmãos ou filhos",
        "Sim, meus avós, tios ou primos",
        "Não",
      ],
    },
    {
      id: 18,
      name: "Tem dificuldade para dormir ou costuma sentir-se cansado o tempo todo?",
      values: ["Nunca", "Raramente", "Ás vezes", "Semanalmente", "Diariamente"],
    },
  ] as formProps[];

  return (
    <div className="w-full flex flex-col gap-4 items-center py-10 overflow-x-hidden">
      <div className="w-[40rem] flex flex-col gap-8 bg-green-100 p-10 border border-green-300 rounded">
        <div className="flex flex-col justify-center"> 
          <Image
            alt=""
            src="/logo.png"
            width={150}
            height={70}
            className="items-center flex justify-center w-2/5 self-center"
          />
          <h1 className={`font-bold text-green-600 pb-8 text-center text-2xl`}>
            Insight
          </h1>
        </div>
        <h1 className="text-center text-4xl text-green-600">Formulario</h1>
        <Input
          placeholder="Número do cartão Unimed"
          className="border border-green-500"
        />
        {form.map((f, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <h1>
              {f.id} - {f.name}
            </h1>
            <RadioGroup onValueChange={() => {}}>
              {f.values.map((v, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={v} id={v} />
                  <Label htmlFor={v}>{v}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
        <Button className="mb-32">Enviar</Button>
      </div>
    </div>
  );
}
