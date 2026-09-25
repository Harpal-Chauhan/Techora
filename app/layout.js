import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageProvider";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Techora",
  description:
    "Techora — Technology, AI, Gaming, Movies, Apps, Sports and Trending stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
