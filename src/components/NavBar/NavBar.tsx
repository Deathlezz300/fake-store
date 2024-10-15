"use client"

import { NavBarItem } from "@/interface";
import React from "react";
import { NavBarItemComponent } from "./NavBarItemComponent";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const NavBarItems: NavBarItem[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
  ];

  const path=usePathname();

  return (
    <section className="w-full py-4 items-center flex justify-between">
      <h1 className="font-bold text-3xl ml-4">Fake store</h1>
      <nav className="mr-4 flex gap-2">
        {NavBarItems.map((item) => (
          <NavBarItemComponent key={`Navbar-item-${item.name}`} {...item} isSelected={path===item.path} />
        ))}
      </nav>
    </section>
  );
};
