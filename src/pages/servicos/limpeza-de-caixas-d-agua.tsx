import Layout from '@/application/services/layout/layout'
import { serviceItemMap } from '@/data/services/limpeza'
import Head from 'next/head'

export default function limpezaDeCaixasDAgua() {
  return (
    <>
      <Head>
        <title>Insetex - {serviceItemMap.title}</title>
      </Head>
      <Layout serviceItemMap={serviceItemMap} />
    </>
  )
}
