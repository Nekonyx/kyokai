import '@/styles/global.scss'

import App, { AppProps } from 'next/app'

import { theme } from '@/styles/theme'
import { NextUIProvider } from '@nextui-org/react'

export class KyokaiApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  }
}

export default KyokaiApp
