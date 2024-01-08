import { kindeClient } from "../kindeClient.ts";
import { FreshContext } from "$fresh/server.ts";
import { SessionState } from "../sessionState.ts";

export const handler = {
  async GET(req: Request, ctx: FreshContext<SessionState>) {
    await kindeClient.handleRedirectToApp(
      ctx.state.kindeSessionManager,
      new URL(req.url)
    );

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  },
};
