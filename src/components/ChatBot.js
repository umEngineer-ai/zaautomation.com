"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getBotReply, quickReplies, welcomeMessage } from "@/lib/chatbot";
import { site, waLink } from "@/lib/site";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function ChatBot() {
  // Start open once so the widget is impossible to miss on first visit
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: "welcome", ...welcomeMessage, at: Date.now() },
  ]);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 180);
      return () => clearTimeout(t);
    }
  }, [open]);

  // If user previously closed it this session, keep closed after first mount toggle
  useEffect(() => {
    try {
      const closed = sessionStorage.getItem("za-chat-closed");
      if (closed === "1") setOpen(false);
    } catch {
      /* ignore */
    }
  }, []);

  const closeChat = () => {
    setOpen(false);
    try {
      sessionStorage.setItem("za-chat-closed", "1");
    } catch {
      /* ignore */
    }
  };

  const pushBot = (reply) => {
    setMessages((prev) => [
      ...prev,
      {
        id: uid(),
        from: "bot",
        text: reply.text,
        actions: reply.actions || [],
        at: Date.now(),
      },
    ]);
  };

  const send = (raw) => {
    const text = (raw ?? input).trim();
    // Block empty messages and prevent duplicate sends while the bot is typing
    if (!text || typing) return;

    // Push user message into chat — all messages go through the knowledge base,
    // no silent page navigations that leave the chat in a broken half-state
    setMessages((prev) => [
      ...prev,
      { id: uid(), from: "user", text, actions: [], at: Date.now() },
    ]);
    setInput("");
    setTyping(true);

    // Simulate a natural typing delay proportional to reply length
    const delay = 550 + Math.min(900, text.length * 12);
    window.setTimeout(() => {
      const reply = getBotReply(text);
      setTyping(false);
      pushBot(reply);
    }, delay);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send();
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className={`chatbot${open ? " is-open" : ""}`}>
      {open && (
        <section className="chatbot__panel" aria-label="ZA Automation chat assistant">
          <header className="chatbot__head">
            <div className="chatbot__identity">
              <div className="chatbot__avatar" aria-hidden="true">
                ZA
              </div>
              <div>
                <strong>ZA Assistant</strong>
                <span>
                  <i className="chatbot__dot" aria-hidden="true" /> Online · typically replies instantly
                </span>
              </div>
            </div>
            <button
              type="button"
              className="chatbot__icon-btn"
              onClick={closeChat}
              aria-label="Close chat"
            >
              ✕
            </button>
          </header>

          <div
            className="chatbot__messages"
            ref={listRef}
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`chatbot__bubble chatbot__bubble--${m.from}`}
              >
                {/* Render multi-line bot text as separate paragraphs */}
                {m.from === "bot" ? (
                  (m.text || "").split("\n").map((line, i) =>
                    line.trim() === "" ? (
                      <span key={i} className="chatbot__spacer" />
                    ) : (
                      <p key={i}>{line}</p>
                    )
                  )
                ) : (
                  <p>{m.text}</p>
                )}
                {!!m.actions?.length && (
                  <div className="chatbot__actions">
                    {m.actions.map((a) =>
                      a.type === "whatsapp" || a.href?.startsWith("http") ? (
                        <a
                          key={a.label}
                          className={`chatbot__action${a.type === "whatsapp" ? " chatbot__action--wa" : ""}`}
                          href={a.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={a.label}
                        >
                          {a.label}
                        </a>
                      ) : (
                        <Link
                          key={a.label}
                          className="chatbot__action"
                          href={a.href}
                          aria-label={a.label}
                        >
                          {a.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div
                className="chatbot__bubble chatbot__bubble--bot chatbot__typing"
                role="status"
                aria-label="ZA Assistant is typing"
              >
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          {/* Quick-reply buttons — all route through knowledge base, never silently navigate away */}
          <div className="chatbot__quick" aria-label="Quick questions">
            {quickReplies.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                disabled={typing}
                aria-label={q}
              >
                {q}
              </button>
            ))}
          </div>

          <form className="chatbot__composer" onSubmit={onSubmit} noValidate>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about PLC, CANbus, ABI, location…"
              aria-label="Type your message"
              autoComplete="off"
              disabled={typing}
            />
            <button
              type="submit"
              className="chatbot__send"
              aria-label="Send message"
              disabled={!input.trim() || typing}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          <footer className="chatbot__foot">
            <a
              href={waLink("Hello ZA Automation, I need to speak with an engineer.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Prefer WhatsApp? {site.phoneDisplay}
            </a>
          </footer>
        </section>
      )}

      <button
        type="button"
        className="chatbot__launcher"
        onClick={() => {
          setOpen((v) => {
            const next = !v;
            try {
              if (!next) sessionStorage.setItem("za-chat-closed", "1");
              else sessionStorage.removeItem("za-chat-closed");
            } catch {
              /* ignore */
            }
            return next;
          });
        }}
        aria-expanded={open}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
      >
        {open ? (
          <span className="chatbot__launcher-x" aria-hidden="true">✕</span>
        ) : (
          <>
            <span className="chatbot__launcher-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H8l-5 3 1.5-5.2A8.5 8.5 0 1 1 21 12Z" />
                <path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="chatbot__launcher-text">
              <strong>Chat with us</strong>
              <small>Ask about services &amp; support</small>
            </span>
          </>
        )}
      </button>
    </div>
  );
}
