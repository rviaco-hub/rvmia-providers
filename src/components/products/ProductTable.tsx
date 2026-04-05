"use client";

import Button from "@/components/ui/Button";

export default function ProductTable({
  products,
  onEdit,
  onDelete,
}: any) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm bg-white rounded-xl shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Nombre</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p: any) => (
            <tr key={p._id} className="border-b">
              <td className="p-2">{p.name}</td>
              <td className="p-2">${p.price}</td>

              <td className="p-2 flex gap-2">
                <Button onClick={() => onEdit(p)}>Editar</Button>

                <Button
                  variant="danger"
                  onClick={() => onDelete(p._id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}