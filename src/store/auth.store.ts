import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;

  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  setAuth: (user, token) => {
    localStorage.setItem("token", token);

    // 🔥 guardar cookie
    document.cookie = `token=${token}; path=/`;

    set({ user, token });
  },

  logout: () => {
    localStorage.removeItem("token");

    // 🔥 borrar cookie
    document.cookie = "token=; Max-Age=0; path=/";

    set({ user: null, token: null });

    window.location.href = "/login";
  },
}));