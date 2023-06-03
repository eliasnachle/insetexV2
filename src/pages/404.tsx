import NotFound from '@/presentation/components/notFound/notFound'
import Head from 'next/head'
import React from 'react'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Insetex - Página não Encontrada</title>
      </Head>
      <NotFound />
    </>
  )
}
