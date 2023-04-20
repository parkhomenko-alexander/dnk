import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
