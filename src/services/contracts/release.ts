export type IdNamePair = {
  id: number
  name: string
}

export interface IReleaseEntityContract {
  '@id': number
  id: number
  poster: string
  image: string
  year: string
  genres: string
  country: string
  director: string
  author: null | string
  translators: string
  studio: string
  description: string
  note: null | string
  related: IdNamePair | null
  category: IdNamePair
  rating: number
  grade: number
  status: IdNamePair | null
  duration: number
  season: number
  broadcast: number
  screenshots: string[]
  comments: unknown[]
  title_original: string
  title_ru: string
  title_alt: null | string
  episodes_released: number
  episodes_total: number
  release_date: string
  vote_1_count: number
  vote_2_count: number
  vote_3_count: number
  vote_4_count: number
  vote_5_count: number
  vote_count: number
  creation_date: number
  last_update_date: number
  aired_on_date: number
  favorites_count: number
  watching_count: number
  plan_count: number
  completed_count: number
  hold_on_count: number
  dropped_count: number
  is_adult: boolean
  is_play_disabled: boolean
  is_tpp_disabled: boolean
  can_video_appeal: boolean
  can_torlook_search: boolean
  is_deleted: boolean
  age_rating: number
  your_vote: number | null
  related_count: number
  comment_count: number
  comments_count: number
  collection_count: number
  profile_list_status: number | null
  status_id: number
  last_view_timestamp: number
  last_view_episode: null
  is_viewed: boolean
  is_favorite: boolean
  is_view_blocked: boolean
  screenshot_images: string[]
  related_releases: IReleaseEntityContract[]
  recommended_releases: IReleaseEntityContract[]
  episode_last_update: null
  comment_per_day_count: number
  video_banners: unknown[]
  profile_release_type_notification_preference_count: number
  is_release_type_notifications_enabled: boolean
}

export interface IReleaseContract {
  code: number
  release: IReleaseEntityContract
}
