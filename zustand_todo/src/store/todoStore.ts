import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

export interface TodoType {
  id: number;
  todo: string;
  isDone: boolean;
}
interface States {
  todos: TodoType[] | [];
}

interface Actions {
  addTodo: (todo: TodoType) => void;
  toggleTodo: (id: number, isChecked: boolean) => void;
  deleteTodo: (id: number) => void;
}

export const todoStore = create<States & Actions>()(
  devtools(
    persist(
      (set) => ({
        todos: [],

        addTodo: (todo: TodoType) =>
          set((state) => ({ todos: [...state.todos, todo] })),

        toggleTodo: (id: number, isChecked: boolean) =>
          set((state) => ({
            todos: state.todos.map((item) => {
              if (item.id === id) {
                item.isDone = isChecked;
              }
              return item;
            }),
          })),
        deleteTodo: (id: number) =>
          set((state) => ({
            todos: state.todos.filter((item) => item.id !== id),
          })),
      }),
      { name: "todoStore" }
    )
  )
);
