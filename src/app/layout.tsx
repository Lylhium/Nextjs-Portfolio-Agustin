import type { Metadata } from "next";
import { EB_Garamond, Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
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
