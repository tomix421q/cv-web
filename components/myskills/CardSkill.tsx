import { Undo } from 'lucide-react'
import { Separator } from '../ui/separator'
import ProgressBar from './ProgressBar'
import { SkillCardType } from '@/utils/types'
import { cn } from '@/lib/utils'

const CardSkill = ({
  title,
  subTitle,
  description,
  ring,
  progressBar1Text,
  progressBar1Value,
  progressBar2Text,
  progressBar2Value,
  progressBar3Text,
  progressBar3Value,
  progressBar4Text,
  progressBar4Value,
  progressBar5Text,
  progressBar5Value,
}: SkillCardType) => {
  return (
    <>
      <div
        className={cn(
          `max-w-[800px] bg-gradient-to-br rounded-3xl p-6 ring-8 ring-inset ring-offset-4 hover:ring-offset-0 duration-300 ease-out`,
          {
            'ring-sky-300 hover:ring-sky-400 from-white via-sky-100 to-sky-200': ring === 'sky',
            'ring-orange-300 hover:ring-orange-400 from-white via-orange-1000 to-orange-200': ring === 'orange',
            'ring-lime-300 hover:ring-lime-400 from-white via-lime-50 to-lime-100': ring === 'lime',
            'ring-rose-300 hover:ring-rose-400 from-white via-rose-50 to-rose-100': ring === 'rose',
          }
        )}
      >
        <h4
          className={cn(
            `text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest  text-center text-black mb-2 text-ring font-[tektur]`,
            {
              'text-sky-500': ring === 'sky',
              'text-orange-500': ring === 'orange',
              'text-lime-500': ring === 'lime',
              'text-rose-500': ring === 'rose',
            }
          )}
        >
          {title}
          <span className='text-xs align-middle text-primary'>-{subTitle}</span>
          <Separator className='bg-primary' />
        </h4>
        <p className='text-secondary text-sm md:text-lg font-bold pb-4 '>
          {description}
          <Undo
            className={cn(`rotate-[280deg] size-16 ml-[20%] text-${ring}-500`, {
              'text-sky-500': ring === 'sky',
              'text-orange-500': ring === 'orange',
              'text-lime-500': ring === 'lime',
              'text-rose-500': ring === 'rose',
            })}
          />
        </p>
        <div className='flex flex-col gap-y-6 font-bold text-primary uppercase'>
          {/* bar 1 */}
          <div className='w-full flex flex-col justify-center'>
            <p>{progressBar1Text} -</p>
            <ProgressBar value={progressBar1Value} />
          </div>
          {/* bar 2 */}
          <div className={`${progressBar2Text ? 'flex' : 'hidden'} w-full flex-col justify-center`}>
            <p>{progressBar2Text} -</p>
            <ProgressBar value={progressBar2Value || 0} />
          </div>
          {/* bar 3  */}
          <div className={`${progressBar3Text ? 'flex' : 'hidden'} w-full flex-col justify-center`}>
            <p>{progressBar3Text} -</p>
            <ProgressBar value={progressBar3Value || 0} />
          </div>
          {/* bar 4  */}
          <div className={`${progressBar4Text ? 'flex' : 'hidden'} w-full flex-col justify-center`}>
            <p>{progressBar4Text} -</p>
            <ProgressBar value={progressBar4Value || 0} />
          </div>
          {/* bar 5  */}
          <div className={`${progressBar5Text ? 'flex' : 'hidden'} w-full flex-col justify-center`}>
            <p>{progressBar5Text} -</p>
            <ProgressBar value={progressBar5Value || 0} />
          </div>
        </div>
      </div>
    </>
  )
}
export default CardSkill
