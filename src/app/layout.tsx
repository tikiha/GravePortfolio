import NavBar from "@/components/myui/NavBar/NavBar";
import "../styles/globals.css";
import "../styles/ScrollBar.css";
import { Noto_Sans_JP, Montserrat } from "next/font/google";

const notojp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notojp",
});

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "私たちの墓じまい",
  description: "全国の墓じまい・永大供養・離檀・閉眼の格安サービス",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`font-notojp min-h-screen w-full ${mont.variable} ${notojp.variable}`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
