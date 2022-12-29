import Head from 'next/head'
import { Fragment } from 'react'

import Layout from '@/containers/layout'
import { Text } from '@nextui-org/react'

interface IProps {
  //
}

export default function RandomReleasePage(props: IProps) {
  return (
    <Fragment>
      <Head>
        <title>Рекомендации</title>
      </Head>
      <Layout>
        <Text h1>Рекомендации</Text>
      </Layout>
    </Fragment>
  )
}
