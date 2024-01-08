import { createKindeServerClient, GrantType } from "kinde-typescript-sdk";

export const kindeClient = createKindeServerClient(
  GrantType.AUTHORIZATION_CODE,
  {
    authDomain: Deno.env.get("KINDE_AUTH_DOMAIN")!,
    clientId: Deno.env.get("KINDE_CLIENT_ID")!,
    clientSecret: Deno.env.get("KINDE_CLIENT_SECRET")!,
    redirectURL: Deno.env.get("KINDE_REDIRECT_URL")!,
    logoutRedirectURL: Deno.env.get("KINDE_LOGOUT_REDIRECT_URL")!,
  }
);
