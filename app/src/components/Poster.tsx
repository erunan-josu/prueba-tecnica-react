import { imgErrorHandler } from '../utils/utils'
interface Props {
  img: Poster
  name: string
}

const Poster = ({ img, name }: Props) => {
  const { height, width, url } = img
  return (
    <img
      src={url}
      alt={name}
      onError={(e) => {
        imgErrorHandler(e)
      }}
      style={{ width: `${width}px`, height: `${height}` }}
    />
  )
}

export default Poster
