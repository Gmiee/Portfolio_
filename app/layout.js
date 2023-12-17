import './globals.css'
import { Poppins } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/Components/Header';
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
        </ChakraProvider>        
        </body>
    </html>
  )
}
