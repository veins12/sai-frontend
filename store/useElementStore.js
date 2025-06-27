import { create } from 'zustand';

export const useElementStore = create((set) => ({
  renderedItems: [],
  addItem: (index) =>
    set((state) => ({
      renderedItems: [...state.renderedItems, index],
    })),
}));
