"use client";

import { useState } from "react";
import {
  Monitor,
  Laptop,
  Server,
  Download as DownloadIcon,
  MousePointerClick,
  Terminal,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import GuideModal, { GithubIcon, type GuideStep } from "./GuideModal";

const R2 = "https://download.lab306.com";
const QUARANTINE_CMD = "xattr -cr /Applications/LinExam.app";

interface DlRow {
  icon: typeof Monitor;
  name: string;
  file: string;
  size: string;
  url: string;
  guide: "win" | "mac" | null;
}

const rows: DlRow[] = [
  {
    icon: Monitor,
    name: "Windows",
    file: "安装包 .exe",
    size: "107 MB",
    url: `${R2}/LinExam-Setup-0.1.0.exe`,
    guide: "win",
  },
  {
    icon: Laptop,
    name: "macOS · Intel",
    file: "磁盘映像 .dmg",
    size: "136 MB",
    url: `${R2}/LinExam-0.1.0.dmg`,
    guide: "mac",
  },
  {
    icon: Laptop,
    name: "macOS · M 芯片",
    file: "磁盘映像 .dmg",
    size: "132 MB",
    url: `${R2}/LinExam-0.1.0-arm64.dmg`,
    guide: "mac",
  },
  {
    icon: Server,
    name: "Linux · AppImage",
    file: "双击即用",
    size: "142 MB",
    url: `${R2}/LinExam-0.1.0.AppImage`,
    guide: null,
  },
  {
    icon: Server,
    name: "Linux · .deb",
    file: "Debian / Ubuntu",
    size: "93 MB",
    url: `${R2}/linexam_0.1.0_amd64.deb`,
    guide: null,
  },
];

const macSteps: GuideStep[] = [
  {
    icon: DownloadIcon,
    title: "下载并安装",
    desc: "下载 .dmg 后双击，把 LinExam 拖进 Applications 文件夹。",
  },
  {
    icon: Terminal,
    title: "解除系统隔离",
    desc: "应用未经过 Apple 公证，首次打开会被拦截。打开终端粘贴下面这条指令回车即可（一台电脑只需做一次）。",
    command: true,
  },
  {
    icon: MousePointerClick,
    title: "右键打开一次",
    desc: "在启动台里右键 LinExam → 打开，点确认。之后双击就能正常启动。",
  },
];

const winSteps: GuideStep[] = [
  {
    icon: DownloadIcon,
    title: "下载并安装",
    desc: "下载 .exe 后双击，按向导下一步装完即可。",
  },
  {
    icon: ShieldAlert,
    title: "SmartScreen 放行",
    desc: "没买签名证书，Windows 会弹蓝框拦截。点“更多信息”→“仍要运行”，一台电脑只需放行一次。",
  },
  {
    icon: MousePointerClick,
    title: "登录考试",
    desc: "输入老师给的服务器地址，加上姓名学号就能进场。",
  },
];

export default function Download() {
  const [guide, setGuide] = useState<"win" | "mac" | null>(null);

  const isMac = guide === "mac";

  return (
    <section id="download" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-24">
      <Reveal>
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 px-6 py-12 sm:px-12">
          <h2 className="mx-auto max-w-xl text-center text-3xl font-bold tracking-tight sm:text-4xl">
            下一场考试，就用 LinExam
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-[15px] text-slate-500">
            考试端发给学生装机，服务端跑在机房内网，考完教师机统一判卷出分。
          </p>

          <div className="mx-auto mt-8 max-w-3xl divide-y divide-slate-200/70 rounded-2xl border border-slate-200 bg-white">
            {rows.map((r) => (
              <div
                key={r.url}
                className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:px-5"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-bold">{r.name}</p>
                    <p className="text-[12.5px] text-slate-400">
                      {r.file} ·{" "}
                      <span className="font-mono tabular-nums">{r.size}</span>
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {r.guide && (
                    <button
                      onClick={() => setGuide(r.guide)}
                      className="flex h-10 items-center rounded-lg px-3 text-[13px] font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                      安装指南
                    </button>
                  )}
                  <a
                    href={r.url}
                    className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-5 text-[13px] font-semibold text-white transition-all hover:bg-slate-700 active:scale-[0.98] sm:flex-none"
                  >
                    <DownloadIcon className="h-3.5 w-3.5" />
                    下载
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="https://github.com/alltobebetter/LinExam"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center gap-2 rounded-xl bg-slate-900 px-6 text-[15px] font-semibold text-white transition-all hover:bg-slate-700 active:scale-[0.98]"
            >
              <GithubIcon className="h-4 w-4" />
              去 GitHub 看看
            </a>
          </div>
        </div>
      </Reveal>

      <GuideModal
        open={guide !== null}
        onClose={() => setGuide(null)}
        title={isMac ? "macOS 安装指南" : "Windows 安装指南"}
        subtitle="三步搞定，之后每次考试双击即用。"
        steps={isMac ? macSteps : winSteps}
        command={isMac ? QUARANTINE_CMD : undefined}
        downloads={
          isMac
            ? [
                { label: "下载 Intel 版", href: `${R2}/LinExam-0.1.0.dmg`, primary: true },
                { label: "下载 M 芯片版", href: `${R2}/LinExam-0.1.0-arm64.dmg` },
              ]
            : [
                {
                  label: "下载 Windows 版",
                  href: `${R2}/LinExam-Setup-0.1.0.exe`,
                  primary: true,
                },
              ]
        }
      />

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="LinExam" width={28} height={28} className="h-7 w-7" />
          <span className="text-[14px] font-bold">LinExam</span>
          <span className="text-[12px] text-slate-400">© 2026</span>
        </div>
        <p className="text-[12px] text-slate-400">
          MIT License
        </p>
      </footer>
    </section>
  );
}
