import { create } from "zustand";
import { StorageEnum, UserType } from "../types";
import axiosPrivate from "../api/useAxiosConfig";

export type AuthStateType = {
  user: UserType | null;
  isAuthenticated: boolean;
  fetchUser: () => Promise<void | null>;
  logoutUser: () => void;
}

const useAuthStore = create<AuthStateType>((set) => ({
  user: null,
  isAuthenticated:false,
  fetchUser: async () => {
    try {
     const response = await axiosPrivate.get('/user/auth');
     set({user:response.data, isAuthenticated: true});
    } catch (error) {
      console.error('Zustand fetching error:', error);
    }
  },
  logoutUser: ()=>{
    localStorage.removeItem(StorageEnum.StorageString)
    set({user: null, isAuthenticated: false});
  }
}));

export default useAuthStore;