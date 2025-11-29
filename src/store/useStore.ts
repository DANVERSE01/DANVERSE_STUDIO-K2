import { create } from 'zustand'

export interface AppState {
  hue: number
  setHue: (hue: number)
}

export const useStore = create<AppState>((set) => ({
  hue: 200,
  setHue: (hue) => set({ hue }),
}))
