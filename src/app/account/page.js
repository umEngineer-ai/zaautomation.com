"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function AccountPage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login/?next=/account/");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <main className="auth-page">
        <section className="auth-card">
          <p className="auth-card__eyebrow">ZA Automation</p>
          <h1>Checking your session...</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <span className="auth-card__eyebrow">Account</span>
        <h1>Welcome</h1>
        <p className="auth-card__intro">You are signed in as:</p>
        <p className="auth-user">{user.email}</p>

        <div className="auth-actions">
          <Link className="btn btn--accent btn--block" href="/">
            Back to website
          </Link>
          <button
            className="btn btn--ghost btn--block"
            type="button"
            onClick={async () => {
              await logout();
              router.replace("/");
            }}
          >
            Sign out
          </button>
        </div>
      </section>
    </main>
  );
}
