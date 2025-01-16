import Link from 'next/link'
import { Button } from './ui/button'
import { Facebook, Github, Linkedin, Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className='mt-20 w-full'>
      <div className='flex flex-wrap items-center justify-center md:gap-6 max-w-5xl mx-auto'>
        {/* phone */}
        <Button
          variant={'secondary'}
          asChild
          className='size-[170px] md:size-[150px] cursor-pointer border-2 border-gray-950 hover:border-primary duration-200 ease-linear'
        >
          <Link href={'tel:+421910387825'} target='_blank' className='flex flex-col overflow-hidden'>
            <Phone className='!size-[100px] md:!size-[100px] text-violet-400' />
            <div className='flex items-center flex-col justify-center h-full w-full text-xl border-t-[1px] border-white'>
              <p className='text-black/70 text-sm tracking-widest uppercase pt-1'>telefón</p>
            </div>
          </Link>
        </Button>
        {/* main */}
        <Button
          variant={'secondary'}
          asChild
          className='size-[170px] md:size-[150px] cursor-pointer border-2 border-gray-950 hover:border-primary duration-200 ease-linear'
        >
          <Link href={'mailto:zilka.tomas@icloud.com'} target='_blank' className='flex flex-col overflow-hidden'>
            <Mail className='!size-[100px] md:!size-[100px] text-violet-400' />
            <div className='flex items-center flex-col justify-center h-full w-full text-xl border-t-[1px] border-white'>
              <p className='text-black/70 text-sm tracking-widest uppercase pt-1'>E-mail</p>
            </div>
          </Link>
        </Button>
        {/* messenger */}
        <Button
          variant={'secondary'}
          asChild
          className='size-[170px] md:size-[150px] cursor-pointer border-2 border-gray-950 hover:border-primary duration-200 ease-linear'
        >
          <Link href={'tel:+421910387825'} target='_blank' className='flex flex-col overflow-hidden'>
            <Facebook className='!size-[100px] md:!size-[100px] text-violet-400' />
            <div className='flex items-center flex-col justify-center h-full w-full text-xl border-t-[1px] border-white'>
              <p className='text-black/70 text-sm tracking-widest uppercase pt-1'>Messenger</p>
            </div>
          </Link>
        </Button>
        {/* linkedin */}
        <Button
          variant={'secondary'}
          asChild
          className='size-[170px] md:size-[150px] cursor-pointer border-2 border-gray-950 hover:border-primary duration-200 ease-linear'
        >
          <Link
            href={'https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit'}
            target='_blank'
            className='flex flex-col overflow-hidden'
          >
            <Linkedin className='!size-[100px] md:!size-[100px] text-violet-400' />
            <div className='flex items-center flex-col justify-center h-full w-full text-xl border-t-[1px] border-white'>
              <p className='text-black/70 text-sm tracking-widest uppercase pt-1'>Linkedin</p>
            </div>
          </Link>
        </Button>
        {/* github */}
        <Button
          variant={'secondary'}
          asChild
          className='size-[170px] md:size-[150px] cursor-pointer border-2 border-gray-950 hover:border-primary duration-200 ease-linear'
        >
          <Link href={'https://github.com/tomix421q'} target='_blank' className='flex flex-col overflow-hidden'>
            <Github className='!size-[100px] md:!size-[100px] text-violet-400' />
            <div className='flex items-center flex-col justify-center h-full w-full text-xl border-t-[1px] border-white'>
              <p className='text-black/70 text-sm tracking-widest uppercase pt-1'>Github</p>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  )
}
export default Contact
