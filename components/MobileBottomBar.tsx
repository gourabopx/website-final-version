"use client";
import { useStore, useAtom } from "jotai";
import { Grid, Home, Menu, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { hamburgerMenuState, cartMenuState, accountMenuState } from "./store";
const MobileBottomBar = () => {
  const [hamMenuOpen, setHamMenuOpen] = useAtom(hamburgerMenuState, {
    store: useStore(),
  });
  const [cartMenuOpen, setCartMenuOpen] = useAtom(cartMenuState, {
    store: useStore(),
  });
  const [accountMenuOpen, setAccountMenuOpen] = useAtom(accountMenuState, {
    store: useStore(),
  });

  const handleOnClickHamburgerMenu = () => {
    setHamMenuOpen(true);
    console.log("ham", hamMenuOpen);
  };
  const handleOnClickCartMenu = () => {
    setCartMenuOpen(true);
    console.log("cart", cartMenuOpen);
  };
  const handleOnClickAccountMenu = () => {
    setAccountMenuOpen(true);
    console.log("acc", accountMenuOpen);
  };
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-t-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link
          href={"/"}
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1 para">Home</span>
        </Link>
        <Link
          href={"#"}
          onClick={() => handleOnClickHamburgerMenu()}
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <Menu className="w-6 h-6" />
          <span className="text-xs mt-1 para">Menu</span>
        </Link>
        <Link
          href={"/shop"}
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <Grid className="w-6 h-6" />
          <span className="text-xs mt-1 para">Shop</span>
        </Link>
        <Link
          href={"#"}
          onClick={() => handleOnClickCartMenu()}
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs mt-1 para">Cart</span>
        </Link>{" "}
        <Link
          href={"#"}
          onClick={() => handleOnClickAccountMenu()}
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1 para">Account</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomBar;
