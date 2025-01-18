import { MyWorkCardType } from '@/utils/types'
import WorkCard from './WorkCard'

const TutorialProjects = () => {
  return (
    <div className='flex flex-wrap gap-y-20 md:gap-y-20 justify-center lg:gap-y-36 lg:justify-between md:mx-6'>
      <WorkCard myWorkCardData={airbnbclone} />
      <WorkCard myWorkCardData={jobify} />
    </div>
  )
}
export default TutorialProjects

const airbnbclone: MyWorkCardType = {
  name: 'Airbnb clone',
  projectDate: '3.04.2024',
  images: [
    '/work/airbnbclone/airbnb1.png',
    '/work/airbnbclone/airbnb2.png',
    '/work/airbnbclone/airbnb3.png',
    '/work/airbnbclone/airbnb4.png',
  ],
  technologies: [
    'bcryptjs',
    'cloudinary',
    'express',
    'mongo Db',
    'nodemon',
    'react',
    'styled components',
    'react-router-dom',
    'axios',
  ],
  description:
    'Airbnb clone je plne funkčná replika populárnej ubytovacej platformy, vytvorená pomocou moderných webových technológií. Backend je postavený na Express.js s MongoDB databázou, zatiaľ čo frontend využíva React s elegantným štýlovaním pomocou Styled Components. Aplikácia zahŕňa bezpečnú správu používateľov s bcryptjs šifrovaním, cloudové úložisko obrázkov cez Cloudinary a plynulú navigáciu vďaka React Router. Komunikácia medzi frontend a backend časťami je zabezpečená pomocou Axios, a vývoj je optimalizovaný s využitím Nodemon pre automatické reštartovanie servera.',
  sourceCode: 'https://github.com/tomix421q/___airbnbClone_HomeAway-ts-next-zod-prisma-subabase',
  webLink: 'https://airbnb-clone-home-away-ts-next-zod-prisma-subabase.vercel.app/',
}

const jobify: MyWorkCardType = {
  name: 'Jobify',
  projectDate: '15.01.2024',
  images: ['/work/jobify/jobify1.png', '/work/jobify/jobify2.png', '/work/jobify/jobify3.png'],
  technologies: ['axios', 'react', 'react-router-dom', 'react-toastify', 'vite', 'express', 'mongo db', 'cloudinary'],
  description:
    'Jobify je komplexná webová aplikácia na správu a vyhľadávanie pracovných príležitostí, postavená na MERN stacku. Frontend je vyvinutý pomocou React.js a Vite pre rýchly vývoj a optimálny výkon, s React Router pre plynulú navigáciu a React Toastify pre užívateľsky prívetivé notifikácie. Backend je implementovaný cez Express.js s MongoDB databázou, zatiaľ čo Cloudinary zabezpečuje efektívne ukladanie a správu mediálneho obsahu. Komunikácia medzi frontend a backend časťami je realizovaná pomocou Axios.',
  sourceCode: 'https://github.com/tomix421q/___jobify-mern-mongo-styledComponents/tree/main',
  webLink: 'https://jobify-mern-9kkm.onrender.com/',
}
