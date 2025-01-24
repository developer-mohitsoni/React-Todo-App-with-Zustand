import { create } from "zustand";

interface Count {
  count: number;
  incCount: (num: number) => void;
}
export const useCount = create<Count>((set) => ({
  count: 0,
  incCount: async (num: number) => {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    await promise;
    set((state) => ({ ...state, count: state.count + num }));
  },
}));
