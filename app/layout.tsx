import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 全局圆角字体：寒蝉全圆体 ChillRoundF（与考试端同款，OFL 协议，子集化 woff2）
const yuan = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    {
      path: "./fonts/chill-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/chill-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "LinExam — 简洁可靠的编程考试平台",
  description:
    "LinExam 是面向 C / Python 课程的编程考试平台：Electron 考试端 + Express 服务端 + 考后统一判卷，开箱即用的切屏监控、指纹防换题与离线补报。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${yuan.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
