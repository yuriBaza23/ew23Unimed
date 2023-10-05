"use client";

import { usePathname } from "next/navigation";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={`flex flex-col bg-white px-5 w-64 border boder-r-[#e2e2e2]`}>
      <Image alt="" src='/logo.png' width={150} height={70} className="mt-4"/>
      <h1 className={`font-bold text-green-600 pb-8 text-start text-base`}>Insight</h1>
      <div
        className={`py-4 px-10 w-fit rounded hover:bg-gray-300 text-center justify-center text-[20] ${
          pathname === "/dashboard" ? "bg-[#f4f4f4]" : ""
        }`}
      >
        <a href="/dashboard" className="flex gap-2">
          <LayoutDashboard size={20} />
          <h1>Dashboard</h1>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
