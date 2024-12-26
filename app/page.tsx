import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Layers2, User } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='max-w-7xl px-4 mx-auto flex flex-col lg:flex-row gap-8 md:mt-[100px] lg:mt-[300px]'>
      {/* TEXT */}
      <section className='max-w-[700px] '>
        <h3 className='text-2xl lg:text-5xl uppercase font-normal mb-1 tracking-tighter text-white'>Tomáš Žilka</h3>
        <Separator />
        <h1 className='text-4xl lg:text-7xl font-[tektur] font-extrabold bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent '>
          Automatizácia & Web Development
        </h1>
        <p className='font-[tektur] text-lg lg:text-2xl mt-4'>
          Tvorím most medzi reálnym a digitálnym svetom. S vášňou pre technológie prinášam efektívne riešenia.
        </p>
      </section>
      {/* BUTTONS */}
      <section>
        <div className='grid xl:flex xl:flex-row mt-5 gap-10'>
          {/* about me */}
          <div>
            <div className='absolute'>
              <User className='relative size-[120px] lg:size-[250px] text-black' />
            </div>
            <Button
              asChild
              size={'lg'}
              variant={'ghost'}
              className='relative overflow-hidden bg-gradient-to-b from-primary/50 to-violet-700/50 rounded-xl ring-8 ring-black/40 !w-full duration-500 -skew-x-6 shadow-lg shadow-primary'
            >
              <Link href={'/aboutme'} className='overflow-hidden !size-32 xl:!size-[250px] '>
                <h2 className='text-2xl font-[tektur] uppercase bg-black p-2'> O mne</h2>
              </Link>
            </Button>
          </div>
          {/* work */}
          <div>
            <div className='absolute'>
              <Layers2 className='relative size-[120px] lg:size-[250px] text-black' />
            </div>
            <Button
              asChild
              size={'lg'}
              variant={'ghost'}
              className='relative overflow-hidden bg-gradient-to-b from-violet-700/50 to-primary/50 rounded-xl ring-8 ring-black/40 !w-full duration-500 skew-x-6 shadow-lg shadow-primary'
            >
              <Link href={'/aboutme'} className='overflow-hidden !size-32 xl:!size-[250px]'>
                <h2 className='text-2xl font-[tektur] uppercase bg-black p-2'>Moja praca</h2>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
