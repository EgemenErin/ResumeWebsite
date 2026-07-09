"use client";

import { useCallback, useEffect, useState } from "react";
import { joinWaitlist } from "./actions";

const BANNER = `┌─┐┌─┐┬─┐╭┬ ┬╮
├┤ │ │├┬┘││ ││
└  └─┘┴└─╰└─┘╯`;

const BOOT = [
  { text: "$ for(u) --init", cls: "prompt" as const },
  { text: "> mounting community modules .......... [ok]", cls: "ok" as const },
  { text: "> channels: devs · analysts · engineers · students", cls: "muted" as const },
  { text: "> purpose: connect / debate / ship your projects", cls: "muted" as const },
  { text: "# private beta — seats are limited", cls: "cmt" as const },
];

const ROLES = [
  { key: "1", value: "dev", label: "developer" },
  { key: "2", value: "analyst", label: "analyst" },
  { key: "3", value: "engineer", label: "engineer" },
  { key: "4", value: "student", label: "student" },
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string>("dev");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState<number | null>(null);

  const selectByKey = useCallback((e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "INPUT") return;
    const match = ROLES.find((r) => r.key === e.key);
    if (match) setRole(match.value);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", selectByKey);
    return () => window.removeEventListener("keydown", selectByKey);
  }, [selectByKey]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setMessage("./join --running");

    const result = await joinWaitlist(email, role);

    if (result.ok) {
      setStatus("success");
      setPosition(result.position);
    } else {
      setStatus("error");
      setMessage(`error: ${result.message}`);
    }
  }

  function reset() {
    setEmail("");
    setRole("dev");
    setStatus("idle");
    setMessage("");
    setPosition(null);
  }

  return (
    <>
      <main className="foru-window" aria-label="for(u) waitlist terminal">
        <div className="foru-titlebar">
          <span className="foru-dot r" />
          <span className="foru-dot y" />
          <span className="foru-dot g" />
          <span className="foru-titlebar-name">
            <b>for(u)</b> — join the loop
          </span>
          <span className="foru-titlebar-path">~/waitlist</span>
        </div>

        <div className="foru-screen">
          <pre className="foru-banner" aria-hidden>
            {BANNER}
          </pre>
          <p className="foru-tagline">
            a community for people who build. <span className="amber">join the loop</span> — connect,
            debate, and share your projects.
          </p>

          <div className="foru-log">
            {BOOT.map((line, i) => (
              <div
                key={line.text}
                className="foru-line"
                style={{ animationDelay: `${0.15 + i * 0.28}s` }}
              >
                <span className={line.cls}>{line.text}</span>
              </div>
            ))}
          </div>

          {status === "success" ? (
            <div className="foru-success">
              <pre>{`> ./join --email=${email} --as=${role}
> access request logged ✓`}</pre>
              <p>
                you&apos;re in the loop. you are{" "}
                <span className="position">#{position}</span> in the queue.
              </p>
              <p className="foru-tagline">
                <span className="amber">$</span> we&apos;ll ping you when a seat opens up.
              </p>
              <button type="button" className="foru-again" onClick={reset}>
                &gt; add another address
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <hr className="foru-hr" />

              <div className="foru-field">
                <label className="foru-label" htmlFor="foru-email">
                  <span className="prompt">join@loop</span>:~$ enter --email
                </label>
                <div className="foru-input-row">
                  <span className="foru-caret" aria-hidden>
                    &gt;
                  </span>
                  <input
                    id="foru-email"
                    className="foru-input"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    spellCheck={false}
                    placeholder="you@domain.dev"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="foru-field">
                <label className="foru-label">
                  <span className="prompt">join@loop</span>:~$ select --role{" "}
                  <span className="cmt">(press 1-4)</span>
                </label>
                <div className="foru-roles">
                  {ROLES.map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      className="foru-role"
                      data-active={role === r.value}
                      onClick={() => setRole(r.value)}
                    >
                      <span className="key">[{r.key}]</span>
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="foru-submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "> running..." : "> run ./join"}
                <span className="foru-cursor" aria-hidden />
              </button>

              {status === "error" && (
                <div className="foru-status err" role="alert">
                  {message}
                </div>
              )}
              {status === "submitting" && (
                <div className="foru-status" aria-live="polite">
                  {message}
                </div>
              )}
            </form>
          )}
        </div>
      </main>
      <p className="foru-footer">
        for(u) · join the loop · <a href="/">← back to egemenerin.com</a>
      </p>
    </>
  );
}
