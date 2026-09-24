import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "订单管理后台",
  description: "Next.js 全栈练习项目",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="bg-gray-100">
        <div className="flex min-h-screen">
          {/* 侧边栏 */}
          <aside className="w-48 bg-slate-800 text-white p-4">
            <h1 className="text-lg font-bold mb-6">管理后台</h1>
            <a href="/dashboard" className="block rounded px-2 py-1 hover:bg-slate-700">
              数据筛选
            </a>
          </aside>
          {/* 内容区 */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}