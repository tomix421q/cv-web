'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { CornerLeftUp } from 'lucide-react'

const Footer = () => {
  return (
    <section className='w-full mx-auto lg:px-44 mt-20 mb-10'>
      <div className='sm:mx-8'>
        <Separator />
        <div className='mt-6 flex flex-col items-center justify-center text-gray-400 text-xs tracking-widest '>
          <Button
            variant={'ghost'}
            size={'default'}
            onClick={() => window.scrollTo(0, 0)}
            className='text-primary rounded-full group relative mb-2 '
          >
            <CornerLeftUp className='!size-8' />
            <p className='text-sm group-hover:block hidden absolute -top-6 text-primary font-semibold'>Go Up</p>
          </Button>
          <div className='flex flex-wrap justify-center items-start text-gray-400 gap-x-3 font-semibold px-2 py-1 rounded-2xl'>
            <Link href={'/'} className='hover:text-primary'>
              Domov
            </Link>
            <Link href={'/'} className='hover:text-primary'>
              O mne
            </Link>
            <Link href={'/'} className='hover:text-primary'>
              Zručnosti
            </Link>
            <Link href={'/'} className='hover:text-primary'>
              Moja práca
            </Link>
            <Link href={'/'} className='hover:text-primary'>
              Kontakt
            </Link>
          </div>
          <span className='mt-10'>© {new Date().getFullYear()} Tomáš Žilka. All rights reserved.</span>
        </div>
      </div>
    </section>
  )
}
export default Footer
