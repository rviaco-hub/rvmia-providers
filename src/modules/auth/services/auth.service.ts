import { api } from "@/services/api";

// 🔐 LOGIN
export const loginRequest = async (data: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

// 📝 REGISTER
export const registerRequest = async (data: {
  name: string;
  email: string;
  password: string;
  role: "provider" | "buyer" | "admin";
}) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const getMe = async () => {
  const res = await api.get("/users/me");
  console.log("📦 /me response:", res.data);
  return res.data.data?.user || res.data.user;
};