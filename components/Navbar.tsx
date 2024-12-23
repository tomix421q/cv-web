'use client'
import Image from 'next/image'
import logo from './../public/logo.png'
import NavbarLinks from './NavbarLinks'
import { Sidebar, SidebarHeader, SidebarProvider, SidebarTrigger } from './ui/sidebar'
import { MenuIcon, MenuSquareIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'

const Navbar = () => {
  return (
    <div className='w-full mx-auto px-2 py-2 flex items-center justify-between bg-slate-200 mb-14'>
      <div className='max-w-7xl flex justify-between items-center w-full mx-auto text-secondary font-extrabold uppercase'>
        <Image src={logo} alt='logo' width={50} height={50} priority className='object-cover size-10' />

        {/* DESKTOP NAV */}
        <nav className='hidden lg:flex lg:items-center'>
          <NavbarLinks />
        </nav>
        {/* MOBILE NAV */}
        <nav className='flex md:hidden '>
          <Sheet>
            <SheetTrigger>
              <MenuIcon size={40} />
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className='sr-only'>Navigacia</SheetDescription>
                <Separator />
              </SheetHeader>
              <NavbarLinks />
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </div>
  )
}
export default Navbar
