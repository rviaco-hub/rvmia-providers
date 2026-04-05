"use client";

import { useEffect } from "react";

export function useAuthRedirect() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = "/dashboard";
    }
  }, []);
}