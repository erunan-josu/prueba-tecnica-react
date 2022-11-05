import './Header.css'
import Title from '../Title'
import Subtitle from '../Subtitle'
import { NavLink } from 'react-router-dom'
const Header: React.FunctionComponent = () => {
  return (
    <header>
      <NavLink to="/">
        <Title text={'DEMO Streaming'} />
      </NavLink>
      <NavLink to="/">
        <Subtitle text={'Popular Titles'} />
      </NavLink>
    </header>
  )
}
export default Header
