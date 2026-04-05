"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/auth.store";
import { getMe } from "@/modules/auth/services/auth.service";

export function useAuthInit() {
  const setAuth = useAuthStore((s) => s.setAuth);

  useEffect(() => {
    console.log("auth init");
    
    const init = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const user = await getMe();

        setAuth(user, token);

        console.log("✅ Usuario restaurado:", user);
      } catch (error) {
        console.error("❌ Error obteniendo usuario");
      }
    };

    init();
  }, []);
}