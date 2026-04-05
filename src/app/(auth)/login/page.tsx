"use client";

import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/auth.store";
import { loginRequest } from "@/modules/auth/services/auth.service";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const setAuth = useAuthStore((s) => s.setAuth);

  const onSubmit = async (data: any) => {
    try {
      const res = await loginRequest(data);

      setAuth(res.data.user, res.data.token);

      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <h1 className="text-xl font-bold">Login</h1>

        <Input {...register("email")} placeholder="Email" />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />

        <Button type="submit" className="w-full">
          Entrar
        </Button>

        <p className="text-sm text-center">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-blue-500">
            Regístrate
          </a>
        </p>
      </form>
    </div>
  );
}









 



// 



// "use client";

// import { useForm } from "react-hook-form";
// import { useAuthStore } from "@/store/auth.store";
// import { loginRequest } from "@/modules/auth/services/auth.service";

// export default function LoginPage() {
//   const { register, handleSubmit } = useForm();
//   const setAuth = useAuthStore((s) => s.setAuth);

//   const onSubmit = async (data: any) => {
//     try {
//       const res = await loginRequest(data);

//       setAuth(res.data.user, res.data.token);

//       window.location.href = "/dashboard";
//     } catch (err) {
//       console.error(err);
//       alert("Error al iniciar sesión");
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-96 space-y-4 bg-white p-6 rounded-xl shadow"
//       >
//         <h1 className="text-xl font-bold">Login</h1>

//         <input
//           {...register("email")}
//           placeholder="Email"
//           className="input"
//         />

//         <input
//           {...register("password")}
//           type="password"
//           placeholder="Password"
//           className="input"
//         />

//         <button className="w-full bg-black text-white p-2 rounded">
//           Entrar
//         </button>
//       </form>
//     </div>
//   );
// }
