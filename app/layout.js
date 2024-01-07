import localFont from "next/font/local";
import "./globals.css";
import Hydrate from "./components/Hydrate";

export const metadata = {
  title: "Oday Jawaada",
  description: "Oday Jawaada's portfolio",
};
const Satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "fallback",
});
const Cabinet = localFont({
  src: "./fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
  display: "fallback",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Satoshi.variable} ${Cabinet.variable}`}>
        <Hydrate>{children}</Hydrate>
      </body>
    </html>
  );
}
