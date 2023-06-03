import Layout from "@/presentation/components/services/layout/layout";
import { serviceItemMap } from "@/data/services/descupinizacao";
import Head from "next/head";

export default function descupinizacao() {
  return (
    <>
      <Head>
        <title>Insetex - {serviceItemMap.title}</title>
      </Head>
      <Layout serviceItemMap={serviceItemMap} />
    </>
  );
}
