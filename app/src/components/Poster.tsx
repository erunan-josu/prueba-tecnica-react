import { imgErrorHandler } from '../utils/utils'
interface Props {
  img: Poster
  name: string
}

const Poster = ({ img, name }: Props) => {
  return (
    <img
      src={img.url}
      alt={name}
      onError={(e) => {
        imgErrorHandler(e)
      }}
      style={{ width: `${img.width}px` }}
    />
  )
}

export default Poster
