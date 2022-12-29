import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Fragment, useEffect } from 'react'

import Layout from '@/containers/layout'
import { IRelease } from '@/entities/release'
import { getRelease } from '@/services/release.service'
import { deconstructReleaseUrl } from '@/utils/release-url'
import {
  Button,
  Col,
  Container,
  Image,
  Link,
  Row,
  Spacer,
  Text
} from '@nextui-org/react'

import styles from './[id].module.scss'

interface IProps {
  release: IRelease
}

export const getServerSideProps: GetServerSideProps<IProps> = async (ctx) => {
  const { id } = deconstructReleaseUrl(ctx.query.id as string)
  const release = await getRelease({
    id
  })

  return {
    props: {
      release
    }
  }
}

export default function ReleasePage({ release }: IProps) {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${release.posterUrl})`

    return () => {
      document.body.style.backgroundImage = 'unset'
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>
          Смотреть аниме {release.title} ({release.originalTitle})
        </title>
      </Head>
      <Layout className={styles.layout} fluid>
        <Container className={styles.container} md>
          <Spacer y={2} inline />
          <Row gap={2}>
            <Col span={3}>
              <Image src={release.posterUrl} />
              <Button as="a" href="/">xd</Button>
            </Col>
            <Col>
              <Text h1>{release.title}</Text>
              <Text>{release.originalTitle}</Text>
              <Text>{release.description}</Text>
            </Col>
          </Row>
        </Container>
      </Layout>
    </Fragment>
  )
}
