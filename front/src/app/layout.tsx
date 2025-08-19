import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import '@/styles/globals.css';

import { aclonica, sansation, zenDots } from "@/styles/fonts";
import { AuthProvider } from "@/context/authcontext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Home Hero",
  description: "Pagina de servicios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${aclonica.variable} ${zenDots.variable} ${sansation.variable}  `}>
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
