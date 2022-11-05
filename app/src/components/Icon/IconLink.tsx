import './IconLink.css'

interface Props {
  icon: Icon
}

const IconLink = ({ icon }: Props) => {
  return (
    <a href={icon.href} className={'icon-link'}>
      <img src={icon.icon} alt={icon.name} />
    </a>
  )
}

export default IconLink
