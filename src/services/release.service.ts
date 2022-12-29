import slugify from 'slug'

import { Category, Status } from '@/constants'
import { IRelease } from '@/entities/release'
import { fetchAnixartApi } from '@/utils/fetch-anixart-api'
import { constructReleaseUrl } from '@/utils/release-url'

import { IReleaseContract, IReleaseEntityContract } from './contracts/release'
import {
  IReleaseListContentContract,
  IReleaseListContract
} from './contracts/release-list'

//#region Параметры
export type GetReleaseParams = {
  ac?: AbortController
  id: number
}

export type GetReleaseListParams = {
  ac?: AbortController
  page: number
  filters?: Record<string, any>
}
//#endregion

//#region Результаты
export type GetReleaseResult = IRelease

export type GetReleaseListResult = {
  count: number
  pages: number
  items: IRelease[]
}
//#endregion

export const getRelease = async ({
  ac,
  id
}: GetReleaseParams): Promise<GetReleaseResult> => {
  const data: IReleaseContract = await fetchAnixartApi(`/release/${id}`, {
    signal: ac?.signal
  })

  return makeRelease(data.release)
}

export const getReleaseList = async (
  { ac, page, filters }: GetReleaseListParams = {
    page: 1
  }
): Promise<GetReleaseListResult> => {
  const data: IReleaseListContract = await fetchAnixartApi(`/filter/${page}`, {
    signal: ac?.signal
  })

  return {
    count: data.total_count,
    pages: data.total_page_count,
    items: data.content.map((item) => makeRelease(item))
  }
}

/**
 * Мапит данные о релизе из контракта в сущность
 * @param data Данные из контракта
 */
function makeRelease(
  data: IReleaseListContentContract | IReleaseEntityContract
): IRelease {
  const slug = slugify(data.title_original)
  const url = constructReleaseUrl({
    id: data.id,
    slug
  })

  let title = data.title_ru

  const TARGET_EMOJI = '❄️'
  if (title.slice(0, TARGET_EMOJI.length) === TARGET_EMOJI) {
    title = title.slice(TARGET_EMOJI.length).trim()
  }

  return {
    slug,
    url,
    id: data.id,
    posterUrl: data.image,
    title: title,
    originalTitle: data.title_original,
    alternativeTitle: data.title_alt,
    year: data.year,
    genres: data.genres?.split(', ') ?? [],
    country: data.country,
    director: data.director,
    author: data.author,
    studio: data.studio,
    description: data.description,
    note: data.note,
    category: data.category.id ?? Category.Unknown,
    status: data.status?.id ?? Status.Unknown,
    rating: data.rating,
    duration: data.duration,
    season: data.season,
    episodesTotal: data.episodes_total,
    episodesReleased: data.episodes_released,
    favoritesCount: data.favorites_count
  }
}
