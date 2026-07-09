"use server";

import { supabase } from "@/lib/supabase";

const VALID_ROLES = ["dev", "analyst", "engineer", "student"] as const;
type Role = (typeof VALID_ROLES)[number];

export type JoinResult =
  | { ok: true; position: number }
  | { ok: false; code: "invalid_email" | "invalid_role" | "duplicate" | "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(email: string, role: string): Promise<JoinResult> {
  const cleanEmail = email.trim().toLowerCase();

  if (!EMAIL_RE.test(cleanEmail)) {
    return { ok: false, code: "invalid_email", message: "malformed address — expected user@domain.tld" };
  }

  if (!VALID_ROLES.includes(role as Role)) {
    return { ok: false, code: "invalid_role", message: "unknown role flag" };
  }

  const { error } = await supabase.from("waitlist").insert({ email: cleanEmail, role });

  if (error) {
    if (error.code === "23505") {
      return { ok: false, code: "duplicate", message: "address already in the loop" };
    }
    return { ok: false, code: "error", message: "connection refused — try again" };
  }

  const { data: count } = await supabase.rpc("waitlist_count");

  return { ok: true, position: typeof count === "number" ? count : 0 };
}
