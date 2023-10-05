import { Illness } from "@/utils/types";
import { create } from "zustand";

type CardIllness = {
  illness: Illness;
  changeIllness: (illness: Illness) => void;
};

const useCardIllness = create<CardIllness>()((set) => ({
  illness: {} as Illness,
  changeIllness: (illness: Illness) => set({ illness }),
}));


export default useCardIllness;