"use client";
import { useState } from "react";

export default function Dashboard() {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("all");
  const [result, setResult] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/filter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keyword, status }),
    });
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">订单筛选</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 bg-white p-4 rounded shadow">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="输入关键词"
          className="border rounded px-3 py-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="all">全部</option>
          <option value="active">进行中</option>
          <option value="done">已完成</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          筛选
        </button>
      </form>
      {result && (
        <pre className="bg-white p-4 rounded shadow text-sm">{result}</pre>
      )}
    </div>
  );
}