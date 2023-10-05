import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Screen",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`flex w-screen h-screen`}>
      <Navbar />
      {children}
    </section>
  );
}
