import { create } from "zustand";

export const useStore = create((set) => ({
  data: [],
  searchTerm: "",
  loading: false,
  currentPage: 1,
  totalPages: 0,
  shoppingCart: 0,
  setData: (data) => set((state) => ({ data })),
  setSearchTerm: (searchTerm) => set((state) => ({ searchTerm })),
  setLoading: (loading) => set((state) => ({ loading })),
  setCurrentPage: (currentPage) => set((state) => ({ currentPage })),
  setTotalPages: (totalPages) => set((state) => ({ totalPages })),
  setShoppingCart: (shoppingCart) => set((state) => ({ shoppingCart })),
}));
