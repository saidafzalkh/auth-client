import { create } from "zustand";
import { usersStoreInterface } from "../types/usersStore.interface";

export const useUserStore = create<usersStoreInterface>((set) => ({
  users: [],

  setUsers(users) {
    set((state) => ({
      users: users.map((user) => ({
        ...user,
        checked: state.users.find((c) => c.id === user.id)?.checked
          ? true
          : false,
      })),
    }));
  },

  handleUserCheck(id) {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, checked: !user.checked } : user
      ),
    }));
  },

  handleSelectAll(checked) {
    set((state) => ({
      users: state.users.map((user) => ({ ...user, checked })),
    }));
  },
}));
