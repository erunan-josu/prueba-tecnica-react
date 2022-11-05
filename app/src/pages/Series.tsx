import { useState, useEffect } from 'react'
import { getData } from '../api/data'
import List from '../components/List/List'

const Series = () => {
  const [filter, setFilter] = useState<Item[]>([])
  const [series, setSeries] = useState<Item[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await getData('series')
      setSeries(data)
      setFilter(data.filter((item: Item) => item.releaseYear >= 2010))
    })()
  }, [])

  return (
    <section className="movies">
      <List list={filter} />
    </section>
  )
}

export default Series
