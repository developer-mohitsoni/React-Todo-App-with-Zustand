import { create } from "zustand";

interface UserStore {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  username: "markee",
  email: "markee@example.com",
  setUsername: (username: string) => set(() => ({ username })),
  setEmail: (email: string) => set(() => ({ email })),
}));
