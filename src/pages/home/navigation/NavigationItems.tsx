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
    notificationsCount: 5,
    route: '/conversas',
    component: Conversas
  },
] as NavigationItem[]

export type NavigationItem = {
  name: string
  icon: JSX.Element
  iconSelected: JSX.Element
  notificationsCount?: number
  route: string,
  component: React.FC
}