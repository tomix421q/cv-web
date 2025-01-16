import Contact from '@/components/Contact'
import { Button } from '@/components/ui/button'
import Header from '@/components/utils/Header'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Header text={'Kontakt'} emoji={'📞'} />
      <section className='min-h-screen flex flex-col mt-32 items-center'>
        <div>
          <h1 className='my-6 text-lg md:text-xl lg:text-2xl lg:max-w-3xl font-semibold tracking-widest font-[tektur]'>
            Rád zodpoviem vaše otázky. Pošlite mi správu alebo zavolajte a ozvem sa vám čo najskôr.
          </h1>
          <div className='text-xl italic'>
            <p className='text-secondary'>
              Tel:
              <Button variant={'link'} className='text-xl' asChild>
                <Link href={'tel:+421910387825'} target='_blank' className='text-primary font-semibold'>
                  +421 910 387 825
                </Link>
              </Button>
            </p>
            <p className='text-secondary'>
              Mail:
              <Button variant={'link'} className='text-xl' asChild>
                <Link href={'mailto:zilka.tomas@icloud.com'} target='_blank' className='text-primary font-semibold'>
                  zilka.tomas@icloud.com
                </Link>
              </Button>
            </p>
            <p className='text-secondary'>
              Messenger:
              <Button variant={'link'} className='text-xl' asChild>
                <Link href={'https://m.me/tomas.zilka.3/'} target='_blank' className='text-primary font-semibold'>
                  Click
                </Link>
              </Button>
            </p>
            <p className='text-secondary'>
              Linkedin:
              <Button variant={'link'} className='text-xl' asChild>
                <Link
                  href={'https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit'}
                  target='_blank'
                  className='text-primary font-semibold'
                >
                  Click
                </Link>
              </Button>
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <Contact />
        </div>
      </section>
    </div>
  )
}
export default page
