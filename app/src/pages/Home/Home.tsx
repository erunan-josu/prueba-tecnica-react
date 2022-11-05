import './Home.css'

import { NavLink } from 'react-router-dom'
import Paragraph from '../../components/Paragraph'

const Home: React.FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <li className="movies-li">
          <NavLink to="movies">
            <img
              src="https://res.cloudinary.com/dieasyxbw/image/upload/v1667644469/online-shop/movies_wbabnd.jpg"
              alt="movies"
            />
            <Paragraph text={'popular Movies'} />
          </NavLink>
        </li>
        <li className="series-li">
          <NavLink to="series">
            <img
              src="https://res.cloudinary.com/dieasyxbw/image/upload/v1667645768/online-shop/series_g0dvwn.jpg"
              alt="series"
            />
            <Paragraph text={'Popular Series'} />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Home
