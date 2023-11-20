import { atom } from "jotai";

export const isDarkAtom = atom(false);
export const toggleAtom = atom(
    (get) => get(isDarkAtom),
    (get, set) => set(isDarkAtom, !get(isDarkAtom))
);
