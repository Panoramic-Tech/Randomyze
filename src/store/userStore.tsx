import { create } from "zustand";

type State = {
  auth: boolean;
};

type Actions = {
  setAuth: (auth: boolean) => void;
};
export type StoreType = State & Actions;
export const userStore = create<StoreType>()((set) => ({
  auth: false,
  setAuth: (auth) => set({ auth }),
}));
