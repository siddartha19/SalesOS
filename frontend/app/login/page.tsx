"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const r = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        setErr(j.error || "Invalid credentials");
        return;
      }
      router.push("/");
      router.refresh();
    } catch (e: any) {
      setErr(e?.message || "Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-bg p-6">
      <div className="w-full max-w-md card">
        <div className="mb-6">
          <div className="text-xs tracking-widest text-stone-500 uppercase">OpenSales</div>
          <h1 className="text-2xl font-semibold mt-1">AI Sales Team</h1>
          <p className="text-sm text-stone-500 mt-1">
            VP Sales + SDR + AE on LangGraph. Sign in to run a campaign.
          </p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="label">Email</label>
            <input
              className="input mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              className="input mt-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>
          {err && (
            <div className="text-sm text-danger pill pill-danger">{err}</div>
          )}
          <button type="submit" className="btn btn-primary w-full justify-center" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <div className="text-sm text-stone-500 mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-accent font-medium hover:underline">
            Sign up
          </Link>
        </div>
        <div className="text-xs text-stone-400 mt-4">
          Powered by LangGraph supervisor + Exa + Crustdata + Apify + SendGrid.
        </div>
      </div>
    </main>
  );
}
