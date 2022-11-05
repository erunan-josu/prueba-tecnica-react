import { Link } from 'react-router-dom'
import Paragraph from '../../components/Paragraph'

const Error404 = () => {
  return (
    <section className="error-section">
      <div>
        <Paragraph text="Oops, something went wrong..." />
        <Link to="/">Go Home</Link>
      </div>
    </section>
  )
}

export default Error404
