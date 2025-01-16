import { Progress } from '../ui/progress'

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className={`flex items-center justify-center gap-x-2 text-secondary text-xs`}>
      <span>0%</span>
      <Progress
        value={value}
        className={`w-screen h-6 border-secondary hover:border-white hover:border-2 transition-all ease-linear border-[1px] `}
      />
      <span>100%</span>
    </div>
  )
}
export default ProgressBar
