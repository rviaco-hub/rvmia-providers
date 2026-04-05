"use client";

import Button from "@/components/ui/Button";
import { useAuthStore } from '@/store/auth.store'
export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }: any) {
  const logout = useAuthStore((s) => s.logout);
  const user = useAuthStore((s) => s.user);

  console.log("👤 USER LOGUEADO:", user);
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-6">RVMIA</h2>
        <p className="text-xs mb-4">
          {user?.name} ({user?.role})
        </p>

        <nav className="space-y-2 text-sm">
          <a href="/dashboard">Dashboard</a>
          <a href="/dashboard/products">Productos</a>
        </nav>

        <div className="mt-auto">
          <Button onClick={logout} variant="danger" className="w-full">
            Logout
          </Button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-muted">
        {children}
      </main>
    </div>
  );
}
