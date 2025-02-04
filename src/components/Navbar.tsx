import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function Navbar() {
  return (
    <Menubar className="flex justify-center gap-11">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">SALE</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Men</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Women</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Kids</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
