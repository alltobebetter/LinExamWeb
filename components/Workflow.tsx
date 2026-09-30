import { LogIn, PenLine, Flag } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: LogIn,
    no: "01",
    title: "登录进场",
    desc: "姓名 + 学号 + 服务器地址，服务端校验名单与考试资格；通过后下发题库并做指纹校验，同时启动切屏监控。",
    code: "POST /api/login → /api/problems",
  },
  {
    icon: PenLine,
    no: "02",
    title: "答题提交",
    desc: "Monaco 写 C / Python（语言按学号绑定、不可切换），代码自动保存到本地，多次提交全部上传、以最后一次为准。",
    code: "POST /api/submit · 自动保存 1s 防抖",
  },
  {
    icon: Flag,
    no: "03",
    title: "交卷判卷",
    desc: "交卷上报行为摘要并锁定试卷；考后教师机跑 gcc / Python 逐用例执行，回写分数并按人汇总。",
    code: "node scripts/judge/grade.js",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="scroll-mt-20 border-y border-slate-200/70 bg-slate-50/60 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-[13px] font-semibold tracking-widest text-slate-400">
            流程
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            三步完成一场考试
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6">
                <span className="absolute right-5 top-5 font-mono text-[12px] text-slate-300">
                  {s.no}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[16px] font-bold">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                  {s.desc}
                </p>
                <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 font-mono text-[11.5px] text-slate-500">
                  {s.code}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
