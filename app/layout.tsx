import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { AppWrapperContext } from "@/context";
import { getAllProductListApi } from "@/services";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Онлайн Магазин Exclusive",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await getAllProductListApi();

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <NextTopLoader
          showSpinner={false}
          color="#22C55E"
        />
        <AppWrapperContext initialProducts={products}>
          <div>
            <Header />
            <main className="min-h-[75vh]">{children}</main>
            <Footer />
          </div>
        </AppWrapperContext>
      </body>
    </html>
  );
}
