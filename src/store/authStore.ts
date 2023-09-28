import { create } from "zustand";
import { StorageEnum, UserType } from "../types";

export type AuthStateType = {
  user: UserType | null;
  isAuthenticated: boolean;
  fetchUser: (user:UserType) => Promise<void | null>;
  setlogoutUser: () => void;
}

const useAuthStore = create<AuthStateType>((set) => ({
  user: null,
  isAuthenticated:false,
  fetchUser: async (user) => {
    try {
    //  const response = await axiosPrivate.get('/user/auth');
    //  const { user } = response.data;
    if(user){
      set({user, isAuthenticated: true});
    }
    } catch (error) {
      console.error('Zustand fetching error:', error);
    }
  },
  setlogoutUser: ()=>{
    localStorage.removeItem(StorageEnum.StorageString)
    set({user: null, isAuthenticated: false});
  }
}));

export default useAuthStore;