import { Button } from '@/components/ui/button';
import { LayoutDashboard, Search, ShoppingCart, Handshake, Rocket } from "lucide-react";
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <div className="container flex items-center py-4 px-6 shadow-md justify-between bg-white">
      <a href="/" className="logo text-2xl font-bold text-blue-600">
        Shoppingify
      </a>

      <div className="hidden md:flex ml-4 gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2
              className="text-lg font-medium flex gap-4 items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 cursor-pointer text-gray-800 rounded-md transition"
              aria-label="Category Menu"
            >
              <LayoutDashboard
                className="text-blue-500 w-8 h-8"
                alt="Category Icon"
              />
              Category
            </h2>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="z-50 top-full left-0 w-48 bg-white shadow-md rounded-md">
            <DropdownMenuLabel className="text-gray-800 px-4 py-2 font-medium">
              Browse Category
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Grocery
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Mobiles
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Electronics
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Fashion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="text-lg font-medium flex gap-4 items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 cursor-pointer text-gray-800 rounded-md transition">
              <Handshake className="text-blue-500 w-8 h-8" />
              Today's Deal
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-50 top-full left-0 w-48 bg-white shadow-md rounded-md">
            <DropdownMenuLabel className="text-gray-800 px-4 py-2 font-medium">
              Browse Deals
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Deal of the Day
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Mobiles
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Electronics
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Fashion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="text-lg font-medium flex gap-4 items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 cursor-pointer text-gray-800 rounded-md transition">
              <Rocket className="text-blue-500 w-8 h-8" />
              New Releases
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-50 top-full left-0 w-48 bg-white shadow-md rounded-md">
            <DropdownMenuLabel className="text-gray-800 px-4 py-2 font-medium">
              Browse New Releases
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Computers & Accessories
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Clothing & Accessories
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Home Improvement
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md transition">
              Home & Kitchen
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="search-bar md:flex hidden items-center gap-3 rounded-full border border-gray-300 px-4 py-2 ml-4 bg-gray-100">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input focus:outline-none rounded-full px-3 py-2 w-full bg-gray-100"
        />
      </div>

      <div className="flex gap-3 items-center">
        <h2 className="flex gap-2 items-center font-medium cursor-pointer text-gray-800">
          <ShoppingCart className="text-blue-500" />0
        </h2>
        <Button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Header
