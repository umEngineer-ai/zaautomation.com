"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function AuthForm({ mode = "login" }) {
  const isLogin = mode === "login";
  const router = useRouter();
  const { login, register } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
    setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setSubmitting(true);

    try {
      const result = isLogin
        ? await login(form.email.trim(), form.password)
        : await register(form.email.trim(), form.password);

      if (!isLogin && !result.access_token) {
        setMessage("Account created. Check your email to confirm your address, then sign in.");
      } else {
        router.push("/account/");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="auth-title">
        <span className="auth-card__eyebrow">ZA Automation</span>
        <h1 id="auth-title">{isLogin ? "Welcome back" : "Create your account"}</h1>
        <p className="auth-card__intro">
          {isLogin
            ? "Sign in to access your account."
            : "Create an account to access your ZA Automation profile."}
        </p>

        <form className="auth-form" onSubmit={onSubmit}>
          <label>
            <span>Email address</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={onChange}
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              placeholder="At least 6 characters"
              minLength={6}
              required
              value={form.password}
              onChange={onChange}
            />
          </label>

          {error && <p className="auth-message auth-message--error">{error}</p>}
          {message && <p className="auth-message auth-message--success">{message}</p>}

          <button className="btn btn--accent btn--block" type="submit" disabled={submitting}>
            {submitting ? "Please wait..." : isLogin ? "Sign in" : "Create account"}
          </button>
        </form>

        <p className="auth-card__switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link href={isLogin ? "/register/" : "/login/"}>
            {isLogin ? "Create one" : "Sign in"}
          </Link>
        </p>

        <Link className="auth-card__back" href="/">
          ← Back to website
        </Link>
      </section>
    </main>
  );
}
