import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Finance AI",
  description: "Plataforma de gestão financeira com AI",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${mulish.className} dark antialiased`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <div className="flex h-full w-auto flex-col">{children}</div>
        </ClerkProvider>
      </body>
    </html>
  );
}
