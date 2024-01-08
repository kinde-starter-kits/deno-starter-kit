import { Handlers, PageProps } from "$fresh/server.ts";
import { SessionState } from "../sessionState.ts";
import { kindeClient } from "../kindeClient.ts";

interface Data {
  isAuth: boolean;
  name?: string;
}

export const handler: Handlers<Data, SessionState> = {
  async GET(_req, ctx) {
    const { kindeSessionManager } = ctx.state;

    const isAuth = await kindeClient.isAuthenticated(kindeSessionManager);

    let name: string | undefined;
    if (isAuth) {
      const profile = await kindeClient.getUserProfile(kindeSessionManager);
      name = profile.given_name;
    }

    return ctx.render({ isAuth, name });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        {data.isAuth && (
          <div class="flex flex-col items-center justify-center">
            <h1>Logged in as {data.name}.</h1>
            <p class="my-4">
              <a href="/logout">Logout</a>
            </p>
          </div>
        )}
        {!data.isAuth && (
          <div>
            <p class="my-4">
              <a href="/signup">Sign up</a>
            </p>
            <p class="my-4">
              <a href="/login">Login</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
