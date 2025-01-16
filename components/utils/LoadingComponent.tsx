import './../../style/loading.css'
const LoadingComponent = () => {
  return (
    <div className='w-fit p-10 -translate-y-60 flex justify-center items-center mx-auto my-auto flex-col z-50 bg-black'>
      <div className='loader '>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
      </div>
      <h2 className='font-[tektur] text-3xl mt-10 tracking-widest font-semibold'>Loading...</h2>
    </div>
  )
}
export default LoadingComponent
