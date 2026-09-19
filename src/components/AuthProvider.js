"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  clearSession,
  getCurrentUser,
  getStoredSession,
  refreshSession,
  saveSession,
  signIn,
  signOut,
  signUp,
} from "@/lib/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const applySession = async (nextSession) => {
    if (!nextSession?.access_token) {
      clearSession();
      setSession(null);
      setUser(null);
      return;
    }

    try {
      const currentUser = await getCurrentUser(nextSession.access_token);
      setSession(nextSession);
      setUser(currentUser);
      saveSession(nextSession);
    } catch {
      if (nextSession.refresh_token) {
        try {
          const refreshed = await refreshSession(nextSession.refresh_token);
          const currentUser = await getCurrentUser(refreshed.access_token);
          setSession(refreshed);
          setUser(currentUser);
          return;
        } catch {
          // Fall through and clear an invalid session.
        }
      }

      clearSession();
      setSession(null);
      setUser(null);
    }
  };

  useEffect(() => {
    const stored = getStoredSession();
    if (!stored) {
      setLoading(false);
      return;
    }

    applySession(stored).finally(() => setLoading(false));
  }, []);

  const value = useMemo(
    () => ({
      session,
      user,
      loading,
      async login(email, password) {
        const nextSession = await signIn(email, password);
        await applySession(nextSession);
        return nextSession;
      },
      async register(email, password) {
        const data = await signUp(email, password);
        if (data.access_token) {
          await applySession(data);
        }
        return data;
      },
      async logout() {
        if (session?.access_token) {
          await signOut(session.access_token);
        } else {
          clearSession();
        }
        setSession(null);
        setUser(null);
      },
    }),
    [session, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
