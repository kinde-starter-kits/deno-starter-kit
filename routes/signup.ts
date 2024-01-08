import { kindeClient } from "../kindeClient.ts";
import { FreshContext } from "$fresh/server.ts";
import { SessionState } from "../sessionState.ts";

export const handler = {
  async GET(_req: Request, ctx: FreshContext<SessionState>) {
    const register = await kindeClient.register(ctx.state.kindeSessionManager);

    return new Response(null, {
      status: 302,
      headers: {
        Location: register.toString(),
      },
    });
  },
};
