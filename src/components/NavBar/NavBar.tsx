import { NavBarItem } from "@/interface";
import React from "react";
import { NavBarItemComponent } from "./NavBarItemComponent";

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

  return (
    <section className="w-full py-4 items-center flex justify-between">
      <h1 className="font-bold text-3xl ml-4">Fake store</h1>
      <nav className="mr-1 flex gap-2">
        {NavBarItems.map((item) => (
          <NavBarItemComponent key={`Navbar-item-${item.name}`} {...item} />
        ))}
      </nav>
    </section>
  );
};
