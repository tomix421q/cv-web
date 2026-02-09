import { MyWorkCardType } from '@/utils/types'
import WorkCard from './WorkCard'

const RealizedProjects = () => {
  return (
    <div className='flex flex-wrap gap-y-20 md:gap-y-20 justify-center lg:gap-y-36 lg:justify-between md:mx-6'>
      <WorkCard myWorkCardData={Scrapify} />
      <WorkCard myWorkCardData={Alarify} />
      <WorkCard myWorkCardData={pds1} />
      <WorkCard myWorkCardData={pds2} />
      <WorkCard myWorkCardData={bks} />
    </div>
  )
}
export default RealizedProjects

const Scrapify: MyWorkCardType = {
  name: 'Scrapify',
  projectDate: '03.11.2025',
  images: [
    '/work/scrapify/screen1.png',
    '/work/scrapify/screen2.png',
    '/work/scrapify/screen3.png',
    '/work/scrapify/screen4.png',
    '/work/scrapify/screen5.png',
    '/work/scrapify/screen6.png',
    '/work/scrapify/screen7.png',
    '/work/scrapify/screen8.png',
    '/work/scrapify/screen9.png',
  ],
  technologies: ['SvelteKit', 'Prisma', 'MSsql', 'Tailwind', 'SQlite', 'ShadCn'],
  description:
    'Systém pre správu a evidenciu nepodarkov Táto aplikácia slúži na efektívnu digitalizáciu procesov spojených so zápisom scrapových výrobkov a ich následným sledovaním. Systém je rozdelený na používateľské roly pre maximálnu bezpečnosť a prehľadnosť: moderátor spravuje systém a vytvára profily pre operátorov, zatiaľ čo procesní inžinieri vopred definujú technické parametre nepodarkov. Samotný operátor sa po prihlásení na hlavnej stránke venuje už len rýchlemu nahrávaniu údajov, ktoré sa okamžite ukladajú do centrálnej firemnej databázy. Vďaka tomuto riešeniu je zabezpečená plná trasovateľnosť každého dielu, pričom systém presne eviduje, kto záznam pridal, kedy sa tak stalo a v rámci ktorého projektu k chybe došlo.',
  sourceCode: 'https://github.com/tomix421q/alarmHub',
  webLink: '',
}

const Alarify: MyWorkCardType = {
  name: 'Alarify',
  projectDate: '09.02.2026',
  images: [
    '/work/alarify/screen1.png',
    '/work/alarify/screen2.png',
    '/work/alarify/screen3.png',
    '/work/alarify/screen4.png',
    '/work/alarify/screen5.png',
    '/work/alarify/screen6.png',
    '/work/alarify/screen7.png',
    '/work/alarify/screen8.jpg',
    '/work/alarify/screen9.jpg',
  ],
  technologies: ['Flutter', 'Riverpod', 'Bun', 'Hono', 'Prisma', 'SQlite', 'Freezed'],
  description:
    'Komplexný systém na distribúciu kritických notifikácií a správu úloh v reálnom čase. Aplikácia rieši problém prehliadnutých správ tým, že využíva natívne rozhrania (CallKit) na prebudenie telefónu podobne ako pri prichádzajúcom hovore, aj keď je zariadenie zamknuté. Obsahuje backend na mieru, správu používateľov a živú synchronizáciu stavov úloh.',
  sourceCode: 'https://github.com/tomix421q/cv-web#',
  webLink: '',
}

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
