import { create } from "zustand";

export const useCharacterCounterStore = create((set) => ({
  text: "",
  isExcludeSpacesActive: false,
  isCharacterLimitActive: false,
  setCharacterLimitActive: (value) =>
    set({ isCharacterLimitActive: value, characterLimit: "" }),
  characterLimit: "",
  setCharacterLimit: (value) => set({ characterLimit: value }),
  setIsExcludeSpacesActive: (value) => set({ isExcludeSpacesActive: value }),
  setText: (value) => set({ text: value }),
}));
