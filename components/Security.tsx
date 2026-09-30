import { ShieldCheck, Database, KeyRound, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  {
    icon: ShieldCheck,
    t: "防换题",
    d: "收到的每道题，本地重新算一遍指纹再比对，题量题号完全一致才放行。",
    chips: ["题号", "标题", "难度", "作者", "题面全文"],
    result: "sha256 指纹",
  },
  {
    icon: KeyRound,
    t: "防冒登",
    d: "名单 + allowed 资格双校验，失败文案统一防枚举，IP×学号限流。",
    chips: ["姓名 + 学号", "名单 allowed"],
    result: "签发会话",
  },
  {
    icon: Database,
    t: "防丢卷",
    d: "原子写 + 写队列串行化，交卷失败入 pending 队列，下次登录补报。",
    chips: ["交卷快照", "行为摘要"],
    result: "pending 队列",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-20"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 px-6 py-12 sm:px-12">
        <Reveal>
          <p className="text-[13px] font-semibold tracking-widest text-slate-400">
            安全设计
          </p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            把作弊的路，一条条堵上
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5">
                <c.icon className="h-5 w-5 text-emerald-400" />
                <h3 className="mt-3 text-[15px] font-bold text-white">{c.t}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-400">
                  {c.d}
                </p>
                {c.chips && (
                  <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
                    {c.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-md border border-white/10 bg-white/10 px-2 py-1 text-[12px] text-slate-200"
                      >
                        {chip}
                      </span>
                    ))}
                    <ArrowRight className="h-3 w-3 shrink-0 text-slate-500" />
                    <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[12px] text-emerald-300">
                      {c.result}
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 text-[12.5px] text-slate-500">
            真实名单、判卷用例与标准解均放在 gitignore 本地目录，随仓库只分发示例题——开源也不泄题。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
