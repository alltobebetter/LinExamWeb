import {
  Fingerprint,
  Inbox,
  EyeOff,
  Lock,
  Gavel,
  MonitorSmartphone,
} from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Fingerprint,
    tint: "bg-blue-50 text-blue-600",
    title: "题目指纹校验",
    desc: "题面考前不打包进客户端，登录后由服务端下发；本地用构建时指纹清单逐题重算比对，伪造服务器换题直接拒绝进场。",
  },
  {
    icon: Inbox,
    tint: "bg-emerald-50 text-emerald-600",
    title: "考试期只收不判",
    desc: "服务端考试期间不执行任何学生代码，只做登录校验、题库下发与代码收集，从根上杜绝判题机被利用。",
  },
  {
    icon: EyeOff,
    tint: "bg-amber-50 text-amber-600",
    title: "切屏行为记录",
    desc: "离焦超 1 秒记一次切屏，睡眠 / 恢复记为违规；>3 次 warning、>10 次 serious，交卷时随卷上报。",
  },
  {
    icon: Lock,
    tint: "bg-purple-50 text-purple-600",
    title: "交卷锁定 + 补报",
    desc: "服务端落库 finishes 后强制拦截再提交；弱网下交卷与行为快照入本地队列，下次登录自动补报不丢卷。",
  },
  {
    icon: Gavel,
    tint: "bg-rose-50 text-rose-600",
    title: "考后统一判卷",
    desc: "教师机跑 gcc / Python，按测试用例逐个执行；每生每题只取最后一次提交计分，被覆盖的旧提交标 superseded。",
  },
  {
    icon: MonitorSmartphone,
    tint: "bg-slate-100 text-slate-700",
    title: "全套工具，一次配齐",
    desc: "Electron 考试端（Monaco 编辑 + 题面 Markdown/KaTeX）、Express + SQLite 服务端、Windows / macOS / Linux 一键打包。",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <Reveal className="max-w-2xl">
        <p className="text-[13px] font-semibold tracking-widest text-slate-400">
          功能
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          考前防换题，考中防作弊，考后自动判
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
          不做花哨的实时排名，只保证三件事：题是对的、卷是全的、分是准的。
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={Math.min(i * 0.06, 0.3)}>
            <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${f.tint}`}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-[16px] font-bold">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                {f.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
