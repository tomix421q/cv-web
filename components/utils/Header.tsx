import { Separator } from '../ui/separator'

const Header = ({ text, className, emoji }: { text: string; className?: string; emoji?: string }) => {
  return (
    <>
      <h2
        className={`${className} font-[tektur] text-5xl lg:text-7xl tracking-wider font-semibold bg-gradient-to-b bg-clip-text from-primary to-violet-400 text-transparent mb-10 flex`}
      >
        {text}
        <span className='text-black text-5xl lg:text-7xl my-auto flex items-center ml-2'>{emoji}</span>
      </h2>
      <Separator />
    </>
  )
}
export default Header
