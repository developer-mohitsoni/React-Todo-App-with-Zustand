import { create } from "zustand";

interface Count {
  count: number;
  incCount: (num: number) => void;
}
export const useCount = create<Count>((set) => ({
  count: 0,
  incCount: (num: number) => {
    set((state) => ({ ...state, count: state.count + num }));
  },
}));
