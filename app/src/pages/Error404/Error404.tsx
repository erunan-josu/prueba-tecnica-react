import './Error404.css'
import { Link } from 'react-router-dom'
import Paragraph from '../../components/Paragraph'

const Error404 = () => {
  return (
    <section className="error-section">
      <Paragraph text="Oops, something went wrong..." />
      <Link to="/">Go Home</Link>
    </section>
  )
}

export default Error404
