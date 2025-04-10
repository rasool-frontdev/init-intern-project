import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { AppWrapper } from "@/context/product.context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Онлайн Магазин Exclusive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextTopLoader showSpinner={false} />
        <AppWrapper>
          <div>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
