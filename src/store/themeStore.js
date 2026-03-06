import { create } from "zustand";

export const useThemeStore = create((set) => ({
  isDarkTheme: true,
  toggleTheme: () => {
    set((state) => ({
        isDarkTheme: !state.isDarkTheme,
    }));
  },
}));
