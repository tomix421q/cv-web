'use client'
import ExperimentalProjects from '@/components/mywork/ExperimentalProjects'
import RealizedProjects from '@/components/mywork/RealizedProjects'
import TutorialProjects from '@/components/mywork/TutorialProjects'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import Header from '@/components/utils/Header'
import { useState } from 'react'

const WorkRoute = () => {
  const [numberTab, setNumberTab] = useState<number>(1)

  const handleTabClick = (numberTab: number) => {
    setNumberTab(numberTab)
  }

  return (
    <main>
      <Header text={'Moja práca'} emoji={'🏋️‍♀️'} />

      <div>
        <NavigationMenu className='cursor-pointer mt-2'>
          <NavigationMenuList className='flex flex-wrap lg:flex-row items-start  gap-2'>
            <NavigationMenuItem>
              <NavigationMenuLink onMouseDown={() => handleTabClick(1)} className='w-full'>
                <Button variant={`${numberTab === 1 ? 'default' : 'secondary'}`} className='font-bold '>
                  Realizovane projekty
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onMouseDown={() => handleTabClick(2)}>
                <Button variant={`${numberTab === 2 ? 'default' : 'secondary'}`} className='font-bold'>
                  Experimentalne projekty
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onMouseDown={() => handleTabClick(3)}>
                <Button variant={`${numberTab === 3 ? 'default' : 'secondary'}`} className='font-bold'>
                  Tutorial projekty
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/*  */}
      <div className='mt-24'>
        {numberTab === 1 && <RealizedProjects />}
        {numberTab === 2 && <ExperimentalProjects />}
        {numberTab === 3 && <TutorialProjects />}
      </div>
    </main>
  )
}
export default WorkRoute
