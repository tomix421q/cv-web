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
              'V oblasti JavaScriptu sa v súčasnosti zameriavam výhradne na TypeScript. Ako primárny meta-framework využívam SvelteKit, ktorý nahradil moje predchádzajúce pôsobenie v Next.js. Hoci som v minulosti vyvíjal primárne v Reacte, dnes preferujem Svelte, a to najmä kvôli vyššej rýchlosti vývoja a lepšiemu výkonu výsledných aplikácií.'
            }
            ring='orange'
            progressBar1Text={'react'}
            progressBar1Value={70}
            progressBar2Text='nextJS'
            progressBar2Value={80}
            progressBar3Text='vanilla & jquery'
            progressBar3Value={20}
            progressBar4Text='SvelteKit'
            progressBar4Value={80}
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
              'Momentálne sa zameriavam predovšetkým na Bun, a to najmä pre jeho rýchlosť a natívnu podporu TypeScriptu, pričom na tento runtime postupne presúvam svoj backendový vývoj z Node.js. Kvôli efektivite rád využívam meta-frameworky, v súčasnosti najmä SvelteKit, ktorý dopĺňam o ľahký API framework Hono. Okrem toho mám skúsenosti aj s jazykom C# a platformou .NET.'
            }
            ring='sky'
            progressBar1Text={'Node'}
            progressBar1Value={50}
            progressBar2Text='Bun'
            progressBar2Value={30}
            progressBar3Text='express'
            progressBar3Value={40}
            progressBar4Text='Hono'
            progressBar4Value={40}
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
            progressBar5Text='Sqlite'
            progressBar5Value={60}
          />
        </div>
        {/* card */}
        {/* other */}
        <div className='lg:flex justify-between'>
          <CardSkill
            title={'Ostatne'}
            subTitle={'NodeRed & Next & ...'}
            description={
              'Okrem toho často využívam Node-RED na komunikáciu a efektívny zber dát. V súčasnosti sa v rámci nových technológií sústredím predovšetkým na Flutter a neustále vyhľadávanie nových riešení, ktoré posúvajú moju prácu vpred.'
            }
            ring='orange'
            progressBar1Text={'nodered'}
            progressBar1Value={60}
            progressBar2Text='Flutter'
            progressBar2Value={20}
            progressBar3Text='Riverpod(flutter)'
            progressBar3Value={20}
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
