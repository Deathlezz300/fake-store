import { NavBarItem } from "@/interface";
import Link from "next/link";
import React from "react";

interface props extends NavBarItem {
  isSelected: boolean;
}

export const NavBarItemComponent = ({ name, path, isSelected }: props) => {
  return (
    <Link
      className={`px-3 py-2 text-black transition-all font-medium hover:text-white rounded-lg hover:bg-black ${
        isSelected && "bg-black text-white"
      }`}
      href={path}
    >
      {name}
    </Link>
  );
};
