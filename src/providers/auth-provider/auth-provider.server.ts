import { AuthBindings } from "@refinedev/core";
import axios from 'axios';
import { cookies } from "next/headers";
import { setCookie } from "@app/actions/setCookie";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + "/auth", // Replace this with your actual base URL
});

const refreshToken = async (refreshToken: string) => {
    try {
      
        const response = await axiosInstance.post('/refresh-token', { token: refreshToken });
        return response.data; // { accessToken, refreshToken: newRefreshToken }
    } catch (error : any) {
        console.error("Failed to refresh token:", error.response.data);
        throw error;
    }
};

export const authProviderServer: Pick<AuthBindings, "check"> = {

    check: async (r) => {

      let auth = cookies().get("auth")?.value;
      const refreshTokenCookie = cookies().get("refreshToken")?.value;



        if (!auth) {
          
            if (refreshTokenCookie) {
                // Try to refresh the token if access token is missing but refresh token is available
                try {
                    const { accessToken, refreshToken: newRefreshToken } = await refreshToken(refreshTokenCookie);
                    
                    // Update the cookies with the new tokens
                    await setCookie('auth', accessToken, { expires: 1 / 24});
                    await setCookie('refreshToken', newRefreshToken, { expires: 365});

                    // Update auth variable with new access token
                    auth = accessToken;
                } catch (refreshError) {
                  console.log("error on refresh token", refreshError);

                }
            } 
        }

        
        try {
            // Verify the access token
            await axiosInstance.get('/verify-token', { headers: { Authorization: `Bearer ${auth}` } });
            
            return {
              authenticated: true,
              redirectTo: "/"
            };
        } catch (error: any) {
            console.log("error on verify access token :", error?.response?.data);
            
            if (error.response?.status === 401 && refreshTokenCookie) {
                // Try to refresh the token if it's expired
                try {
                    const { accessToken, refreshToken: newRefreshToken } = await refreshToken(refreshTokenCookie);
                    
                    // Update the cookies with the new tokens
                    await setCookie('auth', accessToken, { expires: 1 / 24});
                    await setCookie('refreshToken', newRefreshToken, { expires: 365});


                    return {
                        authenticated: true,
                    };
                } catch (refreshError) {
                    console.error("Failed to refresh token:", refreshError);
                    return {
                        authenticated: false,
                        logout: true,
                        redirectTo: "/login",
                    };
                }
            }
            return {
                authenticated: false,
                logout: true,
                redirectTo: "/login",
            };
        }
    },
};



