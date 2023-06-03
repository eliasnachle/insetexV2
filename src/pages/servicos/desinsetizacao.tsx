import Layout from '@/presentation/components/services/layout/layout'
import { serviceItemMap } from '@/data/services/desinsetizacao'
import Head from 'next/head'

export default function desinsetizacao() {
  return (
    <>
      <Head>
        <title>Insetex - {serviceItemMap.title}</title>
      </Head>
      <Layout serviceItemMap={serviceItemMap} />
    </>
  )
}
