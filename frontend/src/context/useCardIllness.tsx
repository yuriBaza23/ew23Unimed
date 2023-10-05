import { Illness } from "@/utils/types";
import { create } from "zustand";

type CardIllness = {
  illness: Illness;
  changeIllness: (illness: Illness) => void;
  rate: number;
  changeRate: (rate: number) => void;
};

const useCardIllness = create<CardIllness>()((set) => ({
  illness: {} as Illness,
  changeIllness: (illness: Illness) => set({ illness }),
  rate: 0,
  changeRate: (rate: number) => set({ rate }),
}));

export default useCardIllness;
