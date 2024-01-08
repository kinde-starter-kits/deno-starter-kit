import { FreshContext } from "$fresh/server.ts";
import { cookieSession } from "https://deno.land/x/fresh_session@0.2.0/mod.ts";
import { sessionManager } from "../sessionManager.ts";
import { SessionState } from "../sessionState.ts";

const session = cookieSession();

function sessionHandler(req: Request, ctx: FreshContext<SessionState>) {
  return session(req, ctx);
}

function sessionManagerHandler(_req: Request, ctx: FreshContext<SessionState>) {
  ctx.state.kindeSessionManager = sessionManager(ctx.state.session);
  return ctx.next();
}

export const handler = [sessionHandler, sessionManagerHandler];
