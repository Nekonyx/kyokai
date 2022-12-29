const BASE_URL = 'https://api.anixart.tv'

export const fetchAnixartApi = async <T>(
  url: string,
  opts?: RequestInit
): Promise<T> => {
  const endpoint = url.startsWith('/')
    ? `${BASE_URL}${url}`
    : `${BASE_URL}/${url}`

  const response = await fetch(endpoint, {
    keepalive: true,
    headers: {
      'user-agent': 'KyokaiCrawler'
    },
    ...opts
  })

  return response.json()
}
