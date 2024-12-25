import { PiChats, PiChatsFill, PiComputerTower, PiComputerTowerFill, PiMagnifyingGlass, PiMagnifyingGlassFill, PiUser, PiUserCircleDashedFill, PiUserCircleDashedLight, PiUserFill } from "react-icons/pi"

export default [
  { name: 'Feed', icon: <PiComputerTower />, iconSelected: <PiComputerTowerFill /> },
  { name: 'Buscar', icon: <PiMagnifyingGlass />, iconSelected: <PiMagnifyingGlassFill /> },
  { name: 'Conversas', icon: <PiChats />, iconSelected: <PiChatsFill />, notificationsCount: 5 },
  { name: 'Perfil', icon: <PiUser />, iconSelected: <PiUserFill /> },
]

export type NavigationItem = {
  name: string
  icon: JSX.Element
  iconSelected: JSX.Element
  notificationsCount?: number
}