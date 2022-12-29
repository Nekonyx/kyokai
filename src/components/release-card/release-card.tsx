import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

import { IRelease } from '@/entities/release'
import { Card, Loading, Text } from '@nextui-org/react'

import styles from './release-card.module.scss'

interface IProps {
  release: IRelease
}

export default function ReleaseCard({ release }: IProps) {
  const [isLoading, setLoading] = useState(false)

  return (
    <Link
      className={styles.link}
      href={release.url}
      onClick={() => setLoading(true)}
    >
      <Card className={styles.card} isHoverable isPressable disableRipple>
        <Card.Image
          className={styles.image}
          src={release.posterUrl}
          objectFit="cover"
          autoResize
        />
        {isLoading && (
          <Card.Body className={styles.body}>
            <Loading color="white" size="lg" />
          </Card.Body>
        )}
        <Card.Footer className={styles.footer}>
          <Text className={styles.footer__title} weight="bold">
            {release.title}
          </Text>
          <Text
            className={clsx(
              styles.footer__title,
              styles['footer__title-original']
            )}
          >
            {release.originalTitle}
          </Text>
        </Card.Footer>
      </Card>
    </Link>
  )
}
