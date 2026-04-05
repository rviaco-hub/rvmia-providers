"use client";

import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ProductForm({
  onSubmit,
  defaultValues,
}: any) {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2"
    >
      <Input {...register("name")} placeholder="Nombre" />
      <Input {...register("price")} placeholder="Precio" type="number" />
      <Input {...register("description")} placeholder="Descripción" />

      <Button type="submit">Guardar</Button>
    </form>
  );
}