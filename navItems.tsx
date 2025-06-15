import { FaBath } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";
import { GrLike } from "react-icons/gr";
import { LuStore } from "react-icons/lu";
import { MdFace4 } from "react-icons/md";
import { PiHighlighterCircleBold } from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";

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
