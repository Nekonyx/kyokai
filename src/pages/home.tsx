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

export default function HomePage(props: IProps) {
  return (
    <Fragment>
      <Head>
        <title>Домашняя</title>
      </Head>
      <Layout>
        <Spacer y={1} />
        <Text h1>Домашняя</Text>
        <Text>(здесь тоже пусто)</Text>
      </Layout>
    </Fragment>
  )
}
