import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
export const metadata = {
  title: {
    default: "Esperly | Personalized Online Tuition",
    template: "%s | Esperly",
  },
  description:
    "Explore personalized online tuition, one-on-one learning and supportive academic guidance with Esperly.",

   icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jakarta.variable} bg-[#FFF9F6] text-[#17243A] antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        <main className="min-w-0 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
