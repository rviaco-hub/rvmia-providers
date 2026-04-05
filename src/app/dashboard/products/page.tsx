"use client";

import { useState } from "react";
import { useProducts } from "@/modules/products/hooks/useProducts";
import ProductTable from "@/components/products/ProductTable";
import ProductForm from "@/components/products/ProductForm";
import { Card } from "@/components/ui/Card";

export default function ProductsPage() {
  const {
    products,
    addProduct,
    editProduct,
    removeProduct,
  } = useProducts();

  const [editing, setEditing] = useState<any>(null);

  return (
    <div className="space-y-4">
      <Card>
        <h2 className="text-lg font-bold mb-2">
          {editing ? "Editar producto" : "Nuevo producto"}
        </h2>

        <ProductForm
          defaultValues={editing}
          onSubmit={(data: any) => {
            if (editing) {
              editProduct(editing._id, data);
              setEditing(null);
            } else {
              addProduct(data);
            }
          }}
        />
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-2">
          Lista de productos
        </h2>

        <ProductTable
          products={products}
          onEdit={(p: any) => setEditing(p)}
          onDelete={removeProduct}
        />
      </Card>
    </div>
  );
}