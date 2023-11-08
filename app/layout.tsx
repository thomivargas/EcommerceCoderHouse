import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/NavBar/navBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FuniroApp',
  description: 'pagina web de una muebleria para proyecto final',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto my-5">
          <NavBar/>
        </div>
        {children}
      </body>
    </html>
  )
}
