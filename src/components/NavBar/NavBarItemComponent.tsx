import { NavBarItem } from "@/interface";
import Link from "next/link";
import React from "react";

export const NavBarItemComponent = ({ name, path }: NavBarItem) => {
  return (
    <Link className="px-3 py-2 text-black transition-all font-medium hover:text-white rounded-lg hover:bg-black" href={path}>
       {name}
    </Link>
  )
};
