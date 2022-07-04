import {Link } from 'react-router-dom'

interface NavbarSectionProps {
  title: string
  link: string

}

const NavbarSection = ({title, link}:NavbarSectionProps) =>
{
  return(
    <Link to={link} className="no-underline text-black">
      <div className="px-4">
        <p>
          {title}
        </p>
      </div>
    </Link>
  )
}

export default NavbarSection
