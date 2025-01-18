import { MyWorkCardType } from '@/utils/types'
import WorkCard from './WorkCard'

const ExperimentalProjects = () => {
  return (
    <div className='flex flex-wrap gap-y-20 md:gap-y-20 justify-center lg:gap-y-36 lg:justify-between md:mx-6'>
      <WorkCard myWorkCardData={velvet} />
      <WorkCard myWorkCardData={rebook} />
      <WorkCard myWorkCardData={wanderList} />
    </div>
  )
}
export default ExperimentalProjects

const velvet: MyWorkCardType = {
  name: 'Velvet Store',
  projectDate: '10.12.2024',
  images: ['/work/velvetstore/velvet1.png', '/work/velvetstore/velvet2.png', '/work/velvetstore/velvet3.png'],
  technologies: ['Kinde', 'NextJs', 'Zod', 'Tailwind', 'Typescript', 'Prisma', 'Neon - PostgreSql', 'UploadThing'],
  description:
    'Tento projekt predstavuje moderný e-shop s názvom Velvet Store, vytvorený ako praktická ukážka mojich zručností v oblasti vývoja webových aplikácií. Využíva moderné technológie ako Next.js, TypeScript a Prisma, ktoré zaručujú rýchlosť, spoľahlivosť a škálovateľnosť.Cieľom bolo vytvoriť prehľadné a intuitívne rozhranie pre zákazníkov s dôrazom na responzívny dizajn, aby sa stránka bez problémov zobrazovala na všetkých zariadeniach.',
  sourceCode: 'https://github.com/tomix421q/velvet-store',
  webLink: 'https://velvet-store-xi.vercel.app/',
}

const rebook: MyWorkCardType = {
  name: 'Re-book',
  projectDate: '20.09.2024',
  images: ['/work/rebook/rebook1.png', '/work/rebook/rebook2.png', '/work/rebook/rebook3.png'],
  technologies: ['Tailwind', 'NextJs', 'Prisma', 'Typescript', 'axios', 'stripe', 'zustand', 'Clerk'],
  description:
    'Re-book je moderná webová aplikácia na online predaj a výmenu kníh. Využíva robustný technologický stack postavený na Next.js a TypeScripte, s Prisma ORM pre efektívnu správu databázy. Aplikácia ponúka bezpečnú autentifikáciu pomocou Clerk a integrovaný platobný systém Stripe pre pohodlné transakcie. State management je riešený pomocou Zustand pre optimálny výkon a responzívny dizajn je zabezpečený frameworkom Tailwind CSS.',
  sourceCode: 'https://github.com/tomix421q/---re-Book_nextPrismaSupabaseClerk/tree/main/utils',
  webLink: 'https://re-book-next-prisma-supabase-clerk-tu3p.vercel.app/',
}

const wanderList: MyWorkCardType = {
  name: 'Wander List',
  projectDate: '10.06.2024',
  images: [
    '/work/wanderlist/wanderlist1.png',
    '/work/wanderlist/wanderlist2.png',
    '/work/wanderlist/wanderlist3.png',
    '/work/wanderlist/wanderlist4.png',
  ],
  technologies: [
    'React-router-dom',
    'Styled Components',
    'axios',
    'Vite',
    'bcryptJs',
    'express',
    'mongo DB',
    'morgan',
    'nanoid',
    'nodemon',
  ],
  description:
    'Wander List je interaktívna cestovateľská aplikácia postavená na MERN stacku, ktorá pomáha používateľom plánovať a organizovať ich cestovateľské dobrodružstvá. Frontend je vyvinutý pomocou Vite a React s elegantným dizajnom implementovaným cez Styled Components. Aplikácia využíva React Router pre bezproblémovú navigáciu medzi stránkami. Backend je postavený na Express.js s MongoDB databázou, pričom bezpečnosť používateľských účtov je zabezpečená pomocou bcryptJs. Pre optimalizáciu vývoja je použitý Nodemon a Morgan pre logovanie, zatiaľ čo nanoid generuje unikátne identifikátory. Komunikácia medzi frontend a backend časťami je zabezpečená pomocou Axios.',
  sourceCode: 'https://github.com/tomix421q/---wanderList-mern/tree/main',
  webLink: 'https://wanderlist-mern-1.onrender.com/',
}
