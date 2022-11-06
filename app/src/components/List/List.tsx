import './List.css'
import Card from '../Card/Card'
import React from 'react'
interface Props {
  list: Item[]
  state: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  setDetails: React.Dispatch<React.SetStateAction<Item | null>>
}
const List = ({ list, state, setModal, setDetails }: Props) => (
  <ul className={'list'}>
    {list?.map((movie: Item) => {
      return (
        <Card
          key={movie.title}
          item={movie}
          state={state}
          setModal={setModal}
          setDetails={setDetails}
        />
      )
    })}
  </ul>
)

export default List
