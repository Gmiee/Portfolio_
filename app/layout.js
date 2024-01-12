import './globals.css'
import { Rubik } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/Components/Header';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import Provider from '@/Components/Provider';
// import ThemeSwitcher from './ThemeSwitcher';
const inter = Rubik({ subsets: ['latin'],  weight : '300'})
export const metadata = {
  title: "Jenish Khemnani's Portfolio!  ",
  description: 'On a road to become MERN stack developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
  )
}
