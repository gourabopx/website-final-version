import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

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
    (set, get) => ({
      items: [],
      subtotal: 0,
      discount: 0,
      total: 0,
      appliedCoupon: null,
      addToCart: (item) => {
        const uid = `${item.productId}_${item.size}`;
        const existingItem = get().items.find((i) => i.uid === uid);

        if (existingItem) {
          const newQuantity = existingItem.quantity + item.quantity;
          if (newQuantity > existingItem.maxQuantity) {
            toast.error("Cannot exceed available quantity");
            return;
          }
          set((state) => ({
            items: state.items.map((i) =>
              i.uid === uid ? { ...i, quantity: newQuantity } : i
            ),
          }));
          get().calculateTotals();
          toast.success("Cart updated successfully");
        } else {
          set((state) => ({
            items: [...state.items, { ...item, uid }],
          }));
          get().calculateTotals();
          toast.success("Item added to cart");
        }
      },
      removeFromCart: (uid) => {
        set((state) => ({
          items: state.items.filter((item) => item.uid !== uid),
        }));
        get().calculateTotals();
        toast.success("Item removed from cart");
      },
      updateQuantity: (uid, quantity) => {
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

        set((state) => ({
          items: state.items.map((i) =>
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
      applyCoupon: (couponObj) => {
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
        const items = get().items;
        const subtotal = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
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
