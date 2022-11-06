import styled from 'styled-components'
import fb from '../../public/facebook-white.svg'
import twitter from '../../public/twitter-white.svg'
import insta from '../../public/instagram-white.svg'
import Paragraph from './Paragraph'
import IconList from './IconList/IconList'
import appStore from '../assets/store/app-store.svg'
import playStore from '../assets/store/play-store.svg'
import windowsStore from '../assets/store/windows-store.svg'

const social = [
  { name: 'facebook', icon: fb, href: 'https://es-es.facebook.com/' },
  { name: 'twitter', icon: twitter, href: 'https://twitter.com/?lang=es' },
  { name: 'instagram', icon: insta, href: 'https://www.instagram.com/' },
]

const stores = [
  {
    name: 'appStore',
    icon: appStore,
    href: 'https://www.apple.com/app-store/',
  },
  {
    name: 'playStore',
    icon: playStore,
    href: 'https://play.google.com/store/games',
  },
  {
    name: 'windowsStore',
    icon: windowsStore,
    href: 'https://apps.microsoft.com/store/apps',
  },
]

const Footer = () => {
  return (
    <FooterContainer>
      <PolicyList>
        <li key={1}>
          <LinkItem href="#" target="_blank">
            Home
          </LinkItem>
        </li>
        <li key={2}>
          <LinkItem href="#" target="_blank">
            Terms and Conditions
          </LinkItem>
        </li>
        <li key={3}>
          <LinkItem href="#" target="_blank">
            Privacy Policy
          </LinkItem>
        </li>
        <li key={4}>
          <LinkItem href="#" target="_blank">
            Collection Statement
          </LinkItem>
        </li>

        <li key={5}>
          <LinkItem href="#" target="_blank">
            Help
          </LinkItem>
        </li>
        <li key={6}>
          <LinkItem href="#" target="_blank">
            Manage Account
          </LinkItem>
        </li>
      </PolicyList>
      <Paragraph
        text={'Copyright © 2016 DEMO Streaming. All Rights Reserved'}
      />
      <ContactBox>
        <IconList icons={social} />
        <IconList icons={stores} />
      </ContactBox>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  min-height: 210px;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  @media screen and (max-width: 959px) {
    padding: 2rem;
  }
`

const PolicyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`

const LinkItem = styled.a`
  padding: 0 0.8rem;
  border-right: 1px solid #e6e6e6;
  &:hover {
    color: var(--blue);
  }
`
const ContactBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
`
