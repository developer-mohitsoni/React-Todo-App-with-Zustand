import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export type Frequency = "daily" | "weekly";
export interface Habit {
  id: string;
  name: string;
  frequency: Frequency;
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[] | [];
  isLoading: boolean;
  error: string | null;
}

interface HabitAction {
  addHabit: (name: string, frequency: Frequency) => void;
  removeHabit: (id: string) => void;
  toggleHabit: (id: string, date: string) => void;
  fetchHabits: () => Promise<void>;
}

const useHabitStore = create<HabitState & HabitAction>()(
  devtools(
    persist(
      (set, get) => {
        return {
          habits: [],
          isLoading: false,
          error: null,
          addHabit: (name, frequency) =>
            set((state) => {
              return {
                habits: [
                  ...state.habits,
                  {
                    id: Date.now().toString(),
                    name,
                    frequency,
                    completedDates: [],
                    createdAt: new Date().toISOString(),
                  },
                ],
              };
            }),
          removeHabit: (id) =>
            set((state) => ({
              habits: state.habits.filter((habit) => habit.id !== id),
            })),
          toggleHabit: (id, date) =>
            set((state) => ({
              habits: state.habits.map((habit) =>
                habit.id === id
                  ? {
                      ...habit,
                      completedDates: habit.completedDates.includes(date)
                        ? habit.completedDates.filter((d) => d !== date)
                        : [...habit.completedDates, date],
                    }
                  : habit
              ),
            })),
          fetchHabits: async () => {
            set({ isLoading: true });
            try {
              const currentHabits = get().habits;

              if (currentHabits.length > 0) {
                set({ isLoading: false });
                return;
              }
              await new Promise((resolve) => setTimeout(resolve, 1000));

              const mockHabits: Habit[] = [
                {
                  id: "1",
                  name: "Read",
                  frequency: "daily",
                  completedDates: [],
                  createdAt: new Date().toISOString(),
                },
                {
                  id: "2",
                  name: "Exercise",
                  frequency: "daily",
                  completedDates: [],
                  createdAt: new Date().toISOString(),
                },
              ];
              set({
                habits: mockHabits,
                isLoading: false,
              });
            } catch {
              set({ error: "Failed to fetch habits", isLoading: false });
            }
          },
        };
      },
      {
        name: "habits-local",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useHabitStore;
