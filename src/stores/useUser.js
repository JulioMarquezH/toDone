import create from "zustand";
import { getLocalToken, getLocalUserId } from "services/storage/local";

const useUser = create((set) => ({
  token: getLocalToken() ?? "",
  userId: getLocalUserId() ?? 0,
  setToken: (token) => set((state) => ({ ...state, token })),
  setUserId: (userId) => set((state) => ({ ...state, userId })),
  setEmpty: () => set((_) => ({ token: 0, userId: 0 })),
}));

export default useUser;
