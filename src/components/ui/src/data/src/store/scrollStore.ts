import { create } from 'zustand';

interface ScrollState {
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  isScrolling: boolean;
  setIsScrolling: (scrolling: boolean) => void;
  currentSection: string | null;
  setCurrentSection: (section: string | null) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollProgress: 0,
  setScrollProgress: (progress: number) =>
    set({
      scrollProgress: Math.max(0, Math.min(1, progress)),
      isScrolling: true,
    }),

  isScrolling: false,
  setIsScrolling: (scrolling: boolean) => set({ isScrolling: scrolling }),

  currentSection: null,
  setCurrentSection: (section: string | null) =>
    set({ currentSection: section }),
}));

export default useScrollStore;
