/* eslint no-use-before-define: 0 */
"use client";
import {
  User,
  Menu,
  Package,
  Truck,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { RiDiscountPercentFill } from "react-icons/ri";
import { LuStore } from "react-icons/lu";
import { GrLike } from "react-icons/gr";
import { GiPerfumeBottle } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { PiHighlighterCircleBold } from "react-icons/pi";
import { MdFace4 } from "react-icons/md";
import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import Link from "next/link";
import CartDrawer from "./CartDrawer";
import FavoritesDrawer from "./FavoritesDrawer";
import { hamburgerMenuState } from "./store";
import { useAtom, useStore } from "jotai";
import { useRouter } from "next/navigation";
import { getAuthenticatedUser } from "@/lib/auth";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hamMenuOpen, setHamMenuOpen] = useAtom(hamburgerMenuState, {
    store: useStore(),
  });

  // Manage submenu visibility
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getAuthenticatedUser();
      setIsAuthenticated(!!user);
    };
    checkAuth();
  }, []);

  const handleOnClickHamburgerMenu = () => {
    setHamMenuOpen(true);
  };

  const toggleSubmenu = (name: any) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null); // Close submenu if it's already open
    } else {
      setActiveSubmenu(name); // Open the clicked submenu
    }
  };

  const handleProfileClick = () => {
    if (isAuthenticated) {
      router.push("/profile");
    } else {
      router.push("/auth");
    }
  };

  const navItems = [
    { name: "CRAZY DEALS", icon: <RiDiscountPercentFill size={24} /> },
    { name: "SHOP ALL", icon: <LuStore size={24} /> },
    { name: "BESTSELLERS", icon: <GrLike size={24} /> },
    {
      name: "PERFUMES",
      icon: <GiPerfumeBottle size={24} />,
      hasSubmenu: true,
      submenu: [
        { name: "Men's Perfume" },
        { name: "Women's Perfume" },
        { name: "Unisex Perfume" },
        { name: "New Arrivals" },
      ],
    },
    {
      name: "BATH & BODY",
      icon: <FaBath size={24} />,
      hasSubmenu: true,
      submenu: [
        { name: "Shower Gel" },
        { name: "Body Lotion" },
        { name: "Hand Cream" },
        { name: "Body Scrub" },
      ],
    },
    { name: "MAKEUP", icon: <PiHighlighterCircleBold size={24} /> },
    {
      name: "SKINCARE",
      icon: <MdFace4 size={24} />,
      hasSubmenu: true,
      submenu: [
        { name: "Cleansers" },
        { name: "Moisturizers" },
        { name: "Serums" },
        { name: "Sunscreen" },
      ],
    },
  ];

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          <div className="flex items-center lg:w-1/3">
            <Sheet open={hamMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="lg:hidden mr-2"
                  onClick={() => handleOnClickHamburgerMenu()}
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={"left"}
                className="w-[300px] sm:w-[400px] overflow-y-auto"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <User
                    size={40}
                    className="border-2 border-black p-1 rounded-full"
                  />
                  <div className="">
                    <p className="text-sm font-medium">Download our app</p>
                    <p className="text-sm text-muted-foreground">
                      and get 10% OFF!
                    </p>
                  </div>
                </div>
                <Button className="w-full mb-2 bg-red-400 hover:bg-red-500 text-white rounded-none">
                  Download App
                </Button>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button
                    value={"outline"}
                    className="flex text-black items-center justify-center space-x-2 bg-[#E4E4E4] rounded-none"
                  >
                    <Package size={20} />
                    <span>MY ORDERS</span>
                  </Button>
                  <Button
                    value={"outline"}
                    className="flex text-black items-center justify-center space-x-2 bg-[#E4E4E4] rounded-none"
                  >
                    <Truck size={20} />
                    <span>TRACK ORDER</span>
                  </Button>
                </div>
                {/* Menu items with submenus */}
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <div
                        className="flex items-center justify-between py-2 border-b border-b-gray-300 text-black cursor-pointer"
                        onClick={() =>
                          item.hasSubmenu && toggleSubmenu(item.name)
                        }
                      >
                        <div className="flex text-black items-center space-x-4">
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                        </div>
                        {item.hasSubmenu && (
                          <div>
                            {activeSubmenu === item.name ? (
                              <ChevronDown size={20} />
                            ) : (
                              <ChevronRight size={20} />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Display submenu if the item is clicked */}
                      {item.hasSubmenu && activeSubmenu === item.name && (
                        <ul className="pl-2 pt-2 space-y-1">
                          {item.submenu.map((submenuItem, index) => (
                            <div
                              className="flex items-center justify-start"
                              key={index}
                            >
                              <ChevronRight className="w-5 h-5" />
                              <li
                                key={submenuItem.name}
                                className="text-sm text-gray-600"
                              >
                                {submenuItem.name}
                              </li>
                            </div>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* For larger screens */}
            <div className="hidden lg:block w-full max-w-xs">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  onClick={() => setOpen(true)}
                  className="pl-10 pr-4 py-2 w-full border-b-2 border-black"
                />
                {open && <SearchModal setOpen={setOpen} />}
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center lg:w-1/3">
            <Link href={"/"}>
              <h1 className="text-2xl font-bold">VIBECART</h1>
            </Link>
          </div>

          <div className="flex items-center justify-end lg:w-1/3">
            <Button
              onClick={handleProfileClick}
              variant={"ghost"}
              size={"icon"}
              className="lg:flex"
            >
              <User size={24} />
            </Button>
            <FavoritesDrawer />
            <CartDrawer />
          </div>
        </div>

        {/* For larger screens */}
        <div className="hidden lg:block border-t border-gray-200 mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-evenly py-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={"#"}
                  className="text-sm font-medium text-gray-700 hover:text-black group transition duration-300"
                >
                  {item.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black "></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
