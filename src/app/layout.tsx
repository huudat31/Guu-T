import type { Metadata } from "next";
import { Montserrat, Noto_Serif } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/providers/AppProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";

const montserrat = Montserrat({
  variable: "--font-montserrat-next",
  subsets: ["latin", "vietnamese"],
});

const notoSerif = Noto_Serif({
  variable: "--font-serif-next",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Guu & T – Luxury Interior Design",
  description: "Kiến tạo không gian sống nghệ thuật, kết hợp phong cách Mid-century Modern Contemporary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${notoSerif.variable} font-sans antialiased`}
      >
        <AppProvider>
          <Loader />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
