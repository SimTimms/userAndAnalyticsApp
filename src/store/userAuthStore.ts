import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuth {
  userId: string;
  accessToken: string;
  refreshToken: string;
  scope: string[];
  organisation: string;
}

export interface IAuthState {
  auth: IAuth;
  setDetails: (by: IAuth) => void;
}

export const userAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      auth: {
        userId: '',
        accessToken: '',
        refreshToken: '',
        scope: [],
        organisation: '',
      },
      setDetails: (by: IAuth) =>
        set((state: IAuthState) => ({ auth: { ...state.auth, ...by } })),
    }),
    {
      name: 'auth-storage',
    }
  )
);
