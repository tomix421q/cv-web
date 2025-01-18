import { MyWorkCardType } from '@/utils/types'
import WorkCard from './WorkCard'

const RealizedProjects = () => {
  return (
    <div className='flex flex-wrap gap-y-20 md:gap-y-20 justify-center lg:gap-y-36 lg:justify-between md:mx-6'>
      <WorkCard myWorkCardData={pds1} />
      <WorkCard myWorkCardData={pds2} />
      <WorkCard myWorkCardData={bks} />
    </div>
  )
}
export default RealizedProjects

const pds1: MyWorkCardType = {
  name: 'Process data share',
  projectDate: '03.10.2023',
  images: [
    '/work/pds/PDS1 Portfolio Image.jpg',
    '/work/pds/PDS2 Portfolio Image.jpg',
    '/work/pds/PDS3 Portfolio Image.jpg',
    '/work/pds/PDS4 Portfolio Image.jpg',
  ],
  technologies: ['Asp.net', 'MVC', 'VanillaJS', 'Razor', 'Axios', 'S7.net', 'Jquery'],
  description:
    'Tento projekt je vypracovaný ako riešenie pre monitorovanie strojov v reálnom čase a je implementovaný vo firemnom prostredí. Mám v pláne tento projekt rozšíriť a implementovať ho do aplikácie vytvorenej s využitím technológií react + .net s integrovanou databázou.',
  sourceCode: 'https://github.com/tomix421q/processDataShare',
  webLink: '',
}

const pds2: MyWorkCardType = {
  name: 'PDS [updated]',
  projectDate: '11.4.2024',
  images: [
    '/work/pds2/PDS React 1.jpg',
    '/work/pds2/PDS React 2.jpg',
    '/work/pds2/PDS React 3.jpg',
    '/work/pds2/PDS React 4.jpg',
    '/work/pds2/PDS React 5.jpg',
    '/work/pds2/PDS React 6.jpg',
    '/work/pds2/PDS React 7.jpg',
  ],
  technologies: ['.NET API', 'Tailwind', 'Entity FM', 'MsSql', 'Axios', 'S7.net'],
  description:
    'Tento projekt som vyvinul ako pokračovanie predchádzajúceho, kde som pridal databázu, použil React a zaviedol niekoľko ďalších rozšírení. Okrem toho je tento projekt určený na monitorovanie v reálnom čase a ukladanie dát v rámci siete našej spoločnosti, vďaka čomu je nedostupný pre online prezeranie.',
  sourceCode: 'https://github.com/tomix421q/ProcessDataShare_dotnetReact',
  webLink: '',
  video: '/work/pds2/videoPds.mp4',
}

const bks: MyWorkCardType = {
  name: 'BKS Web',
  projectDate: '14.5.2023',
  images: ['/work/bks/BKS1.png', '/work/bks/BKS2.png', '/work/bks/BKS3.png'],
  technologies: ['React', 'Tailwind', 'Vite', 'Javascript'],
  description:
    'Vyššie uvedenú webovú stránku som vytvoril s cieľom prezentovať služby spoločnosti BKS. Dôraz som kládol na jednoduchosť a vizuálne príjemný dizajn.',
  sourceCode: 'https://github.com/tomix421q/bks-web',
  webLink: 'https://bks-obkladacskeprace.sk/',
}
