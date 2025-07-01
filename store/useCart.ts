import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";
import type { StoreApi } from "zustand";

type SetState<T> = StoreApi<T>["setState"];
type GetState<T> = StoreApi<T>["getState"];

export interface CartItem {
  uid: string; // productId_size_qty
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  maxQuantity: number;
}

interface CartStore {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  appliedCoupon: { coupon: string; discount: number } | null;
  addToCart: (item: Omit<CartItem, "uid">) => void;
  removeFromCart: (uid: string) => void;
  updateQuantity: (uid: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (coupon: { coupon: string; discount: number }) => void;
  removeCoupon: () => void;
  calculateTotals: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set: SetState<CartStore>, get: GetState<CartStore>): CartStore => ({
      items: [],
      subtotal: 0,
      discount: 0,
      total: 0,
      appliedCoupon: null,
      addToCart: (item: Omit<CartItem, "uid">) => {
        const uid = `${item.productId}_${item.size}`;
        const existingItem = get().items.find((i) => i.uid === uid);

        if (existingItem) {
          const newQuantity = existingItem.quantity + item.quantity;
          if (newQuantity > existingItem.maxQuantity) {
            toast.error("Cannot exceed available quantity");
            return;
          }
          set((state: CartStore) => ({
            items: state.items.map((i: CartItem): CartItem =>
              i.uid === uid ? { ...i, quantity: newQuantity } : i
            ),
          }));
          get().calculateTotals();
          toast.success("Cart updated successfully");
        } else {
          set((state: CartStore) => ({
            items: [...state.items, { ...item, uid }],
          }));
          get().calculateTotals();
          toast.success("Item added to cart");
        }
      },
      removeFromCart: (uid: string) => {
        set((state: CartStore) => ({
          items: state.items.filter((item: CartItem) => item.uid !== uid),
        }));
        get().calculateTotals();
        toast.success("Item removed from cart");
      },
      updateQuantity: (uid: string, quantity: number) => {
        const item = get().items.find((i) => i.uid === uid);
        if (!item) return;

        if (quantity > item.maxQuantity) {
          toast.error("Cannot exceed available quantity");
          return;
        }

        if (quantity < 1) {
          get().removeFromCart(uid);
          return;
        }

        set((state: CartStore) => ({
          items: state.items.map((i: CartItem): CartItem =>
            i.uid === uid ? { ...i, quantity } : i
          ),
        }));
        get().calculateTotals();
      },
      clearCart: () => {
        set({
          items: [],
          subtotal: 0,
          discount: 0,
          total: 0,
          appliedCoupon: null,
        });
      },
      applyCoupon: (couponObj: { coupon: string; discount: number }) => {
        set({ appliedCoupon: couponObj });
        get().calculateTotals();
        toast.success("Coupon applied successfully");
      },
      removeCoupon: () => {
        set({ appliedCoupon: null });
        get().calculateTotals();
        toast.success("Coupon removed");
      },
      calculateTotals: () => {
        const items: CartItem[] = get().items;
        const subtotal = items.reduce(
          (sum: number, item: CartItem): number =>
            sum + item.price * item.quantity,
          0
        );

        let discount = 0;
        const applied = get().appliedCoupon;
        if (applied) {
          // discount is a percentage
          discount = subtotal * (applied.discount / 100);
        }

        const total = subtotal - discount;

        set({ subtotal, discount, total });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
