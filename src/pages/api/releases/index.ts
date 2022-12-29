import { NextApiRequest, NextApiResponse } from 'next'

import { getReleaseList } from '@/services/release.service'

const dummyCache = new Map<number, any>()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const page = Number.parseInt(req.query.page as string, 10) || 0

  if (dummyCache.has(page)) {
    res.status(200).json(dummyCache.get(page))
    return
  }

  const data = await getReleaseList({
    page
  })

  dummyCache.set(page, data)

  res.status(200).json(data)
}
