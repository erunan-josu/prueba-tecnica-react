/// <reference types="vite/client" />

type Item = {
  title: string
  description: string
  programType: string
  images: Images
  releaseYear: number
}

type Images = {
  'Poster Art': Poster
}

type Poster = {
  url: string
  width: number
  height: number
}

type Icon = {
  name: string
  icon: string
  href: string
}
