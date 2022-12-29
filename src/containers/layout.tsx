import { useRouter } from 'next/router'
import { Fragment, PropsWithChildren, useMemo } from 'react'

import { Header } from '@/components/header'
import { Container, ContainerProps } from '@nextui-org/react'

interface IProps {
  fluid?: boolean
  className?: string
  headerClassName?: string
}

export default function Layout({
  children,
  className,
  fluid,
  headerClassName
}: PropsWithChildren<IProps>) {
  const router = useRouter()
  const header = useMemo(() => {
    return <Header className={headerClassName} currentPath={router.pathname} />
  }, [router.pathname, headerClassName])

  return (
    <Fragment>
      {header}
      <Container className={className} as="main" fluid={fluid}>
        {children}
      </Container>
    </Fragment>
  )
}
