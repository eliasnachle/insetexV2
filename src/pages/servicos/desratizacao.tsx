import Layout from "@/presentation/components/services/layout/layout";
import React from "react";
import { serviceItemMap } from "@/data/services/desratizacao";

export default function desratizacao() {
  return (
    <Layout serviceItemMap={serviceItemMap} />
  );
}
