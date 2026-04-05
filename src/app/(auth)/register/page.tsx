"use client";

import { useForm } from "react-hook-form";
import { registerRequest } from "@/modules/auth/services/auth.service";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await registerRequest({
        ...data,
        role: "provider", // 👈 FORZAMOS provider
      });

      alert("Usuario creado correctamente");
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("Error al registrarse");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <h1 className="text-xl font-bold">Registro</h1>

        <Input {...register("name")} placeholder="Nombre" />
        <Input {...register("email")} placeholder="Email" />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />

        <Button type="submit" className="w-full">
          Crear cuenta
        </Button>

        <p className="text-sm text-center">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-blue-500">
            Inicia sesión
          </a>
        </p>
      </form>
    </div>
  );
}