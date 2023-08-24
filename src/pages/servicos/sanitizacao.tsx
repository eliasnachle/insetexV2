import Layout from '@/application/services/layout/layout'
import { serviceItemMap } from '@/data/services/sanitizacao'
import Head from 'next/head'

export default function sanitizacao() {
  return (
    <>
      <Head>
        <title>Insetex - {serviceItemMap.title}</title>
      </Head>
      <Layout serviceItemMap={serviceItemMap} />
    </>
  )
}
