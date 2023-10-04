import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Form",
  description: "Form Screen",
};

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={`flex w-screen h-screen`}>{children}</section>;
}
