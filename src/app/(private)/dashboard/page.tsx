export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4 text-gray-600">
        This is a private page, accessible only to authenticated users.
      </p>
    </div>
  );
}
