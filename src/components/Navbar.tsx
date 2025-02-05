import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";

export default function Navbar() {
  return (
    <Menubar className="flex justify-center gap-11">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">
          <Link href="/sale">SALE</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/men">Men</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/women">Women</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/kids">Kids</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
