import { PiChats, PiChatsFill, PiMagnifyingGlass, PiMagnifyingGlassFill, PiUser, PiUserFill } from "react-icons/pi"
import Conversas from "../sections/conversas/Conversas"

export default [
  {
    name: 'Perfil',
    icon: <PiUser />,
    iconSelected: <PiUserFill />,
    route: '/perfil',
    component: Conversas
  },
  {
    name: 'Explorar',
    icon: <PiMagnifyingGlass />,
    iconSelected: <PiMagnifyingGlassFill />,
    route: '/explorar',
    component: Conversas
  },
  {
    name: 'Conversas',
    icon: <PiChats />,
    iconSelected: <PiChatsFill />,
    hasUpdates: true,
    route: '/conversas',
    component: Conversas,
    default: true
  },
] as NavigationItem[]

export type NavigationItem = {
  name: string
  icon: JSX.Element
  iconSelected: JSX.Element
  hasUpdates?: boolean
  route: string,
  component: React.FC
  default?: boolean
}