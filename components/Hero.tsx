"use client";

import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, FileCode2 } from "lucide-react";

/** 首屏：故事型 hero + 产品预览（考后统一判卷是核心叙事） */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* 背景：点阵 + 顶部品牌微光 */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-emerald-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 py-1 pl-1.5 pr-3 text-[12px] text-slate-600 shadow-sm backdrop-blur"
        >
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-700">
            开源
          </span>
          Electron 考试端 · Express 服务端 · 考后统一判卷
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-6xl"
        >
          机房编程考试，
          <br />
          就该<span className="underline decoration-slate-300 decoration-4 underline-offset-8">安静可靠</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-slate-500 sm:text-lg"
        >
          考试期间只收代码、不跑代码；切屏有记录、交卷可补报、换题能识破。
          C / Python 双语言，考后一键判卷出分。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#download"
            className="group flex h-12 items-center gap-2 rounded-xl bg-slate-900 px-6 text-[15px] font-semibold text-white transition-all hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-900/20 active:scale-[0.98]"
          >
            下载考试端
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#workflow"
            className="flex h-12 items-center rounded-xl border border-slate-200 bg-white px-6 text-[15px] font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            看看考试流程
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-4xl"
        >
          {/* 产品预览：考试端浅色界面复刻 */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-xl shadow-slate-900/[0.06]">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="ml-3 rounded-md bg-white px-2 py-1 font-mono text-[11.5px] text-slate-600 shadow-sm ring-1 ring-slate-200/70">
                两数之和.c
              </span>
              <span className="ml-auto flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  已提交
                </span>
                <span className="font-mono text-[12px] tabular-nums text-slate-400">
                  01:23:45
                </span>
              </span>
            </div>
            <div className="grid grid-cols-5 gap-0">
              <div className="col-span-2 border-r border-slate-100 p-5">
                <p className="text-[11px] font-medium text-slate-400">题目描述</p>
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-[15px] font-bold text-slate-800">
                    两数之和
                  </p>
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700">
                    简单
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2 rounded bg-slate-100" />
                  <div className="h-2 w-11/12 rounded bg-slate-100" />
                  <div className="h-2 w-4/5 rounded bg-slate-100" />
                </div>
                <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50/80 p-3 font-mono text-[11px] leading-relaxed text-slate-600">
                  <p>
                    <span className="text-slate-400">输入：</span>4&nbsp;1 2 3 4&nbsp;7
                  </p>
                  <p className="mt-1">
                    <span className="text-slate-400">输出：</span>2 3
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[11px]">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    已提交
                  </span>
                  <span className="flex items-center gap-1 text-blue-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    进行中
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    未开始
                  </span>
                </div>
              </div>
              <div className="col-span-3 flex flex-col bg-[#fafbfc]">
                <div className="flex flex-1 gap-0 p-5 font-mono text-[12px] leading-[1.7]">
                  <div className="select-none pr-4 text-right text-slate-300 tabular-nums">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400">{"/* 自动保存 · 提交即上传 */"}</p>
                    <p className="mt-1">
                      <span className="text-[#cf222e]">#include</span>{" "}
                      <span className="text-[#0a3069]">&lt;stdio.h&gt;</span>
                    </p>
                    <p className="mt-1">
                      <span className="text-[#cf222e]">int</span>{" "}
                      <span className="text-[#8250df]">main</span>
                      <span className="text-slate-600">() {"{"}</span>
                    </p>
                    <p className="pl-4 text-slate-700">
                      <span className="text-[#8250df]">printf</span>
                      <span className="text-slate-600">(</span>
                      <span className="text-[#0a3069]">&quot;2 3&quot;</span>
                      <span className="text-slate-600">);</span>
                      <span className="ml-1 inline-block h-[13px] w-[7px] animate-pulse bg-slate-400/70 align-[-2px]" />
                    </p>
                    <p className="pl-4 text-slate-700">
                      <span className="text-[#cf222e]">return</span>{" "}
                      <span className="text-[#0550ae]">0</span>
                      <span className="text-slate-600">;</span>
                    </p>
                    <p className="text-slate-600">{"}"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t border-slate-100 px-5 py-2 text-[11px] text-slate-400">
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 font-medium text-slate-500">
                    C
                  </span>
                  <span>UTF-8</span>
                  <span className="ml-auto flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    已自动保存
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 三个小徽章 */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[12px] text-slate-500">
            <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              题目指纹校验
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-500" />
              切屏监控 · 交卷补报
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5">
              <FileCode2 className="h-3.5 w-3.5 text-blue-500" />
              考后统一判卷
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
