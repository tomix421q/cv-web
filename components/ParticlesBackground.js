'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesBackground = () => {
  const pathName = usePathname()
  const [lineColor, setLineColor] = useState('#ffffff')
  const [lineDensity, setLineDensity] = useState(800)

  useEffect(() => {
    switch (pathName) {
      case '/aboutme':
        setLineColor('#ef4444')
        setLineDensity(1800)
        break
      case '/myskills':
        setLineColor('#eab308')
        setLineDensity(1800)
        break
      case '/work':
        setLineColor('#06b6d4')
        setLineDensity(1800)
        break
      case '/contact':
        setLineColor('#8b5cf6')
        setLineDensity(1800)
        break
      default:
        setLineColor('#ffffff')
        setLineDensity(800)
        break
    }
  }, [pathName])

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // Particles na celú obrazovku
        particles: {
          number: {
            value: 40, // Počet bodiek
            density: {
              enable: true,
              value_area: lineDensity, // Hustota
            },
          },
          color: {
            value: '#ffffff', // Farba bodiek
          },
          shape: {
            type: 'circle', // Tvar (circle, square, triangle, star atď.)
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          line_linked: {
            enable: true,
            distance: 250,
            color: lineColor, // Farba spojníc
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1, // Rýchlosť pohybu
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out', // Čo sa stane, keď bodky opustia obrazovku
          },
        },
        background: {
          color: '#0c0a09', // Pozadie
        },
      }}
    />
  )
}

export default ParticlesBackground
