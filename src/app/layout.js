import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/NavBar";
import { Menu } from "@/components/menu/Menu";

export const metadata = {
  title: "Open To Work - WTM",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="flex row">
          <Menu />
          <Navbar />
        </header>
        <main className="flex flex-1 relative">{children}</main>
      </body>
    </html>
  );
}
