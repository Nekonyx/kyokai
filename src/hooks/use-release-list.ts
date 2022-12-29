import useSWR from 'swr'

import { GetReleaseListResult } from '@/services/release.service'

export type UseReleaseListParams = {
  initialData?: GetReleaseListResult
  page?: number
}

export const useReleaseList = ({
  initialData,
  page = 0
}: UseReleaseListParams = {}) => {
  const fetcher = async (): Promise<GetReleaseListResult> => {
    const query = new URLSearchParams({
      page: page.toString()
    })

    const response = await fetch(`/api/releases?${query.toString()}`)

    return response.json()
  }

  const swr = useSWR(`/api/releases?page=${page}`, fetcher, {
    fallbackData: initialData
  })

  return {
    list: swr.data,
    error: swr.error,
    isLoading: swr.isLoading
  }
}
