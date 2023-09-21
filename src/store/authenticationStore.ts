import { create } from "zustand";

type UserType = {
    _id: string;
    firstname: string;
    lastname: string;
    birthdate
}

type AuthenticationStoreType = {
    user
}

const useAuthenticationStore = create({

});