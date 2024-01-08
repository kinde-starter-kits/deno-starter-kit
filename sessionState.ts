import { WithSession } from "https://deno.land/x/fresh_session@0.2.0/mod.ts";
import { SessionManager } from "kinde-typescript-sdk";

export type SessionState = {
  kindeSessionManager: SessionManager;
} & WithSession;
