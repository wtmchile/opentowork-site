import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/NavBar";

export const metadata = {
  title: "Open To Work - WTM",
  description:
    "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
    >
      <body
      >
        <Navbar />
        <main className="flex flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
