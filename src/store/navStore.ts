import create from 'zustand';
import { persist } from 'zustand/middleware';

interface INav {
  historyStr: string;
}

export interface INavState {
  navHistory: string[];
  setNavHistory: (by: INav) => void;
}

export const navStore = create<INavState>()((set) => ({
  navHistory: [],
  setNavHistory: (by: INav) =>
    set((state: INavState) => ({
      navHistory: [...state.navHistory, by.historyStr.replace(/\/$/, '')],
    })),
}));
