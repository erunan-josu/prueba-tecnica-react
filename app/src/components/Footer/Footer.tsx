import './Footer.css'
import fb from '../../../public/facebook-white.svg'
import twitter from '../../../public/twitter-white.svg'
import insta from '../../../public/instagram-white.svg'
import Paragraph from '../Paragraph'
import Social from '../IconList/IconList'

const social = [
  { name: 'facebook', icon: fb, href: 'https://es-es.facebook.com/' },
  { name: 'twiter', icon: twitter, href: 'https://twitter.com/?lang=es' },
  { name: 'instagram', icon: insta, href: 'https://www.instagram.com/' },
]

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a className="policy-link" href="#" target="_blank">
            Home
          </a>
          <a className="policy-link" href="#" target="_blank">
            Terms and Conditions
          </a>
          <a className="policy-link" href="#" target="_blank">
            Privacy Policy
          </a>
          <a className="policy-link" href="#" target="_blank">
            Collection Statement
          </a>
          <a className="policy-link" href="#" target="_blank">
            Help
          </a>
          <a className="policy-link" href="#" target="_blank">
            Manage Account
          </a>
        </li>
      </ul>
      <Paragraph
        text={'Copyright © 2016 DEMO Streaming. All Rights Reserved'}
      />
      <div className="contact-box">
        <Social icons={social} />
      </div>
    </footer>
  )
}

export default Footer
