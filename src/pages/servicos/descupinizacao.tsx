import Layout from "@/presentation/components/services/layout/layout";
import React from "react";
import { serviceItemMap } from "@/data/services/descupinizacao";

export default function descupinizacao() {
  return (
    <Layout serviceItemMap={serviceItemMap} />
  );
}
