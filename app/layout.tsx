import type { Metadata } from 'next'
import { Montserrat, Tektur } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import ParticlesBackground from '../components/ParticlesBackground'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Dôležité: konzistentný názov premennej
})

const tektur = Tektur({
  subsets: ['latin'],
  variable: '--font-tektur',
})

export const metadata: Metadata = {
  title: 'Tomas Zilka',
  description: 'Tvorím most medzi online svetom a priemyselnou automatizáciou. Programujem weby a PLC systémy.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${tektur.variable} antialiased`}>
        {/* BG  */}
        <div className='absolute w-full h-screen -z-50'>
          <ParticlesBackground />
        </div>
        {/* NAV */}
        <nav>
          <Navbar />
        </nav>
        {/* MAIN */}
        <main className='max-w-7xl mx-auto px-4'>{children}</main>
      </body>
    </html>
  )
}
