import { Bot, Cable, CircleEllipsis, Cpu, Database, FileJson, HardDriveUpload, Paintbrush } from 'lucide-react'
import CardSkill from './CardSkill'

const Myskills = ({ variant }: { variant: number }) => {
  return (
    <main className='mx-auto'>
      {/*  */}
      {/*  */}
      {/* VARIANT 1  */}
      <section className={`${variant === 1 ? ' grid grid-cols-1 gap-16 justify-center' : 'hidden'}`}>
        {/* card */}
        {/* javascript frontend */}
        <div className='lg:flex justify-between'>
          <CardSkill
            title={'Frontend Javascript'}
            subTitle={'React & Next & ...'}
            description={
              'Aktívne sa venujem JavaScript vývoju, pričom už 3 roky sa špecializujem na React ekosystém. Ovládam pokročilé koncepty Reactu vrátane hooks, context API a state managementu. Aktívne využívam Next.js pre SSR a optimalizáciu výkonu. V blízkej budúcnosti plánujem rozšíriť svoje znalosti o Vue.js framework a React native.'
            }
            ring='orange'
            progressBar1Text={'react'}
            progressBar1Value={70}
            progressBar2Text='nextJS'
            progressBar2Value={80}
            progressBar3Text='vanilla & jquery'
            progressBar3Value={20}
            progressBar4Text='react-native'
            progressBar4Value={10}
            progressBar5Text='tanstack & reactrouter'
            progressBar5Value={50}
          />
          <FileJson className='size-96 my-auto text-orange-200/70 hidden lg:flex' />
        </div>
        {/* card */}
        {/* backend javascript */}
        <div className='lg:flex justify-between'>
          <HardDriveUpload className='size-96 my-auto text-sky-200/70 hidden lg:flex' />
          <CardSkill
            title={'Backend Javascript'}
            subTitle={'NEXT & Fastify & ...'}
            description={
              'Na backende sa zameriavam na vývoj REST API pomocou Node.js. Mám skúsenosti s Next.js API routes pre full-stack aplikácie a Fastify pre vysokovýkonné mikroslužby. Ovládam princípy REST architektúry, middleware a autentifikácie.'
            }
            ring='sky'
            progressBar1Text={'next'}
            progressBar1Value={60}
            progressBar2Text='fastify'
            progressBar2Value={40}
            progressBar3Text='express'
            progressBar3Value={40}
          />
        </div>
        {/* card */}
        {/* css style */}
        <div className='lg:flex justify-between'>
          <CardSkill
            title={'CSS & Štýlovanie'}
            subTitle={'Tailwind & Styled Components & ...'}
            description={
              'Mám skúsenosti s modernými CSS nástrojmi a frameworkami. Špecializujem sa na Tailwind CSS pre rýchly vývoj, Styled Components pre komponentové štýlovanie a ovládam aj vanilla CSS pre custom riešenia. Kladiem dôraz na responzívny dizajn a CSS best practices.'
            }
            ring='lime'
            progressBar1Text={'Tailwind'}
            progressBar1Value={90}
            progressBar2Text='StyledComponents'
            progressBar2Value={60}
            progressBar3Text='Vanilla CSS'
            progressBar3Value={50}
            progressBar4Text='Bootstrap'
            progressBar4Value={30}
          />
          <Paintbrush className='size-96 my-auto text-lime-200/70 hidden lg:flex' />
        </div>
        {/* card */}
        {/* db use */}
        <div className='lg:flex justify-between'>
          <Database className='size-96 my-auto text-rose-200/70 hidden lg:flex' />
          <CardSkill
            title={'Databázové systémy'}
            subTitle={'Prisma ORM & PostgreSQL & ...'}
            description={
              'Pracujem s rôznymi typmi databáz, od SQL po NoSQL riešenia. Využívam Prisma ORM pre typovo bezpečný prístup k dátam, PostgreSQL pre robustné dátové úložisko a MongoDB pre flexibilné NoSQL riešenia. Mám skúsenosti s cloud databázovými službami ako Neon, Supabase a MongoDB Atlas.'
            }
            ring='rose'
            progressBar1Text={'prisma'}
            progressBar1Value={70}
            progressBar2Text='postgreSql'
            progressBar2Value={60}
            progressBar3Text='Mongo'
            progressBar3Value={50}
            progressBar4Text='Neon & Supabase & Atlas & SSMS studio'
            progressBar4Value={70}
            progressBar5Text='MSsql'
            progressBar5Value={30}
          />
        </div>
        {/* card */}
        {/* other */}
        <div className='lg:flex justify-between'>
          <CardSkill
            title={'Ostatne'}
            subTitle={'NodeRed & Next & ...'}
            description={
              'Okrem hlavných technológií sa venujem aj Node-RED pre IoT riešenia. Mám základné skúsenosti s C# a .NET frameworkom z menších projektov. V roku 2025 sa plánujem zamerať na Python, najmä v oblasti API.'
            }
            ring='orange'
            progressBar1Text={'nodered'}
            progressBar1Value={60}
            progressBar2Text='C#'
            progressBar2Value={10}
            progressBar3Text='.net'
            progressBar3Value={10}
            progressBar4Text='python [2025]'
            progressBar4Value={0}
            progressBar5Text='Zod'
            progressBar5Value={60}
          />
          <CircleEllipsis className='size-96 my-auto text-orange-200/70 hidden lg:flex' />
        </div>
      </section>
      {/*  */}
      {/*  */}
      {/* VARIANT 2  */}
      <section className={`${variant === 2 ? ' grid grid-cols-1 gap-16 justify-center' : 'hidden'}`}>
        {/*  */}
        {/* card plc */}
        <div className='lg:flex justify-between'>
          <CardSkill
            title={'PLC'}
            subTitle={'Siemens'}
            description={
              'V oblasti PLC mám skúsenosti so Siemens PLC systémami využívajúc jazyky LAD, FBD a SCL. Mám praktické skúsenosti s implementáciou a ladením PID regulátorov a integráciou OPC komunikácie. Realizoval som množstvo menších projektov zahŕňajúcich konfiguráciu dátových rekordérov, úpravy riadiacich systémov, optimalizáciu riadiacej logiky a nastavenie komunikácie medzi PLC. Mojím cieľom je ďalší profesionálny rast a participácia na väčších automatizačných projektoch.'
            }
            ring='sky'
            progressBar1Text={'lad'}
            progressBar1Value={80}
            progressBar2Text='fbd'
            progressBar2Value={90}
            progressBar3Text='scl'
            progressBar3Value={30}
          />
          <Cpu className='size-96 my-auto text-sky-200/70 hidden lg:flex' />
        </div>

        {/* card robot  */}
        <div className='lg:flex justify-between'>
          <Bot className='size-96 my-auto text-orange-200/70 hidden lg:flex' />
          <CardSkill
            title={'ROBOTY'}
            subTitle={'ABB & UR'}
            description={
              'V oblasti robotiky mám praktické skúsenosti s uvedením ABB robotov do prevádzky na rôznych projektoch. Ovládam konfiguráciu bezpečnostných prvkov, kalibráciu osí a programovanie pozícií. Aktívne pracujem s prostredím ABB RobotStudio pre programovanie a simuláciu. V oblasti Universal Robots (UR) mám skúsenosti z implementačných projektov a zvládam základné programovanie a úpravy existujúcich programov.'
            }
            ring='orange'
            progressBar1Text={'robot studio'}
            progressBar1Value={50}
            progressBar2Text='rapid'
            progressBar2Value={70}
            progressBar3Text='ur'
            progressBar3Value={40}
          />
        </div>
        {/* card other  */}
        <div className='lg:flex justify-between'>
          <CardSkill
            title={'OSTATNE'}
            subTitle={'KEYENCE & COGNEX & ...'}
            description={
              'Špecializujem sa na kamerové inšpekčné systémy, s hlavným zameraním na platformy Keyence a Cognex. Mám bohaté skúsenosti s implementáciou a optimalizáciou inšpekčných algoritmov. Aj keď nemám priame skúsenosti s komplexnou implementáciou celých systémov, dokážem efektívne realizovať rozsiahle úpravy existujúcich riešení. Som držiteľom osvedčenia §21 pre prácu na elektrických zariadeniach a certifikátu oprávňujúceho na výučbu študentov v systéme duálneho vzdelávania.'
            }
            ring='rose'
            progressBar1Text={'Keyence -> Inšpekčné systémy, snímače'}
            progressBar1Value={80}
            progressBar2Text='Cognex -> Vision systémy'
            progressBar2Value={90}
            progressBar3Text='Meniče'
            progressBar3Value={30}
            progressBar4Text='Elektrotechnická spôsobilosť §21'
            progressBar4Value={100}
            progressBar5Text='Certifikát pre duálne vzdelávanie'
            progressBar5Value={100}
          />
          <Cable className='size-96 my-auto text-rose-200/70 hidden lg:flex' />
        </div>
      </section>
    </main>
  )
}
export default Myskills
