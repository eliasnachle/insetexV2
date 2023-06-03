import Layout from '@/presentation/components/services/layout/layout'
import { serviceItemMap } from '@/data/services/desentupimento'
import Head from 'next/head'

export default function desentupimento() {
  return (
    <>
      <Head>
        <title>Insetex - {serviceItemMap.title}</title>
      </Head>
      <Layout serviceItemMap={serviceItemMap} />
    </>
  )
}
