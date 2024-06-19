import { AuthPage } from "@refinedev/mui";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      rememberMe={false}
      registerLink={false}
      forgotPasswordLink={false}
      title={(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center" , gap:"15px"}}>
          <img src="/NOBG_logo.png" alt="logo" width={"30%"} />
          <b> Alquser Portfolio Dashboard</b>
        </div>
      )}
    />
  );
};
