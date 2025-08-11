import api from "../utils/api";
import {
    generalAPISuccessResponse,
    generalAPIErrorResponse,
} from '../app/types/apiTypes';
import {
    CurrentUserResponse,
    UserListResponse
} from "../app/types/userTypes";
import { AxiosError } from 'axios';

const userServices = {
    getCurrent: async (): Promise<CurrentUserResponse> => {
        try {
            const res = await api.get<CurrentUserResponse>("/users/current");
            return res.data;
        } catch (error) {
            const err = error as AxiosError<generalAPIErrorResponse>;
            console.error("Error fetching current user: ", err);
            throw err.response?.data?.errors || "Something went wrong";
        }
    },

    getUsers: async (
        page?: number,
        search?: string
    ): Promise<UserListResponse> => {
        try {
            const res = await api.get<UserListResponse>("/users", {
                params: { page, search },
            });
            return res.data;
        } catch (error) {
            const err = error as AxiosError<generalAPIErrorResponse>;
            console.error("Error fetching users: ", err);
            throw err.response?.data?.errors || "Something went wrong";
        }
    },
};

export default userServices;