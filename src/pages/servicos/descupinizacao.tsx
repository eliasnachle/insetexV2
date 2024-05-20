import { serviceItemMap } from '@/data/services/descupinizacao'
import Head from 'next/head'
import Layout from '@/application/services/layout/layout'

export default function descupinizacao() {
  return (
    <>
      <Head>
        <title>Insetex - {serviceItemMap.title}</title>
      </Head>
      <Layout serviceItemMap={serviceItemMap} />
    </>
  )
}
