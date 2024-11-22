import { IMenuItem } from "@/types/MenuItem.types";
import Logo from "./Logo";
import Link from "next/link";

export default function Menu() {
  return (
    <menu className="bg-black px-24 py-6 flex justify-between items-center w-screen fixed h-24 -mt-24 z-50">
      <Logo />
      <MenuItems />
    </menu>
  );
}

function MenuItems() {
  const menuItems: IMenuItem[] = [
    {
      text: "About",
      link: "#about",
    },
    {
      text: "Games",
      link: "#games",
    },
  ];

  return (
    <div className="flex gap-8 items-center">
      {menuItems.map((item) => (
        <Link
          key={`menuItem_${item.text}`}
          href={item.link}
          className="text-white font-semibold"
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
}
