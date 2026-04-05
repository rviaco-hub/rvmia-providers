export const dynamic = "force-dynamic";

import DashboardLayoutUI from "@/components/layout/DashboardLayout";

export default function Layout({ children }: any) {
  return <DashboardLayoutUI>{children}</DashboardLayoutUI>;
}