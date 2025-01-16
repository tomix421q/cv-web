'use client'
import Myskills from '@/components/myskills/Myskills'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import Header from '@/components/utils/Header'
import { useState } from 'react'

const MySkillsRoute = () => {
  const [numberTab, setNumberTab] = useState<number>(1)

  const handleTabClick = (numberTab: number) => {
    setNumberTab(numberTab)
  }

  return (
    <main>
      <header>
        <Header text={'Moje skills'} emoji={'👨‍💻'} />
      </header>
      <div className=''>
        <NavigationMenu className='cursor-pointer mt-2'>
          <NavigationMenuList className='flex flex-wrap lg:flex-row items-start  gap-2'>
            {/* variant 1 */}
            <NavigationMenuItem>
              <NavigationMenuLink onMouseDown={() => handleTabClick(1)} className='w-full'>
                <Button variant={`${numberTab === 1 ? 'default' : 'secondary'}`} className='font-bold '>
                  Web dev
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* variant 2  */}
            <NavigationMenuItem>
              <NavigationMenuLink onMouseDown={() => handleTabClick(2)}>
                <Button variant={`${numberTab === 2 ? 'default' : 'secondary'}`} className='font-bold'>
                  Automatizacia
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className='mt-14'>
        <Myskills variant={numberTab} />
      </div>
    </main>
  )
}
export default MySkillsRoute
