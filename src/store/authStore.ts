import { create } from "zustand";

export type UserType = {
    _id: string,
    email: string,
    firstname: string,
    lastname: string,
    cart: [],
}

export type AuthStateType = {
    user: UserType | null;
    accessToken: string | null;
    login: (user: UserType, token: string) => void;
    logout: () => void;
    // isAuthenticated: () => boolean;

}

const useAuthStore = create<AuthStateType>((set)=>({
  user: null,
  accessToken: null,
  login: (user, accessToken) => set({ user, accessToken }),
  logout: () => set({ user: null, accessToken: null }),
//   isAuthenticated: () => !!set().user && !!set().accessToken,
}));

export default useAuthStore;