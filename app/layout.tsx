import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamzat Ajibola | Full-Stack Engineer",
  description:
    "Full-stack engineer shipping production web and mobile products with Next.js, React, Node, and React Native. Open to remote roles.",
  keywords: ["full-stack engineer", "React", "Next.js", "TypeScript", "Node.js", "React Native", "remote"],
  authors: [{ name: "Hamzat Ajibola" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
