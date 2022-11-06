import { useState, useEffect } from 'react'
import { getData } from '../api/data'
import Modal from '../components/Modal'
import List from '../components/List/List'
import Loader from '../components/Loader/Loader'

const Series = () => {
  const [modalState, setModalState] = useState(false)
  const [details, setDetails] = useState<Item | null>(null)
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

export default Series
