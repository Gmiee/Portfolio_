import './globals.css'
import { Poppins } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/Components/Header';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Poppins({ subsets: ['latin'],  weight : '300'})
export const metadata = {
  title: "Jenish Khemnani's Portfolio!  ",
  description: 'On a road to become MERN stack developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <ChakraProvider>
        <Header/>
        {children}
        <SpeedInsights />
        <Analytics />
        </ChakraProvider>        
        </body>
    </html>
  )
}
