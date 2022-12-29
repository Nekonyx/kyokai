import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Fragment, useEffect } from 'react'

import { IconAnixart } from '@/components/icon'
import Layout from '@/containers/layout'
import { IRelease } from '@/entities/release'
import { getRelease } from '@/services/release.service'
import { deconstructReleaseUrl } from '@/utils/release-url'
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Divider,
  Grid,
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
        <Container className={styles.container} lg>
          <Spacer y={2} inline />
          <Row gap={2}>
            <Col span={4}>
              <Image src={release.posterUrl} showSkeleton />
              <Spacer />
              <Button
                as="a"
                href={`https://anixart.tv/release/${release.id}`}
                target="_blank"
                color="error"
                icon={<IconAnixart size={24} fill="#fff" />}
              >
                Открыть в Anixart
              </Button>
              <Divider y={2} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Text>Автор оригинала</Text>
                <Badge variant="bordered">{release.author}</Badge>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Text>Режиссёр</Text>
                <Badge variant="bordered">{release.director}</Badge>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Text>Студия</Text>
                <Badge variant="bordered">{release.studio}</Badge>
              </div>
            </Col>
            <Col>
              <Text weight="black" h2>
                {release.title}
                <span style={{ opacity: 0.4 }}> / {release.originalTitle}</span>
              </Text>
              <div className="badges">
                {release.country && (
                  <Link href={`/releases?country=${release.country}`}>
                    <Badge color="error">Страна: {release.country}</Badge>
                  </Link>
                )}
                {release.year && (
                  <Link href={`/releases?year=${release.year}`}>
                    <Badge color="error">Год: {release.year}</Badge>
                  </Link>
                )}
                {release.genres.map((genre) => (
                  <Link key={genre} href={`/releases?genre=${genre}`}>
                    <Badge>{genre}</Badge>
                  </Link>
                ))}
              </div>

              <Spacer />

              {release.note && (
                <Fragment>
                  <Card>
                    <Card.Body>
                      <Text
                        dangerouslySetInnerHTML={{ __html: release.note }}
                      />
                    </Card.Body>
                  </Card>
                  <Spacer />
                </Fragment>
              )}

              {release.description.split('\n').map((paragraph, index) => (
                <Text key={index}>{paragraph}</Text>
              ))}
            </Col>
          </Row>
        </Container>
      </Layout>
    </Fragment>
  )
}
