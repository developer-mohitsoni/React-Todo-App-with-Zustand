import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface Count {
  count: number;
  incCount: (num: number) => void;
  decCount: (num: number) => void;
}
export const useCount = create<Count>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        incCount: (num) => {
          // console.log("Clicked");
          // const promise = new Promise((resolve) => {
          //   setTimeout(resolve, 2000);
          // });
          // await promise;
          set((state) => ({ ...state, count: state.count + num }));
        },
        decCount: (num) => {
          //  Ensure count does not go below 0
          set((state) => ({ ...state, count: Math.max(0, state.count - num) }));
        },
      }),
      { name: "countPanda" }
    )
  )
);
