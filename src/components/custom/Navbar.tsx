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
    <header className='flex items-center justify-around border-b-1 p-2 sticky top-0 z-20 bg-white'>
      <h1 onClick={() => navigate('/')} className='cursor-pointer'>my commerce</h1>
      <NavigationMenu>
        <NavigationMenuList className='gap-3'>
          <NavigationMenuItem>
            <NavigationMenuTrigger>categorias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='w-80 flex flex-wrap'>
                {categories.map(category => (
                  <NavigationMenuLink 
                    className='w-[50%] cursor-pointer' 
                    key={category}
                    onClick={() => navigate(`/category/${category}`)}
                  >
                    {category}
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>login</NavigationMenuItem>
          <CartWidget />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Navbar
