"use client";

import { useAuthInit } from "@/hooks/useAuthInit";

export default function AuthProvider({ children }: any) {
  useAuthInit();

  console.log("🔥 AUTH PROVIDER MOUNTED");

  return children;
}