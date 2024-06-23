"use client";

import Cookies from 'js-cookie';
import type { AuthProvider } from "@refinedev/core";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/auth", // Replace this with your actual base URL
});

const authtoken_key = import.meta.env.VITE_AUTH_COOKIE_KEY
const refreshtoken_key = import.meta.env.VITE_REFRESHTOKEN_COOKIE_KEY
  
const verifyRefreshToken = async () => {
  const refreshToken = Cookies.get(refreshtoken_key);

  if (!refreshToken) throw new Error("No refresh token available");

  const response = await axiosInstance.post('/refresh-token', { token: refreshToken });

  const { accessToken, refreshToken: newRefreshToken } = response.data;

  Cookies.set(authtoken_key, accessToken, { expires: 1 / (24 * 60) }); 
  Cookies.set(refreshtoken_key, newRefreshToken, { expires: 365 }); 

  return accessToken;
};

export const authProvider: AuthProvider = {
    login: async ({ email, password }) => {
        try {
            const response = await axiosInstance.post('/login', { email, password })

            const { accessToken, refreshToken } = response.data;

            Cookies.set(authtoken_key, accessToken, { expires: 1 / (24 * 60) }); 
            Cookies.set(refreshtoken_key, refreshToken, { expires: 365 }); 
          
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
        
        Cookies.remove(authtoken_key);
        Cookies.remove(refreshtoken_key);

        return {
            success: true,
            redirectTo: "/login",
        };
    },

    check:  async () => {
        // Check if has auth token in cookies
        let token = Cookies.get(authtoken_key);
        
        if (!token) {
            try {
                token = await verifyRefreshToken();
                
            } catch (error) {
                return { authenticated: false, logout: true, redirectTo: "/login" };

            }
        }
      

        
        try {
            await axiosInstance.get('/verify-token', { headers: { Authorization: `Bearer ${token}` } });
            return { authenticated: true };
        } catch (error : any) {
            return { authenticated: false, logout: true, redirectTo: "/login" };
        }



    },

    getIdentity: async () => {
        const token = Cookies.get(authtoken_key);

        if (token) {
            try {
                const response = await axiosInstance.get('/me', { headers: { Authorization: `Bearer ${token}` } });
                
                return response.data;
            } catch (error) {
                console.log("error on getIdentity :", error);

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
        console.log("error in auth provider :", error);
        
        return { error };
    },
};

