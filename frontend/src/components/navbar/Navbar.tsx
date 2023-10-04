"use client";

import { usePathname } from "next/navigation";
import { LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={`flex flex-col bg-gray-200 items-center px-2`}>
      <h1 className={`font-bold text-green-600 text-xl p-8`}>UniVisions</h1>
      <div
        className={`p-4 w-fit rounded-full hover:bg-gray-300 text-center ${
          pathname === "/dashboard" ? "bg-gray-300" : ""
        }`}
      >
        <a href="/dashboard" className="flex gap-2">
          <LayoutDashboard size={24} />
          <h1>Dashboard</h1>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
