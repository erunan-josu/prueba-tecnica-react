import './IconList.css'
import IconLink from '../Icon/IconLink'
interface Props {
  icons: Icon[]
}

const IconList = ({ icons }: Props) => {
  return (
    <ul className="icon-list">
      {icons?.map((icon) => (
        <li key={icon.name}>
          <IconLink icon={icon} />
        </li>
      ))}
    </ul>
  )
}

export default IconList
