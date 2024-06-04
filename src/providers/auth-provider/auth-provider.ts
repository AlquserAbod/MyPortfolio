"use client";

import Cookies from 'js-cookie';
import type { AuthProvider } from "@refinedev/core";
import axios from 'axios';
import { CheckResponse } from '@refinedev/core/dist/contexts/auth/types';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + "/auth", // Replace this with your actual base URL
});
  
  const refreshToken = async () => {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
        throw new Error("No refresh token available");
    }

    const response = await axiosInstance.post('/refresh-token', { token: refreshToken });
    const { accessToken, refreshToken: newRefreshToken } = response.data;

    Cookies.set("auth", accessToken, { expires: 1 / (24 * 360) }); // Expires in 1 hour
    Cookies.set("refreshToken", newRefreshToken, { expires: 365 }); // Expires in 365 days
    return accessToken;
};

export const authProvider: AuthProvider = {
    login: async ({ email, password }) => {
        try {
            const response = await axiosInstance.post('/login', { email, password });
            const { accessToken, refreshToken } = response.data;

            Cookies.set("auth", accessToken, { expires:1 / (24 * 360) }); // Expires in 1 hour
            Cookies.set("refreshToken", refreshToken, { expires: 365 }); // Expires in 365 days
            
            return {
                success: true,
                redirectTo: "/",
            };
        } catch (error) {
            return {
                success: false,
                error: {
                    name: "LoginError",
                    message: "Invalid email or password",
                },
            };
        }
    },
    logout: async () => {
        Cookies.remove("auth");
        Cookies.remove("refreshToken");
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    check:  async (): Promise<CheckResponse> => {
        let token = Cookies.get("auth");
        
        if (!token) {
            
            return { authenticated: false, logout: true, redirectTo: "/login" };
        }

        
        try {
            await axiosInstance.get('/verify-token', { headers: { Authorization: `Bearer ${token}` } });
            return { authenticated: true };
        } catch (error : any) {
            if (error.response?.status === 401) {
                try {
                    token = await refreshToken();
                    return { authenticated: true };
                } catch {
                    return { authenticated: false, logout: true, redirectTo: "/login" };
                }
            }
            throw error
        }

    },
    getIdentity: async () => {
        const token = Cookies.get("auth");
        if (token) {
            try {
                const response = await axiosInstance.get('/me', { headers: { Authorization: `Bearer ${token}` } });
                
                
                return response.data;
            } catch (error) {
                console.log("error");
                return null;
            }
        }
        return null;
    },
    onError: async (error) => {
        if (error.response?.status === 401) {
            return {
                logout: true,
            };
        }
        console.log(error);
        
        return { error };
    },
};

