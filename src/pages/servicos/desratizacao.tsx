import Layout from '@/application/services/layout/layout'
import { serviceItemMap } from '@/data/services/desratizacao'
import Head from 'next/head'

export default function desratizacao() {
  return (
    <>
      <Head>
        <title>Insetex - {serviceItemMap.title}</title>
      </Head>
      <Layout serviceItemMap={serviceItemMap} />
    </>
  )
}
