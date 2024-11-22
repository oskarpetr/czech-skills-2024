import { IMenuItem } from "@/types/MenuItem.types";
import Logo from "./Logo";
import Link from "next/link";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import Button from "./Button";

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

  const date = format(new Date(), "eeee d. MMMM yyyy", { locale: cs });

  return (
    <div className="flex gap-8 items-center">
      <div className="text-white opacity-50 text-sm">Je {date}.</div>

      {menuItems.map((item) => (
        <Link
          key={`menuItem_${item.text}`}
          href={item.link}
          className="text-white font-semibold"
        >
          {item.text}
        </Link>
      ))}

      <Link href="/login">
        <Button
          text="Beta testing"
          type="primary"
          fullWidth={false}
          size="small"
        />
      </Link>
    </div>
  );
}
