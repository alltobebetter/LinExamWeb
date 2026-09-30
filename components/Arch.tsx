import { Laptop, Server, Scale } from "lucide-react";
import Reveal from "./Reveal";

const parts = [
  {
    icon: Laptop,
    title: "考试端",
    en: "CLIENT · src/",
    points: ["Electron + React + Monaco", "题面 Markdown / KaTeX 渲染", "进度 / 提交本地持久化"],
  },
  {
    icon: Server,
    title: "服务端",
    en: "SERVER · server/",
    points: ["Express + SQLite（WAL）", "登录限流 · token 会话", "提交 / 交卷 / 行为落库"],
  },
  {
    icon: Scale,
    title: "判卷",
    en: "JUDGE · scripts/judge/",
    points: ["gcc -O2 -std=c11 / Python -I", "超时 taskkill / SIGKILL 兜底", "每题末次提交计分汇总"],
  },
];

export default function Arch() {
  return (
    <section id="arch" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <Reveal className="max-w-2xl">
        <p className="text-[13px] font-semibold tracking-widest text-slate-400">
          架构
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          分工明确，互不越界
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
          考试端不管分、服务端不跑代码、判卷只在考后发生——互相不越界，出问题好排查。
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {parts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold">{p.title}</h3>
                  <p className="font-mono text-[11px] text-slate-400">{p.en}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-[14px] text-slate-600"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
