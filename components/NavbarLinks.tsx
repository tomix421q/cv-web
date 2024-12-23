const navbarLinks = [
  { id: 0, name: 'Home', href: '/' },
  { id: 1, name: 'About me', href: '/aboutme' },
  { id: 2, name: 'My skills', href: '/myskills' },
  { id: 3, name: 'Work', href: '/work' },
  { id: 4, name: 'Contact', href: '/contact' },
]

const NavbarLinks = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-start items-start gap-y-3 gap-x-16 text-3xl lg:text-xl mt-10 md:mt-0'>
      {navbarLinks.map((item) => {
        return (
          <a href={item.href} key={item.id}>
            {item.name}
          </a>
        )
      })}
    </div>
  )
}
export default NavbarLinks
