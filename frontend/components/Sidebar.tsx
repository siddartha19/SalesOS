"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import type { SessionInfo } from "@/types";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 opacity-80"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const HomeIcon = () => (
  <Icon>
    <path d="M3 10.5L12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
  </Icon>
);
const GovernanceIcon = () => (
  <Icon>
    <path d="M12 3l9 4.5v6c0 5-3.5 7.5-9 9-5.5-1.5-9-4-9-9v-6L12 3z" />
  </Icon>
);
const CampaignIcon = () => (
  <Icon>
    <path d="M3 11l16-7v16L3 13z" />
    <path d="M11 19v3" />
  </Icon>
);
const CRMIcon = () => (
  <Icon>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="9" y1="4" x2="9" y2="20" />
  </Icon>
);
const AdminIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const NAV_ITEMS: { label: string; href: string; icon: ReactNode }[] = [
  { label: "Home", href: "/", icon: <HomeIcon /> },
  { label: "Governance", href: "/governance", icon: <GovernanceIcon /> },
  { label: "CRM", href: "/crm", icon: <CRMIcon /> },
  { label: "Admin", href: "/admin", icon: <AdminIcon /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [sessions, setSessions] = useState<SessionInfo[]>([]);
  const [campaignsOpen, setCampaignsOpen] = useState(true);
  const [newName, setNewName] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchSessions();
  }, []);

  async function fetchSessions() {
    try {
      const r = await fetch("/api/proxy/sessions");
      const j = await r.json();
      setSessions(j.sessions || []);
    } catch {}
  }

  async function createSession() {
    const name = newName.trim();
    if (!name) return;
    setCreating(true);
    try {
      await fetch("/api/proxy/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      setNewName("");
      await fetchSessions();
    } catch {} finally {
      setCreating(false);
    }
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }

  const isCampaignActive = pathname.startsWith("/campaigns");

  return (
    <aside className="w-60 min-w-[15rem] border-r border-border bg-white flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-4 pt-4 pb-3 border-b border-border">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-sm">S</div>
          <span className="font-semibold text-[15px] tracking-tight">SalesOS</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2">
        {/* Top nav items (Home, Governance) */}
        {NAV_ITEMS.slice(0, 2).map((item) => (
          <NavLink key={item.href} {...item} active={pathname === item.href} />
        ))}

        {/* Campaigns collapsible section */}
        <div className="mt-1">
          <button
            onClick={() => setCampaignsOpen(!campaignsOpen)}
            className={`w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-stone-50 transition-colors duration-150 ${
              isCampaignActive ? "text-accent font-medium" : "text-stone-700"
            }`}
          >
            <span className="flex items-center gap-2.5">
              <CampaignIcon />
              Campaigns
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`text-stone-400 transition-transform duration-150 ${campaignsOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {campaignsOpen && (
            <div className="ml-4 border-l border-stone-100">
              <Link
                href="/campaigns"
                className={`block px-4 py-1.5 text-sm hover:bg-stone-50 transition-colors duration-150 ${
                  pathname === "/campaigns" ? "text-accent font-medium bg-accentSoft/40" : "text-stone-600"
                }`}
              >
                View all ({sessions.length})
              </Link>
              {sessions.slice(0, 5).map((s) => (
                <Link
                  key={s.session_id}
                  href={`/campaigns/${s.session_id}`}
                  className={`block px-4 py-1.5 text-sm truncate hover:bg-stone-50 transition-colors duration-150 ${
                    pathname === `/campaigns/${s.session_id}` ? "text-accent font-medium bg-accentSoft/40" : "text-stone-500"
                  }`}
                  title={s.name}
                >
                  {s.name}
                </Link>
              ))}
              <div className="px-3 py-1.5">
                <div className="flex gap-1">
                  <input
                    className="input text-sm py-1 px-2 flex-1"
                    placeholder="New campaign…"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && createSession()}
                  />
                  <button
                    onClick={createSession}
                    disabled={creating || !newName.trim()}
                    className="text-accent text-sm font-semibold px-1.5 hover:bg-accentSoft rounded transition-colors disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom nav items (CRM, Admin) */}
        {NAV_ITEMS.slice(2).map((item) => (
          <NavLink key={item.href} {...item} active={pathname === item.href} />
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-border">
        <button
          onClick={logout}
          className="btn w-full text-sm justify-center text-stone-700 hover:text-ink"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}

function NavLink({ label, href, icon, active }: { label: string; href: string; icon: ReactNode; active: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2.5 px-4 py-2 text-sm transition-colors ${
        active
          ? "text-accent font-medium bg-accentSoft/40 border-r-2 border-accent"
          : "text-stone-700 hover:bg-stone-50"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
