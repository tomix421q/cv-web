'use client'
import Image from 'next/image'
import logo from './../public/logo.png'
import NavbarLinks from './NavbarLinks'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='w-full mx-auto px-2 flex items-center justify-between bg-slate-200 mb-14 shadow-2xl shadow-secondary'>
      <div className='max-w-7xl flex justify-between items-center w-full mx-auto text-secondary '>
        <Image src={logo} alt='logo' width={50} height={50} priority className='object-cover !size-10 ' />

        {/* DESKTOP NAV */}
        <nav className='hidden lg:flex lg:items-center h-[50px]'>
          <NavbarLinks />
        </nav>
        {/* MOBILE NAV */}
        <nav className='flex md:hidden my-1'>
          <Sheet>
            <SheetTrigger>
              <MenuIcon className='flex items-center size-10 text-primary' />
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
