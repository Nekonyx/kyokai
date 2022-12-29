import { Category, Status } from '@/constants'

export interface IRelease {
  id: number
  slug: string
  url: string
  posterUrl: string
  title: string
  originalTitle: string
  alternativeTitle: string | null
  year: string | null
  genres: string[]
  country: string
  director: string | null
  author: string | null
  studio: string | null
  description: string
  note: string | null
  category: Category
  status: Status
  rating: number
  duration: number
  season: number
  episodesTotal: number | null
  episodesReleased: number | null
  favoritesCount: number
}
