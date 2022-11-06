import './Card.css'
import Poster from '../Poster'
import React from 'react'

interface Props {
  item: Item
  state: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  setDetails: React.Dispatch<React.SetStateAction<Item | null>>
}

const Card = ({ item, state, setModal, setDetails }: Props) => {
  const { title, images } = item
  const img: Poster = images['Poster Art']
  const detailsHandler = () => {
    setDetails(item)
    setModal(!state)
  }

  return (
    <figure className="card">
      <Poster img={img} name={title} />
      <figcaption onClick={() => detailsHandler()}>{title}</figcaption>
    </figure>
  )
}

export default Card
