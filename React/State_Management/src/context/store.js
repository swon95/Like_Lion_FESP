import { create } from "zustand";

const useStore = create((set) => ({
    isDark: false,
    toggleThema: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useStore;
