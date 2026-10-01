import { Oswald, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const display = Oswald({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"], display: "swap" });
const body = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} - Nonprofit Organization`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, type: "website" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
