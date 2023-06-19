import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" lang="en">
      <body
        className={`text-slate-100 container mx-auto p-4 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
