import { GetServerSideProps } from 'next'
import { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { ReleaseCard } from '@/components/release-card'
import Layout from '@/containers/layout'
import { IRelease } from '@/entities/release'
import { useReleaseList } from '@/hooks/use-release-list'
import {
  getReleaseList,
  GetReleaseListResult
} from '@/services/release.service'
import { Grid, Loading, Spacer, Text } from '@nextui-org/react'

interface IProps {
  initialData: GetReleaseListResult
}

export const getServerSideProps: GetServerSideProps<IProps> = async (ctx) => {
  const releases = await getReleaseList({
    page: Number.parseInt(ctx.query.page as string, 10) - 1 || 0
  })

  return {
    props: {
      initialData: releases
    }
  }
}

export default function ReleaseListPage({ initialData }: IProps) {
  const [page, setPage] = useState(0)
  const [items, setItems] = useState<IRelease[]>([])

  const { ref: observeRef, inView } = useInView()

  const { list, isLoading } = useReleaseList({
    page,
    initialData
  })

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1)
    }
  }, [inView])

  useEffect(() => {
    setItems([...items, ...list!.items])
  }, [list])

  return (
    <Layout>
      <Spacer y={1} />
      <Text h1>Релизы</Text>

      <Grid.Container gap={1} justify="center">
        {items?.map((item) => (
          <Grid key={item.slug} xs={5} sm={2.2} md={2} lg={2} xl={1.5}>
            <ReleaseCard release={item} />
          </Grid>
        ))}
      </Grid.Container>

      {isLoading && <Loading />}

      <div ref={observeRef} />
    </Layout>
  )
}
