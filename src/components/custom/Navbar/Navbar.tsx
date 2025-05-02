import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { useCategories } from '@/hooks/useCategories'
import { useNavigate } from 'react-router'
import CartWidget from './CartWidget'

function Navbar () {
  const categories = useCategories()
  const navigate = useNavigate()

  return (
    <header className='flex items-center justify-between border-b-1 p-2 sticky top-0 z-20 px-6'>
      <h1 onClick={() => navigate('/')} className='cursor-pointer'>my commerce</h1>
      <NavigationMenu orientation='vertical'>
        <NavigationMenuList className='gap-3' >
          <NavigationMenuItem>
            <NavigationMenuTrigger className='cursor-pointer'>categories</NavigationMenuTrigger>
            <NavigationMenuContent className='h-[500px] overflow-auto scrollbar-none'>
              <>
                {categories.map(category => (
                  <NavigationMenuLink 
                    className='w-[200px] cursor-pointer' 
                    key={category}
                    onClick={() => navigate(`/category/${category}`)}
                  >
                    {category}
                  </NavigationMenuLink>
                ))}
              </>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <CartWidget />
        </NavigationMenuList>
      </NavigationMenu>  
    </header>
  )
}

export default Navbar
