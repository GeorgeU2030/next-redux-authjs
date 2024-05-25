import type { Metadata } from "next";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
  pageProps: AppProps["pageProps"];
};


export default function RootLayout({
  children,
  pageProps: { session, ...pageProps } ={ session: undefined } ,
}: RootLayoutProps) {
  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    </SessionProvider>
  );
}
