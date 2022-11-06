import styled from 'styled-components'
import closeIcon from '../../public/closeIcon.svg'
import Paragraph from './Paragraph'

interface Props {
  item: Item | null
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ item, state, setState }: Props) => {
  return state ? (
    <>
      <Overlay>
        <ModalContainer>
          <ModalHeader></ModalHeader>
          <CloseButton onClick={() => setState(!state)}>
            <img src={closeIcon} alt="close icon" />
          </CloseButton>
          <DetailsContainer>
            <img src={item?.images['Poster Art'].url} alt="" />
            <Details>
              <Paragraph text={item?.title} />
              <Paragraph text={item?.releaseYear} />
              <Paragraph text={item?.description} />
            </Details>
          </DetailsContainer>
        </ModalContainer>
      </Overlay>
    </>
  ) : null
}
export default Modal

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContainer = styled.div`
  width: 90%;
  max-width: 500px;
  min-height: 100px;
  padding: 1.25rem;
  background: var(--background);
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const ModalHeader = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e8e8e8;
`

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  height: 1.8rem;
  width: 1.8rem;
  color: var(--blue);
  background: none;
  border: none;
  border-radius: 3px;
  background: white;
  transition: all ease-in-out 0.4s;

  &:hover {
    background: var(--blue);
    color: var(--white);
  }

  img {
    width: 100%;
    height: 100%;
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  img {
    width: 40%;
    min-width: 140px;
  }
`

const Details = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`
