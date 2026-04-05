import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <h2 className="text-sm text-gray-500">Ventas</h2>
        <p className="text-2xl font-bold">$12,000</p>
      </Card>

      <Card>
        <h2 className="text-sm text-gray-500">Productos</h2>
        <p className="text-2xl font-bold">120</p>
      </Card>

      <Card>
        <h2 className="text-sm text-gray-500">Órdenes</h2>
        <p className="text-2xl font-bold">32</p>
      </Card>
    </div>
  );
}