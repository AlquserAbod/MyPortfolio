import type { AuthProvider } from "@refinedev/core";

export interface CustomAuthProvider extends AuthProvider {
    resetPassword: (params: { token: string, newPassword: string }) => Promise<{ success: boolean, redirectTo?: string, data?: any, error?: any }>;
}
