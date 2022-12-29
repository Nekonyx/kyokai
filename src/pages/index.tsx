import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'

import Layout from '@/containers/layout'
import { Spacer, Text } from '@nextui-org/react'

interface IProps {
  //
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}

export default function IndexPage(props: IProps) {
  return (
    <Fragment>
      <Head>
        <title>Главная</title>
      </Head>
      <Layout>
        <Spacer y={1} />
        <Text h1>Главная</Text>
        <Text>(здесь кстати ничего нет)</Text>
      </Layout>
    </Fragment>
  )
}
