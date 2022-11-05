import './Card.css'
import Poster from '../Poster'

interface Props {
  img: Poster
  name: string
}

const Card = ({ img, name }: Props) => {
  return (
    <figure className="card">
      <Poster img={img} name={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export default Card
