import { Urbanist, Nunito  } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/globalicons.css";

import { Slide } from "@/styles/slide";
import { MainNav } from "@/components/main-nav";
import { navigation } from "@/config/homepage";
import { SpeedInsights } from "@vercel/speed-insights/next";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Cinematic One",
  description: "Stream your favorite movies and showS Trailers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} bg-white text-black  antialiased`}
      >
        <MainNav navigation={navigation} />
          <Slide>
            {children}
            <SpeedInsights />
          </Slide>
      </body>
    </html>
  );
}
