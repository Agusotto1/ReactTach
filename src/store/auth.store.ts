import { create } from "zustand";

// Definimos la interfaz AuthState
interface AuthState {
  status: 'authenticated' | 'unauthenticated' | 'checking';
  token?: string;
  user?: {
    name: string;
    email: string;
  };
  login: (email: string, password: string) => void; // Solo definimos la firma de la función
  logout: () => void;
}

// Implementamos el store con Zustand
export const useAuthStore = create<AuthState>((set) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  // Implementamos el login
  login: (email: string, password: string) => {
    set({
      status: 'authenticated',
      token: 'ABC123', // Aquí puedes asignar un token real si lo tienes
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    });
  },

  // Implementamos el logout
  logout: () => {
    set({
      status: 'unauthenticated',
      token: undefined,
      user: undefined,
    });
  },
}));
