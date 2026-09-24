export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">订单详情</h2>
      <p>当前订单 ID：{id}</p>
      <a href="/dashboard" className="text-blue-600 underline mt-4 inline-block">
        返回列表
      </a>
    </div>
  );
}