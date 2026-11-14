import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Hamzat Ajibola",
  description: "Contact Hamzat Ajibola about a remote full-time role or contract.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
