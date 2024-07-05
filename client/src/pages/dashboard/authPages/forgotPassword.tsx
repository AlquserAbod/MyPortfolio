import { Box, Link, Typography } from "@mui/material";
import { RegisterFormTypes, useForgotPassword } from "@refinedev/core";
import { AuthPage } from "@refinedev/mui";

type forgotPasswordVariables = {
  email: string;
};

export const ForgotPassword = () => {
  const { mutate: forgotPassword } =
    useForgotPassword<forgotPasswordVariables>();

  const onSubmit = (values : RegisterFormTypes) => {
    
    forgotPassword({email: values.email || ''});
  };

  return (
    <AuthPage
      type="forgotPassword"
      formProps={{ 
        onSubmit: (onSubmit)
      }}
      loginLink={
        <Box  display={"flex"} gap={0.5} alignItems={"center"} mt={1}>
          <Typography variant="body2">Have an account?</Typography>

          <Link href="/dashboard/login" variant="body2" style={{ textDecoration: 'none' }}>
            Sign in
          </Link>
        </Box>
      }

      title={(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center" , gap:"15px"}}>
          <img src="/images/NOBG_logo.png" alt="logo" width={"30%"} />
          <b> Alquser Portfolio Dashboard</b>
        </div>
      )}
    />
  );
};