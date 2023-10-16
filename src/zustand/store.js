import { create } from "zustand";

export const useStore = create((set) => ({
  data: [],
  searchTerm: "",
  currentPage: 1,
  totalPages: 0,
  setData: (data) => set((state) => ({ data })),
  setSearchTerm: (searchTerm) => set((state) => ({ searchTerm })),
  setCurrentPage: (currentPage) => set((state) => ({ currentPage })),
  setTotalPages: (totalPages) => set((state) => ({ totalPages })),
}));
