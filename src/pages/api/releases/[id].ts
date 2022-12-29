import { NextApiRequest, NextApiResponse } from 'next'

import { getRelease } from '@/services/release.service'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number.parseInt(req.query.id as string, 10)

  if (Number.isNaN(id)) {
    res.status(400).json({
      error: 'Invalid ID'
    })

    return
  }

  const data = await getRelease({
    id
  })

  res.status(200).json(data)
}
