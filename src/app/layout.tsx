import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Agustín Pfarherr",
  description: "Personal Portfolio based on Next.Js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
