"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingCart, ChevronDown, User, UserCog, Logs, LogOut } from "lucide-react";
import { headerNavLinks } from "@/constant";
import { useAppContext } from "@/context";
import { cn } from "@/lib/utils";
import MenuButton from "./menu-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const pathname = usePathname();
  const { cartProducts, likedProducts } = useAppContext();

  const isActive = (path: string) => {
    return pathname === path ? "border-b-2 border-black" : "hover:text-gray-500";
  };

  return (
    <header className="w-full">
      <div className="bg-black text-white py-2 md:px-4 flex justify-between items-center text-sm">
        <div className="flex container mx-auto">
          <div className="flex-1"></div>
          <div className="md:text-center text-xs">
            <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% </span>
            <Link
              href="#"
              className="font-medium underline"
            >
              Shop Now
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex items-center w-20 gap-1">
              <span>English</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold"
          >
            Exclusive
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {headerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("text-sm", isActive(link.href))}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <MenuButton />
            <div className="hidden lg:flex items-center bg-gray-100 rounded-md px-3 py-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent border-none outline-none text-sm w-48 lg:w-64"
              />
              <Search
                size={18}
                className="text-gray-500"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                aria-label="Wishlist"
                className="relative"
              >
                <Heart size={20} />
                {!!likedProducts?.length && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{likedProducts?.length}</span>}
              </button>
              <button
                aria-label="Cart"
                className="relative"
              >
                <ShoppingCart size={20} />
                {!!cartProducts?.length && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartProducts?.length}</span>}
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    aria-label="Account"
                    className="relative focus:outline-none"
                  >
                    <User size={20} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48"
                >
                  <div className="py-2 px-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <User size={20} />
                      <span>rasOol Tayjanov</span>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserCog />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShoppingCart />
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
