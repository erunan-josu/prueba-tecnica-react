import { useOutlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const outlet = useOutlet()
  return (
    <div className="App">
      <Header />
      <main>{outlet}</main>
      <Footer />
    </div>
  )
}

export default App
