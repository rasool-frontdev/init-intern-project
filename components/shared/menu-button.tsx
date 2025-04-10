"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { headerNavLinks } from "@/constant";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuButton = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "border-b-2 border-black" : "hover:text-gray-500";
  };

  return (
    <div className="lg:hidden flex justify-end items-center">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="border-b">
            <SheetTitle className="text-start">Exclusive</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex items-center justify-center">
            <nav className="flex flex-col w-full">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn("text-sm p-2 py-3 w-full", isActive(link.href))}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <p className="border-t absolute bottom-8 border-white/10 mt-8 pt-6 text-center text-xs text-gray-400">© Copyright 2023. All Rights Reserved.</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuButton;
