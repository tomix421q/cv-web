'use client'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const navbarLinks = [
  { id: 0, name: 'Home', href: '/' },
  { id: 1, name: 'About me', href: '/aboutme' },
  { id: 2, name: 'My skills', href: '/myskills' },
  { id: 3, name: 'Work', href: '/work' },
  { id: 4, name: 'Contact', href: '/contact' },
]

const NavbarLinks = () => {
  const location = usePathname()

  return (
    <div className='flex flex-col lg:flex-row justify-start lg:items-center my-auto gap-y-4  text-3xl lg:text-xl mt-10 lg:mt-0 font-extrabold lg:h-full '>
      {navbarLinks.map((item) => {
        return (
          <a
            href={item.href}
            key={item.id}
            className={cn(
              location === item.href
                ? 'h-full bg-secondary text-white border-b-4 border-primary w-full lg:w-fit'
                : '',
              ' px-4 lg:px-8 flex items-center'
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
