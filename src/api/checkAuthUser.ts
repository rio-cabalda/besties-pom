import { useEffect } from "react";
import axiosPrivate from "./axiosConfig";
import useAuthStore from "../store/authStore";
// import { AxiosError } from "axios";

const useCheckAuthUser = () =>{
    const { fetchUser, setlogoutUser } = useAuthStore();
    //check if the token is available or valid;
    useEffect(()=>{
        const getUser = async() =>{
          try {
            const response = await axiosPrivate.get('/user/auth');
            const {user} = response.data;
            fetchUser(user);
          } catch (error) {
            setlogoutUser();
            // const axiosError = error as AxiosError;
            // throw new Error(axiosError.response?.data?.error)
        }
      }
        getUser();
         // eslint-disable-next-line
      },[]);
}

export default useCheckAuthUser;

