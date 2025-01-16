import Header from '@/components/utils/Header'
import Image from 'next/image'
import aboutImage from './../../public/About Photo.png'
import { ArrowRightFromLine, ArrowUpFromDotIcon, ArrowUpFromLine, Link } from 'lucide-react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div>
      <Header text={'O mne'} emoji={'🚶‍♂️'} />
      <main className='space-y-32'>
        {/* description about me */}
        <section className='grid lg:grid-cols-2 justify-center items-center mt-16'>
          <p className='my-auto text-md md:text-xl font-[tektur] tracking-wide'>
            Už <span className='text-primary font-bold'>7</span> rokov sa pohybujem vo svete automatizácie, s dominantným
            zameraním na automobilový priemysel.Posledných <span className='text-primary font-bold'>5</span> rokov som sa
            špecializoval na programovanie
            <span className='text-primary font-bold'> PLC a robotov</span>, kde som získal hlboké znalosti a praktické skúsenosti.
            Moja vášeň pre technológie ma však neustále ženie vpred a preto sa vo voľnom čase venujem aj vývoju{' '}
            <span className='text-primary font-bold'>webových aplikácií </span> a implementácii softvérových riešení. V tejto
            oblasti s obľubou pracujem s technológiami ako{' '}
            <span className='text-primary font-bold'>React, NextJS a Tailwind</span> , ktoré mi umožňujú vytvárať moderné a
            efektívne riešenia. Mojou ambíciou je prepojiť odbornosť v automatizácii s kreatívnym prístupom k webovému vývoju a
            prinášať tak inovatívne riešenia. Som otvorený novým výzvam a neustále sa snažím rozširovať svoje znalosti a
            zručnosti.
          </p>
          <div className={`flex justify-center`}>
            <Image
              src={aboutImage}
              alt='fotka'
              width={1000}
              height={1000}
              priority
              className='h-[350px] w-auto md:h-[500px] lg:-mt-[100px]'
            />
          </div>
        </section>

        {/* tabs */}
        <section className='flex flex-wrap justify-center lg:justify-between w-full lg:gap-y-1 gap-4'>
          <div className='bg-secondary/60 flex flex-col p-2 items-center size-[160px] md:!size-[250px] overflow-hidden border-2 hover:bg-gray-700 border-primary hover:border-white duration-100 ease-out'>
            <span className='text-[60px] md:text-[120px] font-bold bg-gradient-to-tl from-primary to-violet-400 bg-clip-text text-transparent'>
              7
            </span>
            <p className='border-t border-primary text-xs  md:text-sm my-auto pt-2 font-bold uppercase min-h-[100px]'>
              Rokov skúseností v automobilovom priemysle
            </p>
          </div>
          <div className='bg-secondary/60 flex flex-col p-2 items-center size-[160px] md:!size-[250px] overflow-hidden border-2 hover:bg-gray-700 border-primary hover:border-white duration-100 ease-out'>
            <span className='text-[60px] md:text-[120px] font-bold bg-gradient-to-tl from-primary to-violet-400 bg-clip-text text-transparent'>
              5
            </span>
            <p className='border-t border-primary text-xs  md:text-sm my-auto pt-2 font-bold uppercase min-h-[100px]'>
              Roky skúseností s programovaním PLC
            </p>
          </div>
          <div className='bg-secondary/60 flex flex-col p-2 items-center size-[160px] md:!size-[250px] overflow-hidden border-2 hover:bg-gray-700 border-primary hover:border-white duration-100 ease-out'>
            <span className='text-[60px] md:text-[120px] font-bold bg-gradient-to-tl from-primary to-violet-400 bg-clip-text text-transparent'>
              4
            </span>
            <p className='border-t border-primary text-xs  md:text-sm my-auto pt-2 font-bold uppercase min-h-[100px]'>
              Roky skúseností s web dev
            </p>
          </div>
          <div className='bg-secondary/60 flex flex-col p-2 items-center size-[160px] md:!size-[250px] overflow-hidden border-2 hover:bg-gray-700 border-primary hover:border-white duration-100 ease-out'>
            <span className='text-[60px] md:text-[120px] font-bold bg-gradient-to-tl from-primary to-violet-400 bg-clip-text text-transparent'>
              6
            </span>
            <p className='border-t border-primary text-xs  md:text-sm my-auto pt-2 font-bold uppercase min-h-[100px]'>
              Vlastných webových projektov
            </p>
          </div>
        </section>

        {/* buttons */}
        <section className='flex flex-col gap-4 md:gap-10'>
          <Button asChild variant={'outline'} size={'lg'} className='p-4 h-auto w-auto cursor-pointer'>
            <div>
              <h3 className='text-xl lg:text-5xl font-[tektur] tracking-widest font-semibold'>Pozri si moju prácu</h3>
              <Link className='!size-8 md:!size-14 text-violet-400' />
            </div>
          </Button>
          <Button asChild variant={'outline'} size={'lg'} className='p-4 h-auto w-auto cursor-pointer'>
            <div>
              <h3 className='text-xl lg:text-5xl font-[tektur] tracking-widest font-semibold text-start'>Pozri si moje zručnosti</h3>
              <Link className='!size-8 md:!size-14 text-violet-400' />
            </div>
          </Button>
        </section>
      </main>
    </div>
  )
}
export default page
