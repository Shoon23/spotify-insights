import { create } from "zustand";

interface AuthStoreState {
  accessToken: string;
  expiresIn: number;
}

export const useAuthStore = create<AuthStoreState>()((set) => ({
  accessToken: "",
  expiresIn: 0,
}));
