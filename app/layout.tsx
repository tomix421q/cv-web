import type { Metadata } from 'next'
import { Montserrat, Tektur } from 'next/font/google'
import './../style/globals.css'
import Navbar from '../components/utils/Navbar'
import ParticlesBackground from '../components/utils/ParticlesBackground'
import { Suspense } from 'react'
import LoadingComponent from '@/components/utils/LoadingComponent'
import Footer from '@/components/Footer'
import Script from 'next/script'

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
      {/* umami script  */}
      <Script
        async
        src='http://portfolio-umami-5bc7e5-159-69-80-113.traefik.me/script.js'
        data-website-id='99db2d82-3323-49f8-8be4-1a65c04e0bc8'
      />
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
