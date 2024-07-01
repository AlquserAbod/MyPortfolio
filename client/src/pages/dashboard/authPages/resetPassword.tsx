import { RegisterFormTypes, useNotification } from "@refinedev/core";
import { AuthPage } from "@refinedev/mui";
import {  useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { authProvider } from '@/providers/authProvider';

export const ResetPassword = () => {
    const { token } = useParams();
    const { open } = useNotification();
    const navigate = useNavigate();

    const onSubmit = async (values: RegisterFormTypes) => {
        if(token == undefined || values.password == undefined) return 

        const result = await authProvider.resetPassword({ token, newPassword: values.password });
        

        open?.({
            type: result.success ? 'success' : 'error',
            message: result.data?.name,
            description: result.data?.message,
        });

        if (result.success && result.redirectTo) {
            navigate(result.redirectTo);
        }
      };

    return (
        <AuthPage
        type="updatePassword"
        formProps={{ 
            onSubmit: (onSubmit)
        }}
        title={(
            <div style={{display: "flex", flexDirection: "column", alignItems: "center" , gap:"15px"}}>
            <img src="/images/NOBG_logo.png" alt="logo" width={"30%"} />
            <b> Alquser Portfolio Dashboard</b>
            </div>
        )}
        />
    );
};