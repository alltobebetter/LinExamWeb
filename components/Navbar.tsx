"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MonitorDown } from "lucide-react";

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const links = [
  { href: "#features", label: "功能" },
  { href: "#workflow", label: "流程" },
  { href: "#arch", label: "架构" },
  { href: "#security", label: "安全" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="LinExam" width={32} height={32} className="h-8 w-8" />
          <span className="text-[17px] font-bold tracking-tight">LinExam</span>
          <span className="hidden sm:inline rounded-full border border-slate-200 px-2 py-0.5 font-mono text-[11px] text-slate-400">
            v0.1.0
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-[14px] text-slate-500 transition-colors hover:text-slate-900 hover:bg-slate-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/alltobebetter/LinExam"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex h-9 items-center gap-1.5 rounded-lg px-3 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#download"
            className="flex h-9 items-center gap-1.5 rounded-lg bg-slate-900 px-4 text-[13px] font-semibold text-white transition-all hover:bg-slate-700 active:scale-[0.98]"
          >
            <MonitorDown className="h-4 w-4" />
            获取考试端
          </a>
        </div>
      </div>
    </header>
  );
}
