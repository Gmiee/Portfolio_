import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Provider from "@/Components/Provider";
import localFont from "next/font/local";
import Head from 'next/head';
// import ThemeSwitcher from './ThemeSwitcher';

const myFont = localFont({
  subsets: ["latin"],
  src: "./fonts/Satoshi-Regular.ttf"
});
export const metadata = {
  title: "Jenish Khemnani's Portfolio!  ",
  description: "On a road to become MERN stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body style={myFont.style} className={myFont.className}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=0.9"/>
        </Head>
        <ChakraProvider>
          <Provider>
            {/* <ThemeSwitcher /> */}
            {children}
          </Provider>
          <SpeedInsights />
          <Analytics />
        </ChakraProvider>
      </body>
    </html>
  );
}
