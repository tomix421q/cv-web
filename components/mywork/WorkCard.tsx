'use client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import {
  ArrowBigLeft,
  ArrowBigRight,
  Baseline,
  ChevronDown,
  ChevronUp,
  Code,
  LinkIcon,
  Maximize,
  PanelTop,
  WrenchIcon,
} from 'lucide-react'
import { Separator } from '../ui/separator'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { MyWorkCardType } from '@/utils/types'

const WorkCard = ({ myWorkCardData }: { myWorkCardData: MyWorkCardType }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const MAX_DESCRIPTION_LENGTH = 210
  const { name, projectDate, images, technologies, description, sourceCode, webLink } = myWorkCardData

  const openDialog = (index: number) => {
    setIsOpen(true)
    setCurrentImageIndex(index)
  }
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    console.log(images.length)
  }
  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const getShortenedDescription = () => {
    if (description.length <= MAX_DESCRIPTION_LENGTH) {
      return description
    }
    return description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
  }

  return (
    <main className='bg-gradient-to-br from-gray-50 to-gray-300 w-full md:w-[500px] min-h-[600px] rounded-3xl shadow-secondary shadow-inner p-2 h-fit bg-clip-content'>
      {/*  */}
      {/* ____HEADER */}
      <header className='flex items-center p-2 gap-1 bg-primary/40 bg-gradient-to-r from-violet-400/40 to-primary/50 rounded-t-xl'>
        <div>
          <span className='bg-blue-600 inline-block center w-3 h-3 rounded-full'></span>
        </div>
        <div>
          <span className='bg-purple-600 inline-block center w-3 h-3 rounded-full'></span>
        </div>
        <div>
          <span className='bg-green-600 box inline-block center w-3 h-3 rounded-full'></span>
        </div>
        <div className='flex items-center justify-between w-full '>
          <h2 className='text-gray-900 mx-2 text-xl tracking-wider font-extrabold  uppercase'>{name}</h2>
          <p className='text-xs text-secondary tracking-wider italic font-semibold'>{projectDate}</p>
        </div>
      </header>
      {/*  */}
      {/* ____CAROUSEL */}
      <section>
        <Carousel className='w-full h-auto overflow-hidden'>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className='relative'>
                <Button
                  asChild
                  onClick={() => openDialog(index)}
                  size={'icon'}
                  className='absolute top-1 right-1 bg-black/40 p-1 cursor-pointer'
                >
                  <Maximize className='!size-8' />
                </Button>
                <Image src={image} width={1200} height={800} alt='sad' className='object-cover max-h-[240px]' />)
              </CarouselItem>
            ))}
            {myWorkCardData.video && (
              <CarouselItem className='relative'>
                <video controls>
                  <source src={myWorkCardData.video} type='video/mp4'></source>
                </video>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious className='ml-14 bg-white text-black size-6' />
          <CarouselNext className='mr-14 bg-white text-black size-6' />
        </Carousel>
        {/*  */}
        {/* Open dialog BIG screen */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className='max-w-screen-lg sm:max-w-screen-2xl w-full bg-black p-6 !rounded-xl'>
            <DialogHeader>
              <DialogTitle />
              <DialogDescription />
            </DialogHeader>

            <div className='relative w-full h-full'>
              <Image
                src={images[currentImageIndex]}
                width={3840}
                height={2160}
                alt='image'
                className='object-cover w-full h-full'
              />
              {/* Tlačidlá pre posúvanie */}
              <Button
                variant='outline'
                size='icon'
                onClick={handlePreviousImage}
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 text-white hover:bg-white/80'
              >
                <ArrowBigLeft className='text-secondary fill-secondary' />
              </Button>
              <Button
                variant='outline'
                size='icon'
                onClick={handleNextImage}
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 text-white hover:bg-white/80'
              >
                <ArrowBigRight className='text-secondary fill-secondary' />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        {/*  */}
      </section>
      {/*  */}
      {/* _____INFO */}
      <section className='text-secondary p-2 mt-2 font-[tektur] space-y-6'>
        {/* tools */}
        <div>
          <div className='text-center font-semibold text-xl flex items-center justify-between'>
            <WrenchIcon size={25} className='text-secondary' />
            <p className='bg-gradient-to-br from-primary to-violet-600 bg-clip-text text-transparent'>Nástroje a Technológie</p>
          </div>
          <Separator />
          <div className='mt-1'>
            {technologies.map((item, index) => (
              <Badge key={index} className='mr-1 mb-1'>
                {item}
              </Badge>
            ))}
          </div>
        </div>
        {/* info */}
        <div>
          <div className='text-center font-semibold text-xl flex items-center justify-between'>
            <Baseline size={25} className='text-secondary' />
            <p className='bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent'>Info o projekte</p>
          </div>
          <Separator />
          <div className={`font-[montserrat] pt-1 font-medium text-sm sm:text-lg`}>
            {showMore ? description : getShortenedDescription()}
            {description.length > MAX_DESCRIPTION_LENGTH && (
              <Button
                asChild
                variant={'ghost'}
                size={'sm'}
                className={`w-full font-[montserrat] mt-2`}
                onClick={() => setShowMore(!showMore)}
              >
                <div>
                  <div className='flex items-center justify-center cursor-pointer font-bold'>
                    {showMore ? (
                      <>
                        <ChevronUp className='text-red text-primary !size-6' />
                        <p className='text-sm text-primary'>Čítať menej</p>
                      </>
                    ) : (
                      <>
                        <ChevronDown className='text-red text-primary !size-6' />
                        <p className='text-sm text-primary'>Čítať viac</p>
                      </>
                    )}
                  </div>
                </div>
              </Button>
            )}
          </div>
        </div>
      </section>
      {/*  */}
      {/* ____FOOTER */}
      <footer className='text-secondary p-2 font-[tektur] mb-1'>
        <div className='text-center font-semibold text-xl flex items-center justify-between'>
          <LinkIcon size={25} className='text-secondary' />
          <p className='bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent'>Linky</p>
        </div>
        <Separator />
        <div className='flex-1 sm:space-x-2'>
          {sourceCode && (
            <Button asChild variant={'outline'} size={'lg'} className='text-white mt-2 cursor-pointer text-lg'>
              <Link href={`${sourceCode}`} target='_blank' rel='noopener noreferrer'>
                <Code className='!size-6 text-primary' />
                <span>Link na kód.</span>
              </Link>
            </Button>
          )}
          {webLink && (
            <Button disabled={true} asChild variant={'outline'} size={'lg'} className='text-white mt-2 cursor-pointer text-lg'>
              <Link href={`${webLink}`} target='_blank' rel='noopener noreferrer'>
                <PanelTop className='!size-6 text-primary' />
                <span>Odkaz na web</span>
              </Link>
            </Button>
          )}
        </div>
      </footer>
    </main>
  )
}
export default WorkCard
