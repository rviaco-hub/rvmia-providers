"use client";

import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/products.service";

export function useProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  };

  const addProduct = async (data: any) => {
    await createProduct(data);
    fetchProducts();
  };

  const editProduct = async (id: string, data: any) => {
    await updateProduct(id, data);
    fetchProducts();
  };

  const removeProduct = async (id: string) => {
    await deleteProduct(id);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    addProduct,
    editProduct,
    removeProduct,
    fetchProducts,
  };
}