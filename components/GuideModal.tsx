"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Copy, Check } from "lucide-react";

export interface GuideStep {
  icon: typeof X;
  title: string;
  desc: string;
  command?: boolean;
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function CommandBox({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = command;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="mt-3 flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3">
      <code className="flex-1 truncate font-mono text-[12.5px] text-slate-200">
        {command}
      </code>
      <button
        onClick={copy}
        className="flex h-7 shrink-0 items-center gap-1 rounded-md bg-white/10 px-2.5 text-[12px] font-medium text-white transition-colors hover:bg-white/20"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-400" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
        {copied ? "已复制" : "复制"}
      </button>
    </div>
  );
}

export default function GuideModal({
  open,
  onClose,
  title,
  subtitle,
  steps,
  command,
  downloads,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  steps: GuideStep[];
  command?: string;
  downloads: { label: string; href: string; primary?: boolean }[];
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/50 p-4 backdrop-blur-sm sm:items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-white p-6 text-left shadow-2xl sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-bold">{title}</h3>
                <p className="mt-1 text-[13.5px] text-slate-500">{subtitle}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="关闭"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {steps.map((s, i) => (
                <div key={s.title} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-bold">
                      <span className="mr-1.5 font-mono text-[12px] text-slate-400">
                        {i + 1}
                      </span>
                      {s.title}
                    </p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500">
                      {s.desc}
                    </p>
                    {s.command && command && <CommandBox command={command} />}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-2.5 border-t border-slate-100 pt-5 sm:grid-cols-2">
              {downloads.map((d) => (
                <a
                  key={d.href}
                  href={d.href}
                  className={
                    d.primary
                      ? "flex h-11 items-center justify-center rounded-xl bg-slate-900 text-[14px] font-semibold text-white transition-all hover:bg-slate-700 active:scale-[0.98]"
                      : "flex h-11 items-center justify-center rounded-xl border border-slate-200 text-[14px] font-semibold text-slate-800 transition-all hover:border-slate-900 active:scale-[0.98]"
                  }
                >
                  {d.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
