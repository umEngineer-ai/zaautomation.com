const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const STORAGE_KEY = "za-auth-session";

function config() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Supabase authentication is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }
  return { url: SUPABASE_URL.replace(/\/$/, ""), key: SUPABASE_ANON_KEY };
}

async function request(path, options = {}) {
  const { url, key } = config();
  const response = await fetch(`${url}/auth/v1${path}`, {
    ...options,
    headers: {
      apikey: key,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data?.msg || data?.message || data?.error_description || "Authentication request failed.";
    throw new Error(message);
  }
  return data;
}

export function getStoredSession() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

export function saveSession(session) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }
}

export function clearSession() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

export async function signUp(email, password) {
  const data = await request("/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (data.access_token) {
    saveSession(data);
  }

  return data;
}

export async function signIn(email, password) {
  const data = await request("/token?grant_type=password", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  saveSession(data);
  return data;
}

export async function refreshSession(refreshToken) {
  const data = await request("/token?grant_type=refresh_token", {
    method: "POST",
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  saveSession(data);
  return data;
}

export async function getCurrentUser(accessToken) {
  const { key } = config();
  const response = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/auth/v1/user`, {
    headers: {
      apikey: key,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Session expired.");
  }

  return response.json();
}

export async function signOut(accessToken) {
  const { key } = config();
  await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/auth/v1/logout`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${accessToken}`,
    },
  }).catch(() => {});

  clearSession();
}
