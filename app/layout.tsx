import type { Metadata } from 'next'
import './globals.css'
import NavBar from "@/components/NavBar/navBar";
import { Providers } from "@/redux/providers"

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
      <body className='font-poppins'>
        <Providers>
          <div className="container mx-auto my-5">
            <NavBar/>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
