import type { SessionManager } from "kinde-typescript-sdk";
import { Session } from "https://deno.land/x/fresh_session@0.2.0/mod.ts";

// Due to cookie limits store the minimum items that need to be persistent.
const keysInCookie = ["refresh_token", "access_token", "ac-state-key"];
let memorySession: Record<string, any> = {};

export function sessionManager(session: Session): SessionManager {
  return {
    getSessionItem: async (itemKey: string) => {
      if (keysInCookie.includes(itemKey)) {
        return session.get(itemKey);
      }
      return memorySession[itemKey];
    },
    setSessionItem: async (itemKey: string, itemValue: unknown) => {
      if (keysInCookie.includes(itemKey)) {
        session.set(itemKey, itemValue);
        return;
      }
      memorySession[itemKey] = itemValue;
    },
    removeSessionItem: async (itemKey: string) => {
      if (keysInCookie.includes(itemKey)) {
        session.set(itemKey, undefined);
      } else {
        delete memorySession[itemKey];
      }
    },
    destroySession: async () => {
      session.clear();
      memorySession = {};
    },
  };
}
