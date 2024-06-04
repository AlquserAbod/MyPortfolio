import { AuthPage } from "@components/auth-page";
import { authProvider, authProviderServer } from "@providers/auth-provider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Login() {
  const data = await getData();

  if (data.authenticated) {
    redirect(data?.redirectTo || "/");
  }

  return <AuthPage type="login" />;
}

async function getData() {
  const { authenticated, redirectTo, error } = await authProvider.check();
  return {
    authenticated,
    redirectTo,
    error,
  };
}
