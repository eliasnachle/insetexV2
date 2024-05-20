import Budget from '@/application/budget/budget'
import Head from 'next/head'
import React from 'react'

export default function orcamento() {
  return (
    <>
      <Head>
        <title>Insetex - Orçamento</title>
      </Head>
      <Budget />
    </>
  )
}
