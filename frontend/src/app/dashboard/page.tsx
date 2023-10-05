"use client";

import MainAccordion from "@/components/dashboard/Accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import useIllness from "@/context/useIllness";
import { illnesses as fakeIll } from "@/utils/types";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Dashboard() {
  const { illnesses, isError, isLoading } = useIllness();
  const [isLoadingSync, setIsLoadingSync] = useState(false);
  const [isSync, setIsSync] = useState(false);
  const { toast } = useToast();

  function handleSync() {
    setIsLoadingSync(true);
    setTimeout(() => {
      setIsLoadingSync(false);
      setIsSync(false);
      toast({
        title: "Falha na sincronização!",
        description: "Você não tem permissão para sincronizar com o RES.",
        variant: "destructive",
      });
    }, 2000);
  }

  function openSync() {
    setIsSync(!isSync);
  }

  const nums = ["80", "70", "60", "50", "40", "30", "20", "10"];
  const costs = [
    "36000",
    "18000",
    "12000",
    "9000",
    "7200",
    "6000",
    "5142",
    "4500",
  ];

  return (
    <div className="w-full flex flex-col bg-white gap-1">
      <h1 className="text-2xl p-4 bg-white font-roboto pl-8 text-[#5b5c64] border-b-[1px] border-b-[#e2e2e2]">
        Dados Epidemiológicos Gerais
      </h1>
      <div className="p-4 bg-white">
        <AlertDialog open={isSync}>
          <AlertDialogTrigger asChild>
            <Button
              className="bg-[#439662] hover:bg-[#317449]"
              onClick={openSync}
            >
              Sincronizar com RES
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Você esta prestes a sincronizar com o RES, continuar?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Essa ação irá sincronizar os dados do RES com o sistema,
                atualizando os dados de pacientes e doenças.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsSync(false)}>
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-[#439662] hover:bg-[#317449]"
                onClick={handleSync}
              >
                {isLoadingSync ? (
                  <Loader2 className="animate-spin mr-4" size={20} />
                ) : null}
                Continuar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <ScrollArea className="h-full bg-gray-100">
        <div className="w-full  gap-10 p-8 flex flex-col">
          {illnesses?.map((illness, index) => (
            <MainAccordion
              key={index}
              illness={illness}
              cost={parseInt(costs[index])}
              num={parseInt(nums[index])}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
