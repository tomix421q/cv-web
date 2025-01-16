'use client'
import { cn } from '@/lib/utils'
import { BicepsFlexedIcon, Contact, HomeIcon, PickaxeIcon, UserRound } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navbarLinks = [
  {
    id: 0,
    name: (
      <p className='flex items-center gap-x-1'>
        <HomeIcon size={25} className='text-primary' />
        <span>Domov</span>
      </p>
    ),
    href: '/',
  },
  {
    id: 1,
    name: (
      <p className='flex items-center gap-x-1'>
        <UserRound size={25} className='text-primary' /> O mne
      </p>
    ),
    href: '/aboutme',
  },
  {
    id: 2,
    name: (
      <p className='flex items-center gap-x-1'>
        <BicepsFlexedIcon size={25} className='text-primary' /> Zručnosti
      </p>
    ),
    href: '/myskills',
  },
  {
    id: 3,
    name: (
      <p className='flex items-center gap-x-1'>
        <PickaxeIcon size={25} className='text-primary' /> Moja práca
      </p>
    ),
    href: '/work',
  },
  {
    id: 4,
    name: (
      <p className='flex items-center gap-x-1'>
        <Contact size={25} className='text-primary' /> Kontakt
      </p>
    ),
    href: '/contact',
  },
]

const NavbarLinks = () => {
  const location = usePathname()

  return (
    <div className='flex flex-col lg:flex-row justify-start lg:items-center my-auto text-2xl lg:text-xl mt-6 lg:mt-0 md:font-semibold lg:h-full'>
      {navbarLinks.map((item) => {
        return (
          <a
            href={item.href}
            key={item.id}
            className={cn(
              location === item.href
                ? 'h-full bg-secondary/90 text-white border-b-4 border-primary w-full lg:w-fit '
                : 'hover:bg-gray-400 ease-in hover:border-b-[1px] border-primary',
              'px-2 py-4 h-full lg:px-8 flex items-center '
            )}
          >
            {item.name}
          </a>
        )
      })}
    </div>
  )
}
export default NavbarLinks
