import Contact from '@/components/Contact'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Layers2, User } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className='flex flex-col  min-h-screen mx-auto'>
      <div className='max-w-7xl px-4 mx-auto flex flex-col justify-center lg:flex-row gap-8 md:mt-[100px] lg:mt-[200px]'>
        {/* TEXT */}
        <section className='sm:max-w-[520px]'>
          <section className='text-2xl lg:text-3xl  uppercase font-normal mb-1 tracking-tighter text-white flex-1 items-center flex justify-between'>
            <h4>Tomáš Žilka 🙋‍♂️</h4>
          </section>
          <Separator />
          <h1 className='text-4xl sm:text-6xl lg:text-7xl font-[tektur] font-extrabold bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent'>
            Automatizácia & Web Development
          </h1>
          <p className='font-[tektur] text-lg sm:text-xl lg:text-2xl mt-4'>
            Tvorím most medzi reálnym a digitálnym svetom. S vášňou pre technológie prinášam efektívne riešenia.
          </p>
        </section>
        {/* BUTTONS */}
        <section>
          <div className='grid md:grid-cols-2 gap-10 h-full items-center pb-10 justify-center'>
            {/* about me */}
            <div>
              <div className='absolute'>
                <User className='relative size-[150px] lg:size-[250px] text-black' />
              </div>
              <Button
                asChild
                size={'lg'}
                variant={'ghost'}
                className='relative overflow-hidden bg-gradient-to-b from-primary/50 to-violet-700/50 rounded-xl ring-8 ring-black/40 !w-full duration-500 shadow-lg shadow-primary'
              >
                <Link href={'/aboutme'} className='overflow-hidden !size-32 xl:!size-[250px]'>
                  <h2 className='text-3xl lg:text-xl font-[tektur] uppercase bg-black p-2'>O mne</h2>
                </Link>
              </Button>
            </div>
            {/* work */}
            <div>
              <div className='absolute'>
                <Layers2 className='relative size-[150px] lg:size-[250px] text-black' />
              </div>
              <Button
                asChild
                size={'lg'}
                variant={'ghost'}
                className='relative overflow-hidden bg-gradient-to-b from-violet-700/50 to-primary/50 rounded-xl ring-8 ring-black/40 !w-full duration-500 shadow-lg shadow-primary '
              >
                <Link href={'/work'} className='overflow-hidden !size-32 xl:!size-[250px] '>
                  <h2 className='text-3xl lg:text-xl font-[tektur] uppercase bg-black  p-2'>Moja práca</h2>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Contact />
    </div>
  )
}
