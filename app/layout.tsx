import type { Metadata } from 'next'
import { Montserrat, Tektur } from 'next/font/google'
import './../style/globals.css'
import Navbar from '../components/utils/Navbar'
import ParticlesBackground from '../components/utils/ParticlesBackground'
import { Suspense } from 'react'
import LoadingComponent from '@/components/utils/LoadingComponent'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const tektur = Tektur({
  subsets: ['latin'],
  variable: '--font-tektur',
})

export const metadata: Metadata = {
  title: 'Tomáš Žilka - Web & Automatizácia',
  description: 'Programujem weby a PLC systémy. Prepájam online svet s priemyselnou automatizáciou.',
  icons: { icon: '/pageIco.ico' },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${tektur.variable} antialiased`}>
        <Suspense fallback={<LoadingComponent />}>
          {/* BG  */}
          <div className='absolute w-full h-screen -z-50'>
            <ParticlesBackground />
          </div>
          {/* NAV */}
          <nav>
            <Navbar />
          </nav>
          {/* MAIN */}
          <main className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 min-h-screen'>{children}</main>
          {/* FOOTER */}
          <footer>
            <Footer />
          </footer>
        </Suspense>
      </body>
    </html>
  )
}
