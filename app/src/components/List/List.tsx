import './List.css'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
interface Props {
  list: Item[]
}
const List = ({ list }: Props) => {
  return list.length < 1 ? (
    <Loader />
  ) : (
    <ul className={'list'}>
      {list?.map((movie: Item) => {
        return (
          <Card
            key={movie.title}
            img={movie.images['Poster Art']}
            name={movie.title}
          />
        )
      })}
    </ul>
  )
}

export default List
