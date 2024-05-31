"use client";

import { AuthBindings } from "@refinedev/core";
import Cookies from "js-cookie";
import axios from "axios";
import jwtDecode from "@utils/jwtDecode";


export const authProvider: AuthBindings = {
  login: async ({ email, password }) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });

      if (response.data.token) {
        // Save the token in cookies
        Cookies.set("token", response.data.token, {
          expires: 1, // 1 day
          path: "/",
          secure: true,
          sameSite: "Strict",
        });

        return {
          success: true,
          redirectTo: "/",
        };
      }

      return {
        success: false,
        error: {
          name: "LoginError",
          message: "Invalid email or password",
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: "LoginError",
          message: (error as any).response?.data?.message || "An error occurred",
        },
      };
    }
  },
  logout: async () => {
    Cookies.remove("token", { path: "/" });

    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const token = Cookies.get("token");
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    return null;
  },
  getIdentity: async () => {
    const token = Cookies.get("token");
    if (token) {
      // Decode token to get user info
      const user = jwtDecode(token);
      return user;
    }
    return null;
  },
  onError: async (error) => {
    if (error.response?.status === 401) {
      return {
        logout: true,
      };
    }

    return { error };
  },
};

