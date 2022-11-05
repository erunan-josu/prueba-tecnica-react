import { useState, useEffect } from 'react'
import { getData } from '../../api/data'
import List from '../../components/List/List'

const Movies = () => {
  const [filter, setFilter] = useState<Item[]>([])
  const [movies, setMovies] = useState<Item[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await getData('movie')
      setMovies(data)
      setFilter(data.filter((item: Item) => item.releaseYear >= 2010))
    })()
  }, [])

  return (
    <section className="movies">
      <List list={filter} />
    </section>
  )
}

export default Movies
