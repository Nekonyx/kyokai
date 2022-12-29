import { IRelease } from '@/entities/release'

const BASE_URL = '/releases'
const RADIX = 10

const allBeforeBaseUrl = new RegExp(`(.+?)${BASE_URL}\/`)

export const constructReleaseUrl = (
  data: Pick<IRelease, 'id' | 'slug'>
): string => {
  return `${BASE_URL}/${data.id.toString(RADIX)}-${data.slug}`
}

export const deconstructReleaseUrl = (
  url: string
): Pick<IRelease, 'id' | 'slug'> => {
  const index = url.replace(allBeforeBaseUrl, '').indexOf('-')

  return {
    id: Number.parseInt(url.substring(0, index), RADIX),
    slug: url.substring(index + 1)
  }
}
