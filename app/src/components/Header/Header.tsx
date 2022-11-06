import './Header.css'
import Title from '../Title'
import Subtitle from '../Subtitle'
import { NavLink } from 'react-router-dom'
const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className="top-header">
        <NavLink to="/">
          <Title text={'DEMO Streaming'} />
        </NavLink>
        <div className="login-box">
          <button>Log in</button>
          <button>Start your free trial</button>
        </div>
      </div>
      <NavLink to="/">
        <Subtitle text={'Popular Titles'} />
      </NavLink>
    </header>
  )
}
export default Header
