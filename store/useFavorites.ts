import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";
import { useCart } from "./useCart";

export interface FavoriteItem {
  uid: string; // productId_size
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  maxQuantity: number;
}

interface FavoritesStore {
  items: FavoriteItem[];
  addToFavorites: (item: Omit<FavoriteItem, "uid">) => void;
  removeFromFavorites: (uid: string) => void;
  clearFavorites: () => void;
  addToCart: (item: FavoriteItem) => void;
  addAllToCart: () => void;
}

export const useFavorites = create(
  persist<FavoritesStore>(
    (set, get) => ({
      items: [],
      addToFavorites: (item) => {
        const uid = `${item.productId}_${item.size}`;
        const existingItem = get().items.find((i) => i.uid === uid);

        if (existingItem) {
          toast.error("Item already in favorites");
          return;
        }

        set((state) => ({
          items: [...state.items, { ...item, uid }],
        }));
        toast.success("Item added to favorites");
      },
      removeFromFavorites: (uid) => {
        set((state) => ({
          items: state.items.filter((item) => item.uid !== uid),
        }));
        toast.success("Item removed from favorites");
      },
      clearFavorites: () => {
        set({ items: [] });
        toast.success("Favorites cleared");
      },
      addToCart: (item) => {
        const cart = useCart.getState();
        cart.addToCart({ ...item, quantity: 1 });
      },
      addAllToCart: () => {
        const items = get().items;
        const cart = useCart.getState();

        items.forEach((item) => {
          cart.addToCart({ ...item, quantity: 1 });
        });

        toast.success("All items added to cart");
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);
