import { NextRequest, NextResponse } from "next/server";

// 写死的模拟数据（替代真实数据库）
const mockData = [
  { id: 1, name: "订单A", status: "active" },
  { id: 2, name: "订单B", status: "done" },
  { id: 3, name: "订单C", status: "active" },
];

export async function POST(request: NextRequest) {
  const body = await request.json();
  const filtered = mockData.filter(
    (item) =>
      (body.status === "all" || item.status === body.status) &&
      item.name.includes(body.keyword ?? "")
  );
  return NextResponse.json({ success: true, data: filtered });
}