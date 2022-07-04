import {Link } from 'react-router-dom'
import {Text} from '@mantine/core'

interface NavbarSectionProps {
  title: string
  link: string

}

const NavbarSection = ({title, link}:NavbarSectionProps) =>
{
  return(
    <Link to={link} className="no-underline text-black cursor-pointer">
      <Text className="px-4 hover:bg-gray-200 h-[40px] flex flex-row items-center">
        {title}
      </Text>
    </Link>
  )
}

export default NavbarSection
