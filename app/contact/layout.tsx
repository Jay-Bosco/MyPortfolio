import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Hamzat Ajibola",
  description: "Get in touch with Hamzat Ajibola for your next project.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
