import { useState, useEffect } from 'react'
import { getData } from '../../api/data'
import Loader from '../../components/Loader/Loader'
import List from '../../components/List/List'
import Modal from '../../components/Modal'

const Movies = () => {
  const [modalState, setModalState] = useState(false)
  const [details, setDetails] = useState<Item | null>(null)
  const [filter, setFilter] = useState<Item[]>([])
  const [movies, setMovies] = useState<Item[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await getData('movie')
      setMovies(data)
      setFilter(data.filter((item: Item) => item.releaseYear >= 2010))
    })()
  }, [details])

  return (
    <section className="movies">
      {filter.length < 1 ? (
        <Loader />
      ) : (
        <List
          list={filter}
          state={modalState}
          setModal={setModalState}
          setDetails={setDetails}
        />
      )}
      {details && (
        <Modal item={details} state={modalState} setState={setModalState} />
      )}
    </section>
  )
}

export default Movies
